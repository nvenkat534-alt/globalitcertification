/** Client-only document extraction. No upload, persistence or model call. */
type PdfTextItem = { str: string; transform: number[]; width: number; height: number; hasEOL: boolean };
export function readablePdfText(items: unknown[]): string {
  let text = "";
  let previous: PdfTextItem | null = null;
  for (const value of items) {
    if (!value || typeof value !== "object" || !("str" in value)) continue;
    const item = value as PdfTextItem;
    if (previous && item.str && !/\s$/.test(text) && !/^\s/.test(item.str)) {
      const changedLine = Math.abs(item.transform[5] - previous.transform[5]) > Math.max(2, item.height * .4);
      const gap = item.transform[4] - (previous.transform[4] + previous.width);
      if (changedLine) text += "\n";
      else if (gap > Math.max(1, item.height * .15)) text += " ";
    }
    text += item.str;
    if (item.hasEOL) { text += "\n"; previous = null; }
    else if (item.str) previous = item;
  }
  return text;
}
export async function extractResume(file: File): Promise<string> {
  if (file.size > 5 * 1024 * 1024) throw new Error("Choose a file smaller than 5 MB, or paste its text below.");
  const extension = file.name.split(".").pop()?.toLowerCase();
  if (!["pdf", "docx", "txt"].includes(extension || "")) throw new Error("Use PDF, DOCX or TXT. For older .doc files, save as DOCX or paste the text.");
  let text = "";
  if (extension === "txt") text = await file.text();
  if (extension === "docx") {
    const mammoth = await import("mammoth");
    const result = await mammoth.extractRawText({ arrayBuffer: await file.arrayBuffer() });
    text = result.value;
  }
  if (extension === "pdf") {
    const pdf = await import("pdfjs-dist");
    pdf.GlobalWorkerOptions.workerSrc = "/workers/pdf.worker.min.mjs";
    const task = pdf.getDocument({ data: await file.arrayBuffer(), useSystemFonts: true });
    try {
      const document = await task.promise;
      if (document.numPages > 20) throw new Error("This PDF has more than 20 pages. Choose your résumé only, or paste the relevant text.");
      const pages: string[] = [];
      for (let i = 1; i <= document.numPages; i++) {
        const page = await document.getPage(i);
        const content = await page.getTextContent();
        pages.push(readablePdfText(content.items));
      }
      text = pages.join("\n\n");
    } finally { await task.destroy(); }
  }
  if (text.trim().length < 80) throw new Error("There isn’t enough readable text. Scanned or protected PDFs may need OCR first; you can paste your résumé below.");
  if (text.length > 60000) throw new Error("This document contains too much text. Use a shorter résumé or paste up to 60,000 characters.");
  return text;
}
