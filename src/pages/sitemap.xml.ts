import { getCollection } from "astro:content";
import { glossaryTerms } from "../data/glossary";

export const prerender = true;

const resourcePaths = [
  "/recursos/", "/recursos/calculadora-ascendent/", "/recursos/calculadora-compatibilitat/",
  "/recursos/calculadora-signe/", "/recursos/calendari-zodiacal/", "/recursos/comparador-signes/",
  "/recursos/glossari/", "/recursos/preguntes-frequents/", "/recursos/quin-signe-ets-realment/",
  "/recursos/roda-zodiacal/"
];
const legalPaths = ["/avis-legal/", "/privacitat/", "/cookies/", "/condicions-us/", "/contacte/"];

export async function GET({ site }: { site: URL | undefined }) {
  const origin = site ?? new URL("https://hermano-padawan.github.io");
  const horoscopes = await getCollection("horoscopes");
  const compatibilities = await getCollection("compatibilities");
  const paths = [
    "/", "/compatibilitats/", ...resourcePaths, ...legalPaths,
    ...horoscopes.map((entry) => `/${entry.id}/`),
    ...compatibilities.map((entry) => `/compatibilitats/${entry.data.slug}/`),
    ...glossaryTerms.map((term) => `/recursos/glossari/${term.slug}/`)
  ];
  const urls = paths.map((path) => `<url><loc>${new URL(`${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`, origin).href}</loc></url>`).join("");
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, {
    headers: { "Content-Type": "application/xml; charset=utf-8" }
  });
}
