import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const appUrl = process.env.NEXT_APP_BASE_URL;

  const apiBaseUrl =
    process.env.NODE_ENV === "development" ? "http://localhost:8050" : appUrl;

  return [
    {
      url: `${appUrl}/`,
    },
    {
      url: `${appUrl}/privacy-policy`,
    },
    {
      url: `${appUrl}/terms-of-service`,
    },
  ];
}
