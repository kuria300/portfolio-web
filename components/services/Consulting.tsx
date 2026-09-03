import { ArrowRight, BarChart3Icon, CheckCircle, DollarSign, Repeat, Search, Shield, Users } from "lucide-react";
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

export default function Consulting() {
    const BENEFITS:Benefits[] =[
        {
            id: 1,
            icon: <DollarSign size={20}/>,
            title: "Expert input without the full-time salary",
            text: "A senior engineer or CTO costs $150k+ per year. A consulting engagement gives you the same strategic thinking at a fraction of the cost, engaged only when you need it."
        },
         {
            id: 2,
            icon: <Shield size={20}/>,
            title: "Avoid expensive architectural mistakes",
            text: "The wrong tech choices compound they slow hiring, constrain features, and eventually require painful rewrites. Getting the architecture right early pays dividends for years."
        },
         {
            id: 3,
            icon: <Users size={20}/>,
            title: "Bridge the gap between business and engineering",
            text: "Technical decisions have business consequences. I translate between both worlds so your roadmap, budget, and team structure actually align with your goals."
        },
         {
            id: 4,
            icon: <Repeat size={20}/>,
            title: "Reduce technical debt before it bites",
            text: "An honest audit surfaces the debt that's quietly slowing your team. Addressing it with a clear plan is far less disruptive than waiting until it becomes a crisis."
        }
    ]

    const STATS:Stats[] =[
        {
            list: "01",
            label: "Kickoff",
            text: "Deep dive into your current state, goals, and constraints."
        },
        {
             list: "02",
            label: "Audit",
            text: "Review codebase, infrastructure, and team practices."
        },
        {
             list: "03",
            label: "Recommend",
            text: "Written report with prioritised, actionable findings."
        },
        {
             list: "04",
            label: "Advice",
            text: "Ongoing check-ins to guide implementation and decisions."
        }
    ]

    const TECH = ["ADRS", "Agnostic", "RFC process", "Diagrams"]
    return(
         <div className="pt-36 pb-28 px-6">
            <div className="max-w-[1350px] mx-auto">
                <div className="relative overflow-hidden bg-muted2 mb-12 min-h-[500px] flex items-end">
                    <Image 
                    src='/SEO.jpg'
                    width={200}
                    height={200}
                    alt="seo"
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                        <div className="w-12 h-12 flex justify-center items-center mb-4">
                          <FaMicroscope size={24} className="text-green-400"/>
                        </div>
                        <p className="font-mono tracking-widest text-sm uppercase mb-2 text-green-400">Expert guidance without the full-time hire.</p>
                        <h1 className="font-mono leading-tight font-bold text-3xl md:text-5xl">Tech Consulting</h1>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-12">
                       <p className="text-primary-foreground/65 text-base md:text-2xl leading-relaxed">
                         Sometimes you don't need more code, you need a clear technical direction. 
                         I work with founders, CTOs, and engineering leads as a fractional technical advisor: architecture reviews, build-vs-buy decisions, hiring guidance, and roadmap planning.
                       </p>
                       <div>
                         <p className="font-mono text-sm text-muted-foreground tracking-widest mb-5 uppercase">What's included</p>
                         <ul className="space-y-3">
                           <li className="flex items-start gap-3">
                             <CheckCircle size={12} className="text-green-400"/>
                              <span className="text-primary-foreground/65 text-lg leading-relaxed">Architecture and codebase review</span>
                           </li>
                            <li className="flex items-start gap-3">
                             <CheckCircle size={12} className="text-green-400"/>
                              <span className="text-primary-foreground/65 text-lg leading-relaxed">Tech stack selection and roadmap</span>
                           </li>
                            <li className="flex items-start gap-3">
                             <CheckCircle size={12} className="text-green-400"/>
                              <span className="text-primary-foreground/65 text-lg leading-relaxed">Build-vs-buy analysis</span>
                           </li>
                            <li className="flex items-start gap-3">
                             <CheckCircle size={12} className="text-green-400"/>
                              <span className="text-primary-foreground/65 text-lg leading-relaxed">Engineering team structure advice</span>
                           </li>
                            <li className="flex items-start gap-3">
                             <CheckCircle size={12} className="text-green-400"/>
                              <span className="text-primary-foreground/65 text-lg leading-relaxed">Ongoing advisory retainer</span>
                           </li>
                         </ul>
                       </div>
                       <div>
                         <div className="flex items-center gap-3 mb-7">
                            <div className="h-px flex-1 bg-border/30"></div>
                            <p className="font-mono tracking-widest uppercase text-xs text-green-400">Benefits to a Company</p>
                            <div className="h-px flex-1 bg-border/30"></div>
                         </div>
                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                           {BENEFITS.map(({ id, icon, title, text})=>(
                             <div key={id} className="border border-primary-foreground/65 p-5 hover:border-foreground transition-all group">
                                <div className="w-8 h-8 flex items-center justify-center border border-foreground mb-4 text-green-400">
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
                                <p className="font-mono text-xs text-primary-foreground/65 leading-relaxed">Non-technical founders, early-stage CTOs, teams at inflection points.</p>
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