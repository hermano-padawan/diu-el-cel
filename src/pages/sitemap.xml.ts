import { getCollection } from "astro:content";
import { glossaryTerms } from "../data/glossary";

export const prerender = true;

const resourcePaths = [
  "/recursos/", "/recursos/calculadora-ascendent/", "/recursos/calculadora-compatibilitat/",
  "/recursos/calculadora-signe/", "/recursos/calendari-zodiacal/", "/recursos/comparador-signes/",
  "/recursos/glossari/", "/recursos/preguntes-frequents/", "/recursos/quin-signe-ets-realment/",
  "/recursos/roda-zodiacal/"
];
export async function GET({ site }: { site: URL | undefined }) {
  const origin = site ?? new URL("https://diuelcel.site");
  const horoscopes = await getCollection("horoscopes");
  const compatibilities = await getCollection("compatibilities");
  const horoscopeDate = horoscopes
    .map((entry) => entry.data.date.toISOString().slice(0, 10))
    .sort()
    .at(-1);
  const entries: Array<{ path: string; lastmod?: string }> = [
    { path: "/", lastmod: horoscopeDate },
    { path: "/compatibilitats/" },
    ...resourcePaths.map((path) => ({ path })),
    ...horoscopes.map((entry) => ({
      path: `/${entry.id}/`,
      lastmod: entry.data.date.toISOString().slice(0, 10)
    })),
    ...compatibilities.map((entry) => ({
      path: `/compatibilitats/${entry.data.slug}/`,
      lastmod: entry.data.date.toISOString().slice(0, 10)
    })),
    ...glossaryTerms.map((term) => ({ path: `/recursos/glossari/${term.slug}/` }))
  ];
  const urls = entries.map(({ path, lastmod }) => {
    const loc = new URL(`${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`, origin).href;
    return `  <url>\n    <loc>${loc}</loc>${lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ""}\n  </url>`;
  }).join("\n");
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, {
    headers: { "Content-Type": "application/xml; charset=utf-8" }
  });
}
