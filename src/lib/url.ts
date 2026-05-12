// Astro `base` ayarı ile uyumlu URL helper.
// base="/" iken no-op; base="/bakkocmimarlik" iken otomatik prefix ekler.
const base = import.meta.env.BASE_URL.replace(/\/$/, "");

export function u(path: string): string {
  if (!path) return path;
  if (/^([a-z]+:)?\/\//i.test(path)) return path; // http(s)://, //
  if (path.startsWith("mailto:") || path.startsWith("tel:") || path.startsWith("#")) return path;
  if (!path.startsWith("/")) return path;
  return `${base}${path}`;
}
