import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const appUrl = process.env.NEXT_APP_BASE_URL;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // disallow:["/admin"]
      },
    ],
    sitemap: `${appUrl}/sitemap.xml`,
  };
}
