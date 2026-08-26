'use client'
import { useState } from 'react'
import {POSTS} from '../../components/data/POSTS'
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';



const ALL_TAGS = Array.from(new Set(POSTS.flatMap((p) => p.tags)));
const PAGE_SIZE = 6

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function Blog() {

    const [activeTag, setActiveTag]= useState<string | null>(null)
      const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

const filtered = activeTag ? POSTS.filter((p) => p.tags.includes(activeTag)) : POSTS;

const [featured, ...rest] = filtered;

 const visiblePosts = rest.slice(0, visibleCount);
  const hasMore = visibleCount < rest.length;

  // whenever the tag filter changes, reset back to showing PAGE_SIZE posts
  function handleTagChange(tag: string | null) {
    setActiveTag(tag);
    setVisibleCount(PAGE_SIZE);
  }


    return(
       <div className="pt-36 pb-28 px-6">
            <div className="max-w-6xl mx-auto">
                {/* header */}
                <div className="mb-6 border-b border-border/30 pb-12">
                    <p className="font-mono text-xs text-primary-foreground tracking-widest uppercase mb-4">
                        writing
                    </p>
                    <h1 className="font-mono font-bold text-4xl md:text-5xl leading-tight mb-6">
                        blog
                    </h1>
                    <p className="text-primary-foreground/65 max-w-3xl leading-relaxed text-base md:text-lg">
                        Notes on full-stack development, architecture decisions, and things I wish were documented better. No filler, no tutorials you can find anywhere else.
                    </p>
                </div>

                 {/* tag filter */}
                <div className="flex flex-wrap gap-3 mb-10">
                <button
                    onClick={() => setActiveTag(null)}
                    className={`font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 border transition-all ${
                    activeTag === null
                        ? "border-primary-foreground text-primary-foreground"
                        : "border-muted-foreground text-muted-foreground hover:border-primary-foreground hover:text-accent"
                    }`}
                >
                    All
                </button>
                {ALL_TAGS.map((tag) => (
                    <button
                    key={tag}
                    onClick={() => handleTagChange(activeTag === tag ? null : tag)}
                    className={`font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 border transition-all ${
                        activeTag === tag
                        ? "border-primary-foreground text-primary-foreground"
                        : "border-muted-foreground text-muted-foreground hover:text-accent hover:border-primary-foreground"
                    }`}
                    >
                    {tag}
                    </button>
                ))}
                </div>

                {filtered.length === 0 && (
                <p className="font-mono text-sm text-muted-foreground">
                    No posts tagged &ldquo;{activeTag}&rdquo;.
                </p>
                )}

                {featured && (
                <Link
                    href={`/blog/${featured.slug}`}
                    className="group border border-border hover:border-white/15 transition-all mb-6 grid grid-cols-1 md:grid-cols-2 overflow-hidden block"
                >
                    <div className="relative overflow-hidden bg-muted2 min-h-60">
                    <img
                        src={featured.image}
                        alt={featured.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute top-3 left-3 font-mono text-[10px] bg-primary text-primary-foreground px-2 py-1 tracking-widest uppercase">
                        Featured
                    </div>
                    </div>
                    <div className="p-8 flex flex-col justify-between">
                    <div>
                        <div className="flex flex-wrap gap-2 mb-4">
                        {featured.tags.map((t) => (
                            <span
                            key={t}
                            className="font-mono text-[11px] tracking-widest uppercase px-2 py-1 bg-secondary2 border border-border2 text-muted-foreground"
                            >
                            {t}
                            </span>
                        ))}
                        </div>
                        <h2 className="font-mono font-bold text-xl md:text-2xl leading-snug mb-4 transition-colors">
                        {featured.title}
                        </h2>
                        <p className="text-primary-foreground/65 text-sm leading-relaxed mb-5">
                        {featured.excerpt}
                        </p>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 font-mono text-[10px] text-muted-foreground">
                        <span>{formatDate(featured.date)}</span>
                        <span className="flex items-center gap-1">
                            <Clock size={10} /> {featured.readTime}
                        </span>
                        </div>
                        <span className="flex items-center gap-1 font-mono text-xs uppercase tracking-widest text-primary-foreground">
                        Read <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    </div>
                    </div>
                </Link>
                )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {visiblePosts.map((post) => (
                    <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group border border-border hover:border-white/15 transition-all flex flex-col overflow-hidden"
                    >
                    <div className="relative overflow-hidden bg-muted2" style={{ paddingBottom: "52%" }}>
                        <img
                        src={post.image}
                        alt={post.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-55 group-hover:opacity-75 group-hover:scale-105 transition-all duration-500"
                        />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                        <div className="flex flex-wrap gap-1.5 mb-3">
                        {post.tags.map((t) => (
                            <span
                            key={t}
                             className="font-mono text-[10px] tracking-widest uppercase px-2 py-1 bg-secondary2 border border-border2 text-muted-foreground"
                            >
                            {t}
                            </span>
                        ))}
                        </div>
                        <h2 className="font-mono font-bold text-base leading-snug mb-3 flex-1 transition-colors">
                        {post.title}
                        </h2>
                        <p className="text-primary-foreground/65 text-xs leading-relaxed mb-5">
                        {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-3 font-mono text-[9px] text-muted-foreground">
                            <span>{formatDate(post.date)}</span>
                            <span className="flex items-center gap-1">
                            <Clock size={9} /> {post.readTime}
                            </span>
                        </div>
                        <span className="flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-primary-foreground">
                            Read <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                        </div>
                    </div>
                    </Link>
                ))}
                </div>
                 {hasMore && (
                <div className="flex justify-center mt-12">
                    <button
                    onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
                    className="font-mono text-xs uppercase tracking-widest px-6 py-3 border border-border/65 text-muted-foreground hover:border-primary-foreground hover:text-primary-foreground transition-all"
                    >
                    Read More
                    </button>
                </div>
                )}
            </div>
        </div>
    )
}