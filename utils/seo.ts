import type { Metadata } from "next";
import { SITE_URL } from "@/utils/site";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataInput): Metadata {
  const canonical = `${SITE_URL}${path}`;
  const image = `${SITE_URL}/opengraph-image.png`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      title,
      description,
      url: canonical,
      siteName: "Eugene Kuria Portfolio",
      images: [{ url: image, width: 1200, height: 630, alt: "Eugene Kuria portfolio" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
