import Link from "next/link";
import { Fragment } from "react";

// Parses markdown-style [label](href) links inside a plain string
// and renders them as styled, contextual in-content <Link> elements.
export function RichText({ text }: { text: string }) {
  const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: (string | { label: string; href: string })[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = linkPattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push({ label: match[1], href: match[2] });
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return (
    <>
      {parts.map((part, i) =>
        typeof part === "string" ? (
          <Fragment key={i}>{part}</Fragment>
        ) : (
          <Link
            key={i}
            href={part.href}
            className="text-shadow-primary-foreground underline underline-offset-2 decoration-primary-foreground hover:decoration-primary-foreground/65 transition-colors"
          >
            {part.label}
          </Link>
        )
      )}
    </>
  );
}