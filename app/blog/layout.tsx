import type { Metadata } from "next";
import { createPageMetadata } from "@/utils/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Blog",
  description: "Notes from Eugene Kuria on full-stack development, software architecture, AI, and building products.",
  path: "/blog",
});

export default function BlogLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
