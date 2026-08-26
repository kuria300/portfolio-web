import { ArrowRight, BarChart3Icon, CheckCircle, Code, DollarSign, DollarSignIcon, LineChart, Rocket, Search, Shield, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaMicroscope } from "react-icons/fa";

interface Benefits {
  id: number,
  icon: React.ReactNode,
  title: string,
  text: string
}[]

interface Stats {
  list: string,
  label: string,
  text: string
}[]

export default function Apidev() {
    const BENEFITS:Benefits[] =[
        {
            id: 1,
            icon: <Rocket size={20}/>,
            title: "Unlock third-party integrations",
            text: "A well-designed API turns your product into a platform. Partners, customers, and developers can build on top of you — expanding your reach without extra effort from your team."
        },
         {
            id: 2,
            icon: <Zap size={20}/>,
            title: "Support multiple clients from one backend",
            text: "A clean API serves your web app, mobile app, and any future interfaces from the same source of truth. No duplication, no drift."
        },
         {
            id: 3,
            icon: <LineChart size={20}/>,
            title: "Built to handle growth",
            text: "Caching, rate limiting, and pagination baked in from the start means your API degrades gracefully under load rather than falling over on your busiest day."
        },
         {
            id: 4,
            icon: <Shield size={20}/>,
            title: "Security you can trust",
            text: "This isn't throwaway code. The architecture is designed to accommodate future features without a painful rewrite when you're ready to scale."
        }
    ]

    const STATS:Stats[] =[
        {
            list: "01",
            label: "Design",
            text: "Resource modelling, versioning strategy, and auth approach."
        },
        {
             list: "02",
            label: "Build",
            text: "Implementation with tests written alongside, not after."
        },
        {
             list: "03",
            label: "Document",
            text: "OpenAPI spec, Postman collection, and integration guide."
        },
        {
             list: "04",
            label: "Harden",
            text: "Load testing, rate limiting, and error budget definition."
        }
    ]

    const TECH = ["Django","Node.js","Express","Fat API","PostgresSQL", "MongoDB","Redis","Docker", "Nginx"]

    return(
         <div className="pt-36 pb-28 px-6">
            <div className="max-w-[1350px] mx-auto">
                <div className="relative overflow-hidden bg-muted2 mb-12 min-h-[500px] flex items-end">
                    <Image 
                    src='/backend.avif'
                    width={200}
                    height={200}
                    alt="mvp development"
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                        <div className="w-12 h-12 flex justify-center items-center mb-4">
                          <FaMicroscope size={24} className="text-orange-500"/>
                        </div>
                        <p className="font-mono tracking-widest text-sm uppercase mb-2 text-orange-500">APIs that are fast, reliable, secure and scalable.</p>
                        <h1 className="font-mono leading-tight font-bold text-3xl md:text-5xl">API Development</h1>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-12">
                       <p className="text-primary-foreground/65 text-base md:text-2xl leading-relaxed">
                         Clean, well-documented APIs are the backbone of every modern product. I design and build RESTful and GraphQL APIs that handle real traffic, fail gracefully, 
                         and are easy for other developers to integrate against.
                       </p>
                       <div>
                         <p className="font-mono text-sm text-muted-foreground tracking-widest mb-5 uppercase">What's included</p>
                         <ul className="space-y-3">
                           <li className="flex items-start gap-3">
                             <CheckCircle size={12} className="text-orange-500"/>
                              <span className="text-primary-foreground/65 text-lg leading-relaxed">RESTful and GraphQL API design</span>
                           </li>
                            <li className="flex items-start gap-3">
                             <CheckCircle size={12} className="text-orange-500"/>
                              <span className="text-primary-foreground/65 text-lg leading-relaxed">Authentication (JWT, OAuth2, API keys)</span>
                           </li>
                            <li className="flex items-start gap-3">
                             <CheckCircle size={12} className="text-orange-500"/>
                              <span className="text-primary-foreground/65 text-lg leading-relaxed">Rate limiting, caching, and paginatio</span>
                           </li>
                            <li className="flex items-start gap-3">
                             <CheckCircle size={12} className="text-orange-500"/>
                              <span className="text-primary-foreground/65 text-lg leading-relaxed">OpenAPI / Swagger documentation</span>
                           </li>
                            <li className="flex items-start gap-3">
                             <CheckCircle size={12} className="text-orange-500"/>
                              <span className="text-primary-foreground/65 text-lg leading-relaxed">Automated test suite and contract tests</span>
                           </li>
                         </ul>
                       </div>
                       <div>
                         <div className="flex items-center gap-3 mb-7">
                            <div className="h-px flex-1 bg-border/30"></div>
                            <p className="font-mono tracking-widest uppercase text-xs text-orange-500">Benefits to a Company</p>
                            <div className="h-px flex-1 bg-border/30"></div>
                         </div>
                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                           {BENEFITS.map(({ id, icon, title, text})=>(
                             <div key={id} className="border border-primary-foreground/65 p-5 hover:border-foreground transition-all group">
                                <div className="w-8 h-8 flex items-center justify-center border border-foreground mb-4 text-orange-500">
                                   {icon}
                                </div>
                                <p className="font-mono font-bold text-lg mb-2">{title}</p>
                                <p className="font-mono text-[14px] leading-relaxed text-muted-foreground">{text}</p>
                             </div>
                           ))}
                         </div>
                       </div>
                       <div>
                         <p className="font-mono text-sm uppercase tracking-widest mb-6 text-muted-foreground">How it works</p>
                         <div className="grid grid-col-1 sm:grid-cols-4 gap-px bg-border/30">
                           {STATS.map(({ list, label, text})=>(
                              <div key={list} className="bg-foreground p-5">
                                <p className="font-mono font-bold mb-3  text-2xl text-muted2">{list}</p>
                                <p className="font-mono font-bold text-lg mb-1">{label}</p>
                                <p className="font-mono text-sm leading-relaxed text-primary-foreground/65">{text}</p>
                              </div>
                           ))}
                         </div>
                       </div>
                    </div>
                     <div className="space-y-5">
                        <div className="border border-primary-foreground/65 p-6 space-y-5">
                            <div>
                                <p className="font-mono uppercase text-muted-foreground text-sm tracking-widest mb-2">Tech used</p>
                                <div className="flex flex-wrap gap-1.5">
                                {TECH.map((tool, index)=>(
                                    <span key={index} className="font-mono text-xs uppercase tracking-widest px-2 py-1 text-muted-foreground border border-primary-foreground/30 bg-secondary2">{tool}</span>
                                ))}
                                </div>
                            </div>
                            <div className="h-px bg-border/30"></div>
                            <div>
                                <p className="font-mono text-sm tracking-widest uppercase mb-2 text-muted-foreground">Ideal for</p>
                                <p className="font-mono text-xs text-primary-foreground/65 leading-relaxed">Products that need a backend, third-party integrations, platform APIs.</p>
                            </div>
                        </div>

                         <Link href="/contact" className=" group font-mono text-sm uppercase tracking-widest px-6 py-4 bg-background text-primary hover:bg-primary-foreground/90 transition-colors font-semibold flex items-center justify-center gap-2"
                          >
                            Start A Project

                            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1"/>
                        </Link>
                  </div>
                </div>
           </div>
        </div>
    )
}