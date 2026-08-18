import { ArrowRight, Download, Mail, TerminalIcon } from "lucide-react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";


const SKILLS = [
  { label: "React", cat: "frontend" },
  { label: "TypeScript", cat: "frontend" },
  { label: "Node.js", cat: "backend" },
  { label: "Express", cat: "backend" },
  { label: "Python", cat: "backend" },
  { label: "Fast API", cat: "backend" },
  { label: "Django", cat: "backend" },
  { label: "MongoDB", cat: "database" },
  { label: "SQL / PostgreSQL", cat: "database" },
  { label: "Docker", cat: "devops" },
  { label: "REST APIs", cat: "backend" },
  { label: "Git & CI/CD", cat: "devops" },
  { label: "Redis", cat: "database" },
];
export default function About (){
    const TIMELINE = [
  {
    year: "2024 – present",
    role: "Senior Full-Stack Engineer",
    company: "Freelance / Contract",
    description:
      "Designing and shipping full-stack products for clients across fintech, e-commerce, and SaaS. Specialising in Node.js APIs and React frontends.",
  },
  {
    year: "2022 – 2024",
    role: "Software Engineer",
    company: "Savannah Fintech",
    description:
      "Built and maintained the payments API handling $2M+ in monthly transactions. Led migration from monolith to microservices. Reduced API latency by 40%.",
  },
  {
    year: "2020 – 2022",
    role: "Junior Developer",
    company: "Andela",
    description:
      "Worked on cross-functional teams building React applications for US-based clients. Gained deep experience with Agile delivery and remote collaboration.",
  },
];


    return(
    <div className="pt-36 pb-28 px-6">
      <div className="max-w-6xl mx-auto">
         {/* header */}
         <div className="mb-16 border-b border-border/30 pb-12">
          <p className="font-mono text-xs text-primary-foreground tracking-widest uppercase mb-4">
            About me
          </p>
            <h1 className="font-mono font-bold text-4xl md:text-5xl leading-tight mb-6">
                Solving Problems<br />
            <span className="text-primary-foreground/50 flex items-center">
                using{" "}   <TerminalIcon size={24} className="ml-2" /> code.
            </span>
          </h1>
          <p className="text-primary-foreground/65 max-w-3xl leading-relaxed text-base md:text-lg">
            Full-stack engineer based in Nairobi, Kenya. I turn complex
            requirements into clean, maintainable code — and I care just as much
            about the experience of working with a codebase as I do about the
            end product.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          <div className="lg:col-span-3 space-y-12">
            <div className="space-y-4 text-primary-foreground/70 leading-relaxed">
              <p>
                I&apos;m a full-stack engineer with 3+ years of production
                experience across the JavaScript ecosystem — React on the
                frontend, Node.js and Express on the backend, MongoDB and
                PostgreSQL for persistence, and Docker for deployment. I&apos;ve
                shipped everything from greenfield SaaS platforms to high-stakes
                payment APIs.
              </p>
              <p>
                I care deeply about code quality, maintainability, and shipping
                fast without cutting corners. Whether it&apos;s architecting a
                microservices system, debugging a gnarly race condition, or
                crafting an accessible UI, I bring the same rigour to every layer
                of the stack.
              </p>
              <p>
                Outside of work I contribute to open-source projects, write
                technical notes on things I wish were documented better, and
                mentor junior developers in my community.
              </p>
            </div>

             <div>
              <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-6">
                Experience
              </p>
              <div>
                {TIMELINE.map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    {/* line */}
                    <div className="flex flex-col items-center">
                      <div className="w-2 h-2 rounded-full bg-primary-foreground mt-1.5 shrink-0" />
                      {i < TIMELINE.length - 1 && (
                        <div className="w-px flex-1 bg-border mt-1" />
                      )}
                    </div>
                    <div className="pb-10">
                      <p className="font-mono text-[10px] text-primary-foreground tracking-widest uppercase mb-1">
                        {item.year}
                      </p>
                      <p className="font-mono font-semibold text-sm mb-0.5">
                        {item.role}
                      </p>
                      <p className="font-mono text-xs text-muted-foreground mb-2">
                        {item.company}
                      </p>
                      <p className="text-primary-foreground/60 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
              href="https://github.com/kuria300"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-sm tracking-widest border border-muted-foreground/30 uppercase transition-all hover:border-primary-foreground hover:text-primary-foreground px-6 py-2 flex items-center gap-2"
            >
              <FaGithub size={14} />
              Kuria300
            </Link>

            <Link
              href="malito:eugenekuria66@gmail.com"
              className="font-mono text-sm tracking-widest border border-muted-foreground/30 uppercase transition-all hover:border-primary-foreground hover:text-primary-foreground px-6 py-2 flex items-center gap-2"
            >
            <Mail size={14}/>
              Email Me
            </Link>

            <Link
              href="malito:eugenekuria66@gmail.com"
              className="font-mono text-sm tracking-widest border border-muted-foreground/30 uppercase transition-all hover:border-primary-foreground hover:text-primary-foreground px-6 py-2 flex items-center gap-2"
            >
            <Download size={14}/>
              Resume
            </Link>
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-6">
                Tech Stack
            </p>

            <div className="space-y-2.5">
                {SKILLS.map((s)=>(
                  <div key={s.label} className="flex items-center gap-3 border border-muted-foreground/30 px-4 py-3 group hover:border-primary-foreground transition-all">
                     <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground opacity-60 group-hover:opacity-100 transition-opacity shrink-0" />
                  <span className="font-mono text-sm text-primary-foreground/80 group-hover:text-primary-foreground transition-colors">
                    {s.label}
                  </span>
                  <span className="ml-auto font-mono text-[10px] text-muted-foreground tracking-widest uppercase shrink-0">
                    {s.cat}
                  </span>

                  </div>
                ))}

            </div>

            {/* <div className="mt-8 border border-border p-5">
              <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-3">
                Currently open to
              </p>
              {[
                "Full-time roles",
                "Freelance contracts",
                "Technical consulting",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 py-1.5">
                  <span className="w-1 h-1 rounded-full bg-primary" />
                  <span className="font-mono text-xs text-foreground/70">
                    {item}
                  </span>
                </div>
              ))}
              <Link
                href="/contact"
                className="mt-4 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary hover:text-primary/70 transition-colors"
              >
                Get in touch <ArrowRight size={12} />
              </Link>
            </div> */}
          </div>
        </div>
     </div>
    </div>

    )
}