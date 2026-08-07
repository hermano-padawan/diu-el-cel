export const prerender = true;

export function GET({ site }: { site: URL | undefined }) {
  const origin = site ?? new URL("https://hermano-padawan.github.io");
  const sitemap = new URL(`${import.meta.env.BASE_URL}sitemap.xml`, origin);
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemap.href}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" }
  });
}
