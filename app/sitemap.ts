import type { MetadataRoute } from "next";
import { programs } from "@/app/programs/programData";

const siteUrl = "https://koc12906.org";

const staticRoutes = [
  "",
  "/about",
  "/contact",
  "/events",
  "/events/bbq",
  "/events/coats-for-kids",
  "/events/fish-fries",
  "/events/free-throw-contest",
  "/gallery",
  "/get-involved",
  "/leadership",
  "/membership",
  "/programs",
  "/resources",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const programRoutes = programs.map((program) => `/programs/${program.slug}`);

  return [...staticRoutes, ...programRoutes].map((route) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority:
      route === ""
        ? 1
        : route === "/events" || route === "/programs"
          ? 0.8
          : 0.6,
  }));
}
