import { ArrowRight, BarChart3Icon, CheckCircle, Code, DollarSign, DollarSignIcon, Rocket, Search, Shield } from "lucide-react";
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

export default function Mvp() {
    const BENEFITS:Benefits[] =[
        {
            id: 1,
            icon: <Rocket size={20}/>,
            title: "Get to market months earlier",
            text: "A focused MVP cuts scope to the essentials. Your company starts collecting real user feedback and generating early revenue while competitors are still planning."
        },
         {
            id: 2,
            icon: <DollarSignIcon size={20}/>,
            title: "Validate before you over-invest",
            text: "Building the wrong thing at full scale is expensive. An MVP lets you test your core hypothesis with real users at a fraction of the cost of a full product build."
        },
         {
            id: 3,
            icon: <BarChart3Icon size={20}/>,
            title: "Investor-ready from day one",
            text: "A live, working product is your most compelling pitch asset. Demonstrating traction even early dramatically improves your fundraising position."
        },
         {
            id: 4,
            icon: <Code size={20}/>,
            title: "A codebase built to grow",
            text: "This isn't throwaway code. The architecture is designed to accommodate future features without a painful rewrite when you're ready to scale."
        }
    ]

    const STATS:Stats[] =[
        {
            list: "01",
            label: "Discovery",
            text: "Define the core user journey and cut scope ruthlessly."
        },
        {
             list: "02",
            label: "Design",
            text: "Wireframes and component plan, no pixel-pushing at MVP stage."
        },
        {
             list: "03",
            label: "Build",
            text: "Weekly demos, iterative delivery, no surprise scope creep."
        },
        {
             list: "04",
            label: "Launch",
            text: "Production deploy, monitoring, and a 30-day support window."
        }
    ]

    const TECH = [ "React","Node.js","Express","Fat API","Django", "MongoDB","PostgreSQL","Docker"
]
    return(
         <div className="pt-36 pb-28 px-6">
            <div className="max-w-[1350px] mx-auto">
                <div className="relative overflow-hidden bg-muted2 mb-12 min-h-[500px] flex items-end">
                    <Image 
                    src='/servicesmvp.avif'
                    width={200}
                    height={200}
                    alt="mvp development"
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                        <div className="w-12 h-12 flex justify-center items-center mb-4">
                          <FaMicroscope size={24} className="text-green-300"/>
                        </div>
                        <p className="font-mono tracking-widest text-sm uppercase mb-2 text-green-300">From idea to working product — fast.</p>
                        <h1 className="font-mono leading-tight font-bold text-3xl md:text-5xl">MVP Development</h1>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-12">
                       <p className="text-primary-foreground/65 text-base md:text-2xl leading-relaxed">
                         I help founders and product teams go from a concept to a working, deployable product in weeks not months. 
                         The focus is on shipping the right thing fast, validating assumptions early, and building a codebase that can scale once you've found product-market fit.
                       </p>
                       <div>
                         <p className="font-mono text-sm text-muted-foreground tracking-widest mb-5 uppercase">What's included</p>
                         <ul className="space-y-3">
                           <li className="flex items-start gap-3">
                             <CheckCircle size={12} className="text-green-300"/>
                              <span className="text-primary-foreground/65 text-lg leading-relaxed">Scope and requirements workshop</span>
                           </li>
                            <li className="flex items-start gap-3">
                             <CheckCircle size={12} className="text-green-300"/>
                              <span className="text-primary-foreground/65 text-lg leading-relaxed">Full-stack React + Node.js + Python implementation</span>
                           </li>
                            <li className="flex items-start gap-3">
                             <CheckCircle size={12} className="text-green-300"/>
                              <span className="text-primary-foreground/65 text-lg leading-relaxed">Authentication, database, and deployment</span>
                           </li>
                            <li className="flex items-start gap-3">
                             <CheckCircle size={12} className="text-green-300"/>
                              <span className="text-primary-foreground/65 text-lg leading-relaxed">CI/CD pipeline and staging environment</span>
                           </li>
                            <li className="flex items-start gap-3">
                             <CheckCircle size={12} className="text-green-300"/>
                              <span className="text-primary-foreground/65 text-lg leading-relaxed">Post-launch Support</span>
                           </li>
                         </ul>
                       </div>
                       <div>
                         <div className="flex items-center gap-3 mb-7">
                            <div className="h-px flex-1 bg-border/30"></div>
                            <p className="font-mono tracking-widest uppercase text-xs text-green-300">Benefits to a Company</p>
                            <div className="h-px flex-1 bg-border/30"></div>
                         </div>
                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                           {BENEFITS.map(({ id, icon, title, text})=>(
                             <div key={id} className="border border-primary-foreground/65 p-5 hover:border-foreground transition-all group">
                                <div className="w-8 h-8 flex items-center justify-center border border-foreground mb-4 text-green-300">
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
                                <p className="font-mono text-xs text-primary-foreground/65 leading-relaxed">Pre-seed founders, product teams validating a new idea, internal tools.</p>
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