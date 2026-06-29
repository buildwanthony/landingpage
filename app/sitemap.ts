import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://buildwithanthony.com";

  const routes = [
    "",
    "/about",
    "/projects",
    "/writing",
    "/videos",
    "/resources",
    "/newsletter",
    "/uses",
    "/resume",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
