import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowLeft } from "lucide-react";
import type { Post } from "@/components/data/POSTS";
import { RichText } from "./RichText";
import FillButtonLink from "../ui/FillButtonLink";


function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPostDetail({ post }: { post: Post }) {
  return (
    <article className="pt-24 pb-28 px-6">
      <div className="max-w-3xl mx-auto">
        {/* back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-primary-foreground transition-colors mb-10"
        >
          <ArrowLeft size={12} />
          Back to blog
        </Link>

        {/* header */}
        <div className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((t) => (
              <span
                key={t}
                className="font-mono text-[11px] tracking-widest uppercase px-2 py-1 bg-secondary2 border border-border2 text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>

          <h1 className="font-mono font-bold text-3xl md:text-4xl leading-tight mb-5">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 font-mono text-xs text-muted-foreground">
            <span>{formatDate(post.date)}</span>
            <span className="flex items-center gap-1">
              <Clock size={11} /> {post.readTime}
            </span>
          </div>
        </div>

        {/* cover image */}
        <div className="relative overflow-hidden rounded-lg border border-primary mb-12 h-72 md:h-96">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* content sections */}
        <div className="space-y-6">
          {post.content.map((section, i) => {
            switch (section.type) {
              case "paragraph":
                return (
                  <p key={i} className="font-mono text-primary-foreground/65 text-base leading-relaxed">
                    {section.text && <RichText text={section.text} />}
                  </p>
                );

              case "heading":
                return (
                  <h2
                    key={i} className="font-mono font-bold text-xl md:text-2xl pt-4" >
                    {section.text}
                  </h2>
                );

              case "subheading":
                return (
                  <h3 key={i} className="font-mono font-semibold text-lg pt-2">
                    {section.text}
                  </h3>
                );

              case "callout":
                return (
                  <div key={i} className="border-l-2 border-primary bg-secondary/40 px-5 py-4 text-sm text-foreground/80 leading-relaxed" >
                    {section.text && <RichText text={section.text} />}
                  </div>
                );

              case "list":
                return (
                  <ul key={i} className="space-y-2 pl-1">
                    {section.items?.map((item, j) => (
                      <li
                        key={j}
                        className="flex gap-3 text-primary-foreground/65 text-sm leading-relaxed"
                      >
                        <span className="text-primary-foreground mt-1.5">›</span>
                        <span><RichText text={item} /></span>
                      </li>
                    ))}
                  </ul>
                );

              case "code":
                return (
                  <pre key={i} className="bg-secondary border border-border text-primary rounded-md p-4 overflow-x-auto text-xs font-mono">
                    <code>{section.text}</code>
                  </pre>
                );

              // this is the block we added for internal SEO links
              case "links":
                return (
                  <div key={i} className="flex flex-wrap gap-3 mt-10 pt-8 border-t border-border">
                    {section.text && (
                      <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest w-full mb-2">
                        {section.text}
                      </span>
                    )}
                    {section.links?.map((link) => (
                      <FillButtonLink
                        key={link.href}
                        href={link.href}
                        className="relative z-10 font-mono text-sm tracking-widest uppercase px-6 py-2 flex items-center gap-2 border border-muted-foreground text-muted-foreground transition-colors group-hover:text-white"
                      >
                        {link.label}
                      </FillButtonLink>
                    ))}
                  </div>
                );

              default:
                return null;
            }
          })}
        </div>
      </div>
    </article>
  );
}