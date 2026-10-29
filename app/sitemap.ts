import type { MetadataRoute } from "next";
import { POSTS } from "@/components/data/POSTS";
import { detailServices } from "@/components/data/infer";
import { SITE_URL } from "@/utils/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/about", "/projects", "/blog", "/contact"];

  return [
    ...staticPaths.map((path) => ({ url: `${SITE_URL}${path}` })),
    ...POSTS.map((post) => ({ url: `${SITE_URL}/blog/${post.slug}` })),
    ...detailServices.map((service) => ({ url: `${SITE_URL}/services/${service.slug}` })),
  ];
}
