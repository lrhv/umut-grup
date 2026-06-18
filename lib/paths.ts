export const basePath =
  process.env.NODE_ENV === "production" ? "/umut-grup" : "/umut-grup/";

export function publicPath(path: string) {
  if (!path) return path;
  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}