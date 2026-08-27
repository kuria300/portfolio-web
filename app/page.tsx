import StarRow from "@/components/ui/StarRow";
import { ArrowRight, Quote, Terminal, TerminalIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import AnimatedHero from "@/components/ui/AnimatedHero";
import TypewriterText from "@/components/ui/TypeWriter";
import FillButtonLink from "@/components/ui/FillButtonLink";
import Testimonial from "@/components/ui/Testimonial";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Portfolio of Eugene Kuria, a full stack software engineer based in Nairobi, Kenya. Explore projects built with React, Next.js, Node.js, Django and FastAPI, along with skills and experience.",
};

 

export default function Home() {
  const TESTIMONIALS = [
  {
    name: "Amara Osei",
    role: "Engineering Manager",
    company: "Andela",
    avatar: "AO",
    rating: 5,
    text: "Eugene delivered a complex microservices migration weeks ahead of schedule. His grasp of distributed systems is rare for someone at his level — he debugged race conditions I'd been chasing for months. An absolute asset to any engineering team.",
  },
  {
    name: "Priya Nair",
    role: "CTO",
    company: "Savannah Fintech",
    avatar: "PN",
    rating: 3,
    text: "We brought Eugene in to rebuild our payments API and he exceeded every expectation. Clean code, thorough documentation, proactive communication. He shipped a production-ready Docker setup on day one. Would hire again without hesitation.",
  },
  {
    name: "Daniel Müller",
    role: "Senior Frontend Engineer",
    company: "Shopify",
    avatar: "DM",
    rating: 5,
    text: "Working alongside Eugene on our e-commerce platform was genuinely great. His React components are a joy — well-typed, accessible, and performant. He also pushed the team toward better API design patterns that we still use today.",
  },
  {
    name: "Grace Wanjiku",
    role: "Product Lead",
    company: "Twiga Foods",
    avatar: "GW",
    rating: 5,
    text: "Eugene translated ambiguous product requirements into a polished full-stack solution faster than any contractor we've worked with. He asked the right questions upfront and shipped with zero rework. Communicates like a senior, codes like one too.",
  },
];
  const STATS = [
  { value: "2+", label: "Years experience" },
  { value: "5+", label: "Projects shipped" },
  { value: "10", label: "Technologies mastered" },
  { value: "100%", label: "Client satisfaction" },
];
  return (
     <main className="flex-1">
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6">
        <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(110, 255, 160, 0.04) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(110, 255, 160, 0.04) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "60px 60px",
        }}
      />
      <div
      className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
      style={{
        background:
          "radial-gradient(circle, rgba(110, 255, 160, 0.07) 0%, transparent 70%)",
        filter: "blur(60px)",
      }}
    />

        <div className="relative max-w-6xl mx-auto w-full pt-36">
          <div className="flex items-center gap-2 mb-10">
            <TerminalIcon size={14} className="text-primary-foreground" />
            <TypewriterText 
              text="~/A good website should feel like a warm hug — zsh"
                speed={35}
                className="font-mono text-xs text-primary-foreground tracking-widest"
            />
            <span className="inline-block w-2 h-4 bg-primary animate-pulse ml-1" />
          </div>

          {/* <h1 className="font-mono font-bold leading-none tracking-tight mb-10" style={{ fontSize: "clamp(2.8rem, 8vw, 6.6rem)" }}>
            <span className="text-muted-foreground text-xl md:text-3xl block mb-4 font-normal tracking-widest ">
              Hello, I'm
            </span>
            Eugene{" "}
            <span className="text-primary-foreground">
              kuria{" "}
            </span>
            Maina
          </h1> */}
          <AnimatedHero />

          <p className="font-mono text-sm md:text-base text-muted-foreground tracking-widest uppercase mb-10">
            Full-Stack Software Engineer
          </p>

          <p className="text-primary-foreground/65 max-w-3xl mb-12 leading-relaxed text-base md:text-lg">
            I build user-friendly, secure, scalable web applications, from pixel-perfect React
            interfaces to battle-tested APIs. Obsessed with solving problems, clean
            architecture, developer experience, and shipping things that work.
          </p>

          <div className="flex flex-wrap gap-4 mb-24">
            <Link href="/projects" className="group font-mono text-sm uppercase tracking-widest px-6 py-4 bg-background text-primary hover:bg-primary-foreground/90 transition-colors font-semibold flex items-center gap-2"
            >
              View Projects

              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <FillButtonLink href="https://github.com/kuria300" external className="relative z-10 font-mono text-sm tracking-widest uppercase px-6 py-2 flex items-center gap-2 border border-muted-foreground text-muted-foreground transition-colors group-hover:text-white">
              <FaGithub size={14} />
              GitHub
            </FillButtonLink>

            <FillButtonLink href="/contact" className="relative z-10 font-mono text-sm tracking-widest uppercase px-6 py-2 flex items-center gap-2 border border-muted-foreground text-muted-foreground transition-colors group-hover:text-white">
              Contact
            </FillButtonLink>
          </div>

          {/* stat strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/20">
            {STATS.map((s) => (
              <div key={s.label} className="bg-white px-6 py-5">
                <p className="font-mono font-bold text-2xl md:text-3xl text-primary-foreground mb-1">
                  {s.value}
                </p>
                <p className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">
                  {s.label}
                </p>
              </div>
            ))}
            </div>
        </div>

        <section className="py-28 px-6 ">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <p className="font-mono text-xs text-primary tracking-widest uppercase mb-4">
              What people say
            </p>
            <h2 className="font-mono font-bold text-3xl md:text-4xl leading-tight">
              Trusted by teams<br />
              <span className="text-primary-foreground">across the stack.</span>
            </h2>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.name}
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
                      <p className="font-mono text-sm font-semibold">
                        {t.name}
                      </p>
                      <p className="font-mono text-[10px] text-muted-foreground tracking-widest">
                        {t.role} · {t.company}
                      </p>
                    </div>
                  </figcaption>
                  <StarRow count={t.rating} />
                </div>
              </figure>
            ))}
          </div> */}

          <Testimonial />

           <div className="flex items-center justify-center ">
             <Link href="/" className=" w-[300px] mt-12 group font-mono text-sm uppercase tracking-widest px-6 py-4 bg-background text-primary hover:bg-primary-foreground/90 transition-colors font-semibold flex items-center justify-center gap-2"
              >
                Leave A Comment

                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1"/>
            </Link>
           </div>

          {/* CTA */}
          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border border-muted-foreground/70 p-7">
            <div>
              <p className="font-mono text-sm font-semibold mb-1">
                Ready to work together?
              </p>
              <p className="font-mono text-xs text-muted-foreground">
                I&apos;m open to full-time roles, freelance contracts, and
                interesting collaborations.
              </p>
            </div>
            <Link
              href="/contact"
              className="font-mono text-sm uppercase tracking-widest px-6 py-4 bg-background text-primary hover:bg-primary-foreground/90 transition-colors font-semibold flex items-center gap-2"
            >
              Get in touch <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      </section>
     </main>
  );
}
