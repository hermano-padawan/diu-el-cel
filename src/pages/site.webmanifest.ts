export const prerender = true;

export function GET() {
  const base = import.meta.env.BASE_URL;
  const manifest = {
    name: "Cel Endins",
    short_name: "Cel Endins",
    description: "Horòscop i astrologia en català.",
    start_url: base,
    scope: base,
    display: "standalone",
    background_color: "#f3efe5",
    theme_color: "#f3efe5",
    icons: [
      { src: `${base}icons/icon-192.png`, sizes: "192x192", type: "image/png" },
      { src: `${base}icons/icon-512.png`, sizes: "512x512", type: "image/png" }
    ]
  };

  return new Response(JSON.stringify(manifest), {
    headers: { "Content-Type": "application/manifest+json; charset=utf-8" }
  });
}
