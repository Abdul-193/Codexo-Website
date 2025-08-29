export function createPageUrl(name) {
  if (!name) return "/";
  return `/${String(name).toLowerCase()}`;
}
