import FillButtonLink from "@/components/ui/FillButtonLink";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Full-stack engineer based in Nairobi, Kenya; Projects listed.",
};


type ProjectStatus = 'Production' | 'Open Source' | 'In Progress'

interface ProjectsType {
    title: string,
    tagline: string,
    description: string,
    tech: string[],
    github: string,
    image: string,
    status: ProjectStatus
}[]

export default function Projects() {

  const STATUS_COLORS: Record<ProjectStatus, string> = {
  "Production": "#6effa0",     
  "Open Source": "#5bc8ff",    
  "In Progress": "#ffde6e",    
};


 const PROJECTS: ProjectsType[] = [
  {
    title: "LegalEase",
    tagline: "Platform making law accessible in Kenya",
    description:
      "A legal-tech platform that helps everyday Kenyans understand and act on legal matters, powered by an OpenAI-driven assistant for plain-language guidance. Supports M-PESA STK Push payments, OTP-verified authentication, and secure document storage via MinIO.",
    tech: ["React", "Node.js", "Express", "PostgresSQL", "miniO", "Open AI Api", "JWT", "M-PESA Stk Push", "OTP authentication"],
    github: "https://github.com/kuria300",
    image:
      "/justice.avif",
    status: "Production",
  },
  {
    title: "KingsLanding AI",
    tagline: "A local AI agent running locally no api costs",
    description:
      "A fully local RAG-powered AI agent that runs on-device via Ollama, eliminating API costs entirely. Uses pgvector for semantic search, LangChain for orchestration, and custom chunking strategies to deliver accurate, context-aware answers from your own documents.",
    tech: ["Next.js-PWA", "Fast API", "PostgreSQL", "pgvector", "RAG pipeline", "Ollama", "LangChain", "semantic chunking", "Docker", "Redis"],
    github: "https://github.com/kuria300",
    image:
      "/local.avif",
    status: "Production",
  },
  {
    title: "Startup",
    tagline: "A community platform where users can share ideas and collaborate",
    description:
      "A community-driven platform for sharing ideas, discussing projects, and collaborating with like-minded builders. Content is managed through Sanity CMS, with GitHub OAuth2 for frictionless sign-in and JWT-secured sessions.",
    tech: ["Next.js", "Sanity CMS", "OAuth2 Github", "JWT"],
    github: "https://github.com/kuria300",
    image:
      "/startup.avif",
    status: "Open Source",
  },
  {
    title: "Creator-Lift",
    tagline: "Bridges gap between brands and creators",
    description:
      "A marketplace connecting brands with content creators for sponsored collaborations. Features Google OAuth login, secure escrow payments via Pesapal to protect both parties, and media asset storage backed by MinIO Object Storage.",
    tech: ["React", "Django", "Redis", "PostgresSQL", "Ngimx", "Minio Object storage", "OAuth Google", "JWT", "Escrow Payment Pesapal"],
    github: "https://github.com/kuria300",
    image:
      "/creator.avif",
    status: "In Progress",
  },
  {
    title: "feature: Websocket Messaging system",
    tagline: "Real-time messaging system using web sockets",
    description:
      "A scalable real-time messaging system built on WebSockets, using Kafka and Zookeeper for reliable event streaming across services. Deployed with Docker Compose and Nginx as a reverse proxy, with JWT-authenticated connections.",
    tech: ["Next.js", "Flask", "Redis", "PostgresSQL", "Ngimx", "Docker", "Docker Compose", "JWT", "Kafka", "Zookeeper", "Nginx"],
    github: "https://github.com/kuria300",
    image:
      "/websocket.avif",
    status: "In Progress",
  },
];
    return(
    <div className="pt-36 pb-28 px-6">
      <div className="max-w-6xl mx-auto">
         {/* header */}
         <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-border/30 pb-12 mb-16 gap-6">
            <div>
              <p className="font-mono text-xs text-primary-foreground tracking-widest uppercase mb-4">
                selected work
              </p>
                <h1 className="font-mono font-bold text-4xl md:text-5xl leading-tight mb-4">
                  Projects
              </h1>
               <p className="text-primary-foreground/65 max-w-3xl leading-relaxed text-base md:text-lg">
                Below are some of the projrcts listed:
              </p>
            </div>
            <div className="flex items-center">
              <FillButtonLink
              href="https://github.com/kuria300"
              external
              className="relative z-10 font-mono text-sm tracking-widest uppercase px-6 py-2 flex items-center gap-2 border border-muted-foreground text-muted-foreground transition-colors group-hover:text-white"
            >
              <FaGithub size={14} />
              All repos on Github
            </FillButtonLink>
            </div>
         </div>

         <div className="space-y-6">
           {PROJECTS.map((p, i)=>(
              <article key={p.title} className="group border border-border hover:border-white/15 transition-all grid grid-cols-1 md:grid-cols-5 overflow-hidden">
                 <div className="md:col-span-2 relative overflow-hidden bg-muted min-h-52">
                    <Image 
                    src={p.image}
                    fill
                    alt={`${p.title} screenshot`}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                    />
                  <div className="absolute top-3 right-3 font-mono text-[10px] px-2 py-1 border"
                    style={{color: STATUS_COLORS[p.status], backgroundColor: `${STATUS_COLORS[p.status]}40`, border: 'none'}}
                  >
                  {p.status}
                </div>
                </div>
                <div className="md:col-span-3 p-8 flex flex-col justify-between">
                <div>
                  <p
                    className="font-mono text-[10px] uppercase tracking-widest mb-2"
                    style={{ color: STATUS_COLORS[p.status] }}
                  >
                    {p.tagline}
                  </p>
                  <h2 className="font-mono font-bold text-2xl md:text-3xl mb-4">
                    {p.title}
                  </h2>
                  <p className="text-primary-foreground/60 text-sm leading-relaxed mb-6">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] tracking-widest uppercase px-2 py-1 bg-secondary border border-border text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                   className="font-mono text-sm tracking-widest border border-muted-foreground/30 uppercase transition-all hover:border-primary-foreground hover:text-primary-foreground px-6 py-2 flex items-center gap-2"
                >
                  <FaGithub size={12} /> View on GitHub
                  <ExternalLink size={10} className="ml-1 opacity-50" />
                </Link>
              </div>
              </article>
           ))}
         </div>

           <div className="mt-12 border border-border p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-mono text-sm font-semibold mb-1">More on GitHub</p>
            <p className="font-mono text-xs text-muted-foreground">
              github.com/kuria300 — experiments, open source &amp; contributions
            </p>
          </div>
          <Link
            href="https://github.com/kuria300"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest bg-primary-foreground text-primary px-5 py-2.5 hover:bg-primary-foreground/85 transition-colors whitespace-nowrap font-semibold"
          >
            <FaGithub size={13} /> Visit Profile
          </Link>
        </div>
        </div>
    </div>
    )
}