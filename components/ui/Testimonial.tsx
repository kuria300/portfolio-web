"use client";

import { motion } from "motion/react";
import { Quote } from "lucide-react";
import StarRow from "@/components/ui/StarRow"; // adjust path to wherever this actually lives


 const TESTIMONIALS = [
  {
    name: "Desmond Ogubi",
    role: "Founder",
    company: "LegalEase",
    avatar: "DO",
    rating: 5,
    text: "Eugene was instrumental in building LegalEase from the ground up. He took a rough product idea and turned it into a working MVP fast — clean architecture, solid API design, and he made smart calls on scope so we could launch on time. Reliable, communicative, and genuinely invested in getting the product right.",
  },
  {
    name: "Patrick M",
    role: "Product Lead",
    company: "Twiga Foods",
    avatar: "GW",
    rating: 5,
    text: "Eugene translated ambiguous product requirements into a polished full-stack solution faster than any contractor we've worked with. He asked the right questions upfront and shipped with zero rework. Communicates like a senior, codes like one too.",
  },
  {
    name: "Brian Otieno",
    role: "Engineering Lead",
    company: "Tujenge Tech Solutions",
    avatar: "BO",
    rating: 5,
    text: "I've worked directly with Eugene as a full-stack developer at Tujenge Tech Solutions. He moves comfortably across the stack — React on the frontend, solid API and database design on the backend — and takes ownership of features end-to-end without needing much hand-holding.",
  },
  {
    name: "Faith Njeri",
    role: "Operations Lead",
    company: "Pawatch Systems",
    avatar: "FN",
    rating: 4,
    text: "Eugene built out several internal tools for us that made our day-to-day operations noticeably smoother. He's detail-oriented and asks good questions upfront, which saved us from a lot of back-and-forth. Would happily work with him again on future projects.",
  },
]

export default function Testimonial() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {TESTIMONIALS.map((t, i) => (
        <motion.figure
          key={t.name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="border border-muted-foreground/30 p-7 flex flex-col gap-5 hover:border-primary-foreground transition-all"
        >
          <Quote size={20} className="text-muted-foreground" />

          <blockquote className="text-primary-foreground/65 leading-relaxed text-sm flex-1">
            &ldquo;{t.text}&rdquo;
          </blockquote>

          <div className="flex items-center justify-between">
            <figcaption className="flex items-center gap-3">
              <div className="w-9 h-9 bg-secondary border border-border flex items-center justify-center font-mono text-xs font-bold text-primary">
                {t.avatar}
              </div>
              <div>
                <p className="font-mono text-sm font-semibold">{t.name}</p>
                <p className="font-mono text-[10px] text-muted-foreground tracking-widest">
                  {t.role} · {t.company}
                </p>
              </div>
            </figcaption>
            <StarRow count={t.rating} />
          </div>
        </motion.figure>
      ))}
    </div>
  );
}