import { ArrowRight, BarChart3Icon, CheckCircle, Clock, DollarSign, Search, Shield, Zap } from "lucide-react";
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

export default function AIML() {
    const BENEFITS:Benefits[] =[
        {
            id: 1,
            icon: <Clock size={20}/>,
            title: "Reclaim hundreds of hours per month",
            text: "Tasks that take your team hours each week run in seconds. Your people stop doing data entry and start doing work that actually requires human judgement."
        },
         {
            id: 2,
            icon: <DollarSign size={20}/>,
            title: "Dramatically lower operational costs",
            text: "Automated pipelines scale without headcount. As your volume grows, your cost per transaction goes down — not up."
        },
         {
            id: 3,
            icon: <Shield size={20}/>,
            title: "Fewer errors, more consistency",
            text: "Manual processes break under pressure. Automated workflows follow the same rules every time, eliminating the class of errors that come from human fatigue or distraction."
        },
         {
            id: 4,
            icon: <Zap size={20}/>,
            title: "Faster response times",
            text: "Customer requests, document approvals, and data processing happen in real time rather than waiting for someone to get to their inbox."
        }
    ]

    const STATS:Stats[] =[
        {
            list: "01",
            label: "Audit",
            text: "Map every repetitive touchpoint and estimate ROI of automating each."
        },
        {
             list: "02",
            label: "Design",
            text: "Choose the right tools; LLM, rules engine, or hybrid."
        },
        {
             list: "03",
            label: "Build",
            text: "Implement pipelines with full error handling and logging."
        },
        {
             list: "04",
            label: "Handover",
            text: "Documentation, training, and monitoring dashboards."
        }
    ]

    const TECH = ['Python', 'Node.js', 'LangChain', 'Open API', 'Gemini API', 'N8N', 'Ollama', 'Docker']
    return(
         <div className="pt-36 pb-28 px-6">
            <div className="max-w-[1350px] mx-auto">
                <div className="relative overflow-hidden bg-muted2 mb-12 min-h-[500px] flex items-end">
                    <Image 
                    src='/ai.avif'
                    width={200}
                    height={200}
                    alt="seo"
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                        <div className="w-12 h-12 flex justify-center items-center mb-4">
                          <FaMicroscope size={24} className="text-blue-300"/>
                        </div>
                        <p className="font-mono tracking-widest text-sm uppercase mb-2 text-blue-300">Eliminate repetitive work with intelligent pipelines.</p>
                        <h1 className="font-mono leading-tight font-bold text-3xl md:text-5xl">AI Automation</h1>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-12">
                       <p className="text-primary-foreground/65 text-base md:text-2xl leading-relaxed">
                         I design and build AI-driven automation workflows that replace manual, repetitive business processes; from data processing and document parsing to customer triage and internal reporting. 
                         You get more done with fewer people touching routine work.
                       </p>
                       <div>
                         <p className="font-mono text-sm text-muted-foreground tracking-widest mb-5 uppercase">What's included</p>
                         <ul className="space-y-3">
                           <li className="flex items-start gap-3">
                             <CheckCircle size={12} className="text-blue-300"/>
                              <span className="text-primary-foreground/65 text-lg leading-relaxed">Process audit and automation mapping</span>
                           </li>
                            <li className="flex items-start gap-3">
                             <CheckCircle size={12} className="text-blue-300"/>
                              <span className="text-primary-foreground/65 text-lg leading-relaxed">LLM-powered document and data pipelines</span>
                           </li>
                            <li className="flex items-start gap-3">
                             <CheckCircle size={12} className="text-blue-300"/>
                              <span className="text-primary-foreground/65 text-lg leading-relaxed">Webhook and API orchestration</span>
                           </li>
                            <li className="flex items-start gap-3">
                             <CheckCircle size={12} className="text-blue-300"/>
                              <span className="text-primary-foreground/65 text-lg leading-relaxed">Scheduled batch processing jobs</span>
                           </li>
                            <li className="flex items-start gap-3">
                             <CheckCircle size={12} className="text-blue-300"/>
                              <span className="text-primary-foreground/65 text-lg leading-relaxed">Monitoring, alerting, and fallback handling</span>
                           </li>
                         </ul>
                       </div>
                       <div>
                         <div className="flex items-center gap-3 mb-7">
                            <div className="h-px flex-1 bg-border/30"></div>
                            <p className="font-mono tracking-widest uppercase text-xs text-blue-300">Benefits to a Company</p>
                            <div className="h-px flex-1 bg-border/30"></div>
                         </div>
                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                           {BENEFITS.map(({ id, icon, title, text})=>(
                             <div key={id} className="border border-primary-foreground/65 p-5 hover:border-foreground transition-all group">
                                <div className="w-8 h-8 flex items-center justify-center border border-foreground mb-4 text-blue-300">
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
                                <p className="font-mono text-xs text-primary-foreground/65 leading-relaxed">Operations teams, SMEs with manual data workflows, SaaS companies.</p>
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