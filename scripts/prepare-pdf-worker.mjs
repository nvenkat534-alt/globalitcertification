import { mkdir, copyFile } from "node:fs/promises";
await mkdir("public/workers", { recursive: true });
await copyFile("node_modules/pdfjs-dist/build/pdf.worker.min.mjs", "public/workers/pdf.worker.min.mjs");
await mkdir("public/fonts/resume", { recursive: true });
for (const [target, subset, weight] of [["regular", "latin", 400], ["bold", "latin", 700], ["extended", "latin-ext", 400], ["extended-bold", "latin-ext", 700]]) {
  await copyFile(`node_modules/@fontsource/noto-sans/files/noto-sans-${subset}-${weight}-normal.woff`, `public/fonts/resume/${target}.woff`);
}
await copyFile("node_modules/@fontsource/noto-sans/LICENSE", "public/fonts/resume/LICENSE.txt");
