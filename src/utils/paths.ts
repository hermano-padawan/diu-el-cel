const baseUrl = import.meta.env.BASE_URL;

export function withBase(path = "/") {
  if (/^(?:[a-z]+:)?\/\//i.test(path) || path.startsWith("#")) return path;
  const relativePath = path.replace(/^\/+/, "");
  return relativePath ? `${baseUrl}${relativePath}` : baseUrl;
}
