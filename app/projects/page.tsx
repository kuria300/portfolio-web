import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

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


  const PROJECTS:ProjectsType[]=[ 
    {
    title: "DevTrack",
    tagline: "Issue tracker built for engineering teams",
    description:
      "A full-stack project management tool with real-time updates, role-based access control, and Kanban board views. Handles thousands of concurrent users via WebSocket event broadcasting.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Docker"],
    github: "https://github.com/kuria300",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=540&fit=crop&auto=format",

    status: "Production",
  },
  {
    title: "ShopSphere",
    tagline: "E-commerce platform with analytics dashboard",
    description:
      "End-to-end commerce solution featuring product catalog management, Stripe checkout, and a seller analytics dashboard with revenue charts and inventory forecasting.",
    tech: ["React", "Express", "PostgreSQL", "Stripe", "Docker", "Redis"],
    github: "https://github.com/kuria300",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&h=540&fit=crop&auto=format",

    status: "Production" ,
  },
  {
    title: "AuthForge",
    tagline: "Drop-in auth service for microservices",
    description:
      "Lightweight authentication microservice supporting JWT, OAuth2, and passkey flows. Ships as a Docker image with an admin UI and SDK packages for Node, Python, and Go consumers.",
    tech: ["Node.js", "Express", "MongoDB", "Docker", "OAuth2", "JWT"],
    github: "https://github.com/kuria300",
    image:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=900&h=540&fit=crop&auto=format",
   
    status: "Open Source",
  },
  {
    title: "LogStream",
    tagline: "Centralised logging for distributed systems",
    description:
      "Real-time log aggregation service with structured query support, alerting rules, and a dashboard built for ops teams. Ingests from Docker, Kubernetes, and custom agents.",
    tech: ["Node.js", "Kafka", "Elasticsearch", "React", "Docker", "K8s"],
    github: "https://github.com/kuria300",
    image:
      "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=900&h=540&fit=crop&auto=format",

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
                <h1 className="font-mono font-bold text-4xl md:text-5xl leading-tight mb-6">
                  Projects
              </h1>
            </div>
            <div className="flex items-center">
              <Link
              href="https://github.com/kuria300"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-sm tracking-widest border border-muted-foreground/30 uppercase transition-all hover:border-primary-foreground hover:text-primary-foreground px-6 py-2 flex items-center gap-2"
            >
              <FaGithub size={14} />
              All repos on Github
            </Link>
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