import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const dist = fileURLToPath(new URL("../dist/", import.meta.url));
if (!existsSync(dist)) throw new Error("Falta dist/. Executa npm run build abans de l'auditoria.");

const htmlFiles = [];
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const file = join(dir, name);
    statSync(file).isDirectory() ? walk(file) : name.endsWith(".html") && htmlFiles.push(file);
  }
};
walk(dist);

const canonicals = [];
for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  const noindex = /<meta name="robots" content="[^"]*noindex/i.test(html);
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/i)?.[1];
  const title = html.match(/<title>(.*?)<\/title>/is)?.[1]?.trim();
  const h1Count = (html.match(/<h1\b/gi) ?? []).length;
  if (!canonical || !title || h1Count !== 1) throw new Error(`SEO incomplet a ${file}`);
  if (!noindex) canonicals.push(canonical);
}

const sitemap = readFileSync(new URL("../dist/sitemap.xml", import.meta.url), "utf8");
const sitemapUrls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
const duplicates = sitemapUrls.filter((url, index) => sitemapUrls.indexOf(url) !== index);
const missing = canonicals.filter((url) => !sitemapUrls.includes(url));
const extra = sitemapUrls.filter((url) => !canonicals.includes(url));
const datedHoroscopes = sitemapUrls
  .filter((url) => /^https:\/\/diuelcel\.site\/(aries|taure|bessons|cranc|lleo|verge|balanca|escorpio|sagitari|capricorn|aquari|peixos)\/$/.test(url))
  .every((url) => new RegExp(`<loc>${url.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}<\\/loc>\\s*<lastmod>\\d{4}-\\d{2}-\\d{2}<\\/lastmod>`).test(sitemap));

if (duplicates.length || missing.length || extra.length || !datedHoroscopes) {
  throw new Error(JSON.stringify({ duplicates, missing, extra, datedHoroscopes }, null, 2));
}
console.log(`SEO correcte: ${canonicals.length} URLs indexables i sitemap sincronitzat.`);
