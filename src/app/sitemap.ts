import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

const ROUTES = ["", "/features", "/how-it-works", "/about", "/customers", "/pricing", "/contact", "/privacy", "/terms"];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((path) => ({
    url: `${SITE.url}${path}`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.6,
  }));
}
