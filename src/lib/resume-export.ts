import { resumeBlocks, type ResumeDraft, type ResumeBlock } from "./resume-builder";

export function saveFile(data: Blob, filename: string) {
  const url = URL.createObjectURL(data);
  const link = document.createElement("a"); link.href = url; link.download = filename; link.click();
  setTimeout(() => URL.revokeObjectURL(url), 10000);
}
export function resumeFilename(draft: ResumeDraft) {
  return `${draft.name.trim().replace(/[^\p{L}\p{N} _-]/gu, "").replace(/\s+/g, "-").slice(0, 80) || "my"}-resume`;
}
export async function createWord(draft: ResumeDraft): Promise<Blob> {
  const { Document, Paragraph, TextRun, Packer, HeadingLevel } = await import("docx");
  const accent = draft.template === "modern" ? "17365A" : "111111";
  const children = resumeBlocks(draft).map(b => new Paragraph({
    heading: b.kind === "heading" ? HeadingLevel.HEADING_1 : undefined,
    keepNext: ["name", "headline", "heading"].includes(b.kind),
    bullet: b.kind === "bullet" ? { level: 0 } : undefined,
    spacing: { before: b.kind === "heading" ? 200 : 0, after: b.kind === "name" ? 100 : 70, line: 270 },
    children: [new TextRun({ text: b.text, font: "Arial", size: b.kind === "name" ? 42 : b.kind === "heading" ? 24 : b.kind === "contact" ? 19 : 21, bold: ["name", "heading"].includes(b.kind), color: ["name", "heading"].includes(b.kind) ? accent : "222222" })],
  }));
  return Packer.toBlob(new Document({
    creator: "", title: draft.name ? `${draft.name} — Résumé` : "Résumé", description: "",
    styles: { default: { document: { run: { font: "Arial", size: 21 }, paragraph: { spacing: { after: 70 } } } } },
    sections: [{ properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 850, bottom: 850, left: 850, right: 850 } } }, children }],
  }));
}
type FontBytes = { regular: Uint8Array; bold: Uint8Array; extended: Uint8Array; extendedBold: Uint8Array };
export async function loadResumeFonts(): Promise<FontBytes> {
  const names = ["regular", "bold", "extended", "extended-bold"];
  const fonts = await Promise.all(names.map(async name => {
    const response = await fetch(`/fonts/resume/${name}.woff`);
    if (!response.ok) throw new Error("PDF fonts could not load. Try again or download Word instead.");
    return new Uint8Array(await response.arrayBuffer());
  }));
  return { regular: fonts[0], bold: fonts[1], extended: fonts[2], extendedBold: fonts[3] };
}
/** Single-column, selectable text; split long tokens and paginate without clipping. */
export async function createPdf(draft: ResumeDraft, bytes?: FontBytes): Promise<Uint8Array> {
  const [{ PDFDocument, rgb }, fontkitModule] = await Promise.all([import("pdf-lib"), import("@pdf-lib/fontkit")]);
  const doc = await PDFDocument.create();
  doc.registerFontkit(fontkitModule.default);
  const data = bytes || await loadResumeFonts();
  const fonts = await Promise.all([data.regular, data.bold, data.extended, data.extendedBold].map(b => doc.embedFont(b, { subset: true })));
  const sets = fonts.map(f => new Set(f.getCharacterSet()));
  const blocks = resumeBlocks(draft);
  const unsupported = [...new Set(Array.from(blocks.map(b => b.text).join("")).filter(c => !sets[0].has(c.codePointAt(0)!) && !sets[2].has(c.codePointAt(0)!)))];
  if (unsupported.length) throw new Error(`PDF font does not support these characters: ${unsupported.slice(0, 8).join(" ")}. Download Word to preserve your text, or edit these characters.`);
  const fontFor = (c: string, bold: boolean) => { const i = bold ? 1 : 0; return fonts[sets[i].has(c.codePointAt(0)!) ? i : i + 2]; };
  const width = (text: string, size: number, bold: boolean) => Array.from(text).reduce((sum, c) => sum + fontFor(c, bold).widthOfTextAtSize(c, size), 0);
  const wrap = (text: string, size: number, bold: boolean, max: number) => {
    const lines: string[] = []; let line = "";
    for (const word of text.split(/\s+/)) {
      if (line && width(`${line} ${word}`, size, bold) <= max) { line += ` ${word}`; continue; }
      if (line) { lines.push(line); line = ""; }
      for (const char of Array.from(word)) {
        if (line && width(line + char, size, bold) > max) { lines.push(line); line = ""; }
        line += char;
      }
    }
    if (line) lines.push(line);
    return lines;
  };
  const accent = draft.template === "modern" ? rgb(.09, .21, .35) : rgb(.07, .07, .07);
  let page = doc.addPage([595.28, 841.89]); let y = 792;
  const newPage = () => { page = doc.addPage([595.28, 841.89]); y = 792; };
  const draw = (text: string, x: number, size: number, bold: boolean, kind: ResumeBlock["kind"]) => {
    let run = ""; let font = fontFor(text[0] || " ", bold);
    const flush = () => { if (!run) return; page.drawText(run, { x, y, size, font, color: ["name", "heading"].includes(kind) ? accent : rgb(.13, .13, .13) }); x += font.widthOfTextAtSize(run, size); run = ""; };
    for (const c of Array.from(text)) { const next = fontFor(c, bold); if (next !== font) { flush(); font = next; } run += c; } flush();
  };
  for (const block of blocks) {
    const size = block.kind === "name" ? 22 : block.kind === "heading" ? 12 : block.kind === "contact" ? 9 : 10.5;
    const bold = ["name", "heading"].includes(block.kind);
    const leading = size * 1.42;
    const gap = block.kind === "heading" ? 12 : 0;
    const lines = wrap(block.text, size, bold, block.kind === "bullet" ? 480 : 495);
    // A heading stays with at least the first following content line.
    const minimum = block.kind === "heading" ? lines.length * leading + 23 : leading;
    if (y - gap - minimum < 48) newPage(); else y -= gap;
    for (let i = 0; i < lines.length; i++) {
      if (y - leading < 48) newPage();
      if (block.kind === "bullet" && i === 0) draw("•", 50, size, false, "body");
      draw(lines[i], block.kind === "bullet" ? 65 : 50, size, bold, block.kind); y -= leading;
    }
    y -= block.kind === "name" ? 5 : 4;
  }
  doc.setTitle(draft.name ? `${draft.name} — Résumé` : "Résumé");
  return doc.save();
}
