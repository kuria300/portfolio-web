import BlogPostDetail from "@/components/blog/BlogPostDetail";
import { POSTS } from "@/components/data/POSTS";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string[] }>;
};

// generates a static page for every post at build time (better for SEO + speed)
export async function generateStaticParams() {
  return POSTS.map((post) => ({
    slug: [post.slug],
  }));
}

// sets the browser tab title + meta description per post (also good for SEO)
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const slugPath = slug.join("/");
  const post = POSTS.find((p) => p.slug === slugPath);

  if (!post) {
    return { title: "Post not found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const slugPath = slug.join("/");

  const post = POSTS.find((p) => p.slug === slugPath);

  if (!post) {
    notFound();
  }

  return <BlogPostDetail post={post} />;
}