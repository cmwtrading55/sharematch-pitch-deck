// Generates ShareMatch-Pitch-Deck.pdf as a PAGINATED PDF (one section per page).
// IMPORTANT: do NOT go back to a single full-height page.pdf() capture — that
// produces ~139in-tall pages that Google Drive / most viewers cannot render.
// Each <section> is captured and assembled into a normal-sized page via PyMuPDF.
import puppeteer from "puppeteer";
import { execFileSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const URL = process.env.DECK_URL || "http://localhost:4321/";
const PAGES_DIR = "/tmp/deckpages";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

(async () => {
  fs.rmSync(PAGES_DIR, { recursive: true, force: true });
  fs.mkdirSync(PAGES_DIR, { recursive: true });

  const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox", "--disable-setuid-sandbox"] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await page.goto(URL, { waitUntil: "networkidle0", timeout: 60000 });

  // Trigger framer-motion whileInView reveals, then pin any stragglers visible.
  await page.evaluate(async () => {
    const s = (ms) => new Promise((r) => setTimeout(r, ms));
    for (let y = 0; y < document.body.scrollHeight; y += 300) { window.scrollTo(0, y); await s(120); }
    window.scrollTo(0, document.body.scrollHeight); await s(2200);
    document.querySelectorAll("*").forEach((el) => {
      const st = el.style; if (!st) return;
      if (st.opacity !== "" && parseFloat(st.opacity) < 1) st.opacity = "1";
      if (st.transform && /translate|scale/.test(st.transform)) st.transform = "none";
    });
    window.scrollTo(0, 0); await s(400);
  });
  // Hide fixed nav + scroll-progress bar.
  await page.evaluate(() => {
    const s = document.createElement("style");
    s.textContent = "nav{display:none!important;} .fixed.top-0{display:none!important;}";
    document.head.appendChild(s);
  });
  await sleep(400);

  const sections = await page.$$("main section");
  const manifest = [];
  let n = 0;
  for (const sec of sections) {
    await sec.scrollIntoView();
    await sleep(250);
    const box = await sec.boundingBox();
    if (!box || box.height < 40) continue;
    n++;
    const file = path.join(PAGES_DIR, `${String(n).padStart(2, "0")}.png`);
    await sec.screenshot({ path: file });
    manifest.push({ file, w: Math.round(box.width), h: Math.round(box.height) });
  }
  fs.writeFileSync(path.join(PAGES_DIR, "manifest.json"), JSON.stringify(manifest));
  await browser.close();

  // Assemble into a paginated PDF (one section per page) with PyMuPDF.
  const out = path.join(__dirname, "ShareMatch-Pitch-Deck.pdf");
  const py = `
import fitz, json, os
m = json.load(open(${JSON.stringify(path.join(PAGES_DIR, "manifest.json"))}))
doc = fitz.open()
for it in m:
    page = doc.new_page(width=it["w"]*0.75, height=it["h"]*0.75)
    page.insert_image(page.rect, filename=it["file"])
doc.save(${JSON.stringify(out)}, deflate=True, garbage=4)
print("PDF:", ${JSON.stringify(out)}, doc.page_count, "pages,", round(os.path.getsize(${JSON.stringify(out)})/1024/1024,2), "MB")
`;
  const res = execFileSync("python3", ["-c", py], { encoding: "utf8" });
  console.log(`captured ${n} sections; ${res.trim()}`);
})();
