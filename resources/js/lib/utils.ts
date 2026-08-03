import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAssetUrl(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  const r2Url = import.meta.env.VITE_R2_URL;
  if (!r2Url) {
    return path;
  }
  const cleanR2Url = r2Url.endsWith('/') ? r2Url.slice(0, -1) : r2Url;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${cleanR2Url}${cleanPath}`;
}
