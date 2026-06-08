import puppeteer from "puppeteer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const URL = process.env.DECK_URL || "http://localhost:4321/";
const VERIFY = process.argv.includes("--verify");

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await page.goto(URL, { waitUntil: "networkidle0" });

  // Trigger every framer-motion whileInView reveal (once:true) by scrolling through,
  // dwell so width/stagger animations finish, then force any stragglers visible.
  await page.evaluate(async () => {
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    for (let y = 0; y < document.body.scrollHeight; y += 300) {
      window.scrollTo(0, y);
      await sleep(130);
    }
    window.scrollTo(0, document.body.scrollHeight);
    await sleep(2200); // let width + staggered reveals complete
    // Belt-and-braces: anything still left at opacity 0 / translated gets pinned to its final state.
    document.querySelectorAll("*").forEach((el) => {
      const s = el.style;
      if (!s) return;
      if (s.opacity !== "" && parseFloat(s.opacity) < 1) s.opacity = "1";
      if (s.transform && /translate|scale/.test(s.transform)) s.transform = "none";
    });
    window.scrollTo(0, 0);
    await sleep(500);
  });

  // Hide fixed chrome (sticky nav + scroll-progress bar) so it doesn't overlay the export.
  await page.evaluate(() => {
    const css = `nav{display:none!important;} body>div>div[style*="scaleX"], .fixed.top-0{display:none!important;}`;
    const s = document.createElement("style");
    s.textContent = css;
    document.head.appendChild(s);
    // Also drop any element that is position:fixed at the very top (progress bar).
    document.querySelectorAll("*").forEach((el) => {
      const st = getComputedStyle(el);
      if (st.position === "fixed" && parseInt(st.top || "999") <= 2 && el.offsetHeight < 8) {
        el.style.display = "none";
      }
    });
  });
  await new Promise((r) => setTimeout(r, 300));

  if (VERIFY) {
    const dir = "/tmp/verify";
    fs.mkdirSync(dir, { recursive: true });
    for (const id of ["hero", "opportunity", "product", "partners", "shariah", "markets", "roadmap", "team", "structure", "proceeds", "investment", "cta"]) {
      const el = await page.$(`#${id}`);
      let target = el;
      if (!target && id === "cta") {
        const meshes = await page.$$("section.gradient-mesh");
        target = meshes[meshes.length - 1] || null;
      }
      if (!target && id === "hero") {
        target = await page.$("section.gradient-mesh");
      }
      if (target) {
        await target.scrollIntoView();
        await new Promise((r) => setTimeout(r, 700));
        await target.screenshot({ path: `${dir}/${id}.png` });
        console.log(`shot ${id}`);
      } else {
        console.log(`MISSING #${id}`);
      }
    }
    await page.evaluate(() => window.scrollTo(0, 0));
  }

  const bodyHeight = await page.evaluate(() => document.body.scrollHeight);
  const outputPath = path.join(__dirname, "ShareMatch-Pitch-Deck.pdf");
  await page.pdf({
    path: outputPath,
    width: "1440px",
    height: `${bodyHeight}px`,
    printBackground: true,
    margin: { top: "0", right: "0", bottom: "0", left: "0" },
    preferCSSPageSize: false,
  });
  console.log(`PDF: ${outputPath} (${(fs.statSync(outputPath).size / 1024 / 1024).toFixed(2)} MB, height ${bodyHeight}px)`);

  await browser.close();
})();
