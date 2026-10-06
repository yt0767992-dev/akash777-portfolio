/**
 * Central runtime configuration for the frontend.
 *
 * Values come from environment variables (`.env` locally, or
 * Settings → Environment variables on Cloudflare Pages).
 * See `.env.example` for documentation of each key.
 *
 * ⚠️ Only `VITE_*` variables are bundled into the public JavaScript.
 *    Never store secrets here — they would be visible to every visitor.
 */

/** Normalizes a URL by stripping trailing slashes. */
const normalize = (value: string | undefined): string =>
  (value ?? '').trim().replace(/\/+$/, '');

/**
 * Production backend/API base URL.
 *
 * This project currently ships as a pure static site and does not call any
 * backend of its own, so this defaults to an empty string. When a backend
 * (e.g. a Cloudflare Worker) is added, set `VITE_API_BASE_URL` on
 * Cloudflare Pages and every API call will target production automatically.
 *
 * @example 'https://api.akash777.workers.dev'
 */
export const API_BASE_URL: string = normalize(import.meta.env.VITE_API_BASE_URL);

/** Public URL of the deployed site (used for SEO/canonical links). */
export const SITE_URL: string = normalize(import.meta.env.VITE_SITE_URL);

/**
 * Builds an absolute API endpoint path.
 * With no backend configured it returns the path unchanged, so callers
 * keep working in local development.
 *
 * @example apiPath('/contact') // 'https://api.../contact' or '/contact'
 */
export const apiPath = (path: string): string => {
  if (!API_BASE_URL) return path;
  return `${API_BASE_URL}${path.startsWith('/') ? path : `/${path}`}`;
};
