"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ReactNode } from "react";

const curtainVariants = {
  rest: { scaleX: 0 },
  hover: { scaleX: 1 },
};

export default function FillButtonLink({ href, children,className,key, external = false}: { href: string; children: ReactNode; className:string; key?: string,external?: boolean;}) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      className="group relative overflow-hidden border border-muted-foreground/30 inline-flex"
    >
      {/* curtain fill */}
      <motion.span
        variants={curtainVariants}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        style={{ transformOrigin: "center" }}
        className="absolute inset-0 bg-black"
      />

      <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className={className}
      >
        {children}
      </Link>
    </motion.div>
  );
}