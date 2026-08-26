import { ArrowRight, BarChart3Icon, CheckCircle, Clock, DollarSign, Search, Shield, Star, Users, Zap } from "lucide-react";
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
            icon: <Star size={20}/>,
            title: "Leap ahead of your competition",
            text: "AI features that genuinely improve the user experience — intelligent search, smart suggestions, document Q&A — create a differentiation that's hard and slow to copy."
        },
         {
            id: 2,
            icon: <Users size={20}/>,
            title: "Higher user engagement and retention",
            text: "Products that adapt to users and surface relevant information keep people coming back. AI features reduce friction and make your product feel genuinely useful."
        },
         {
            id: 3,
            icon: <DollarSign size={20}/>,
            title: "New pricing leverage",
            text: "AI-powered tiers command premium pricing. Adding a co-pilot or intelligent automation layer gives you a credible reason to charge more."
        },
         {
            id: 4,
            icon: <Zap size={20}/>,
            title: "Ship AI without the research overhead,",
            text: "Integrating AI correctly — with good prompt engineering, caching, and fallbacks — takes experience. You get production-ready features without your team climbing a steep learning curve."
        }
    ]

    const STATS:Stats[] =[
        {
            list: "01",
            label: "Scope",
            text: "Define which AI features deliver the most user value."
        },
        {
             list: "02",
            label: "Prototype",
            text: "Quick POC to validate quality and latency before full build."
        },
        {
             list: "03",
            label: "Integrate",
            text: "Production-grade implementation with error handling."
        },
        {
             list: "04",
            label: "Optimise",
            text: "Tune costs, latency, and model selection post-launch."
        }
    ]

    const TECH = ["Open AI", "Langchain", "Anthropic", "Gemini", "PineCone", "pgvector", "React"]
    return(
         <div className="pt-36 pb-28 px-6">
            <div className="max-w-[1350px] mx-auto">
                <div className="relative overflow-hidden bg-gradient-to-t from-muted2 to-muted mb-12 min-h-[500px] flex items-end">
                    <Image 
                    src='/aiintegrate.avif'
                    width={200}
                    height={200}
                    alt="seo"
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                        <div className="w-12 h-12 flex justify-center items-center mb-4">
                          <FaMicroscope size={24} className="text-purple-300"/>
                        </div>
                        <p className="font-mono tracking-widest text-sm uppercase mb-2 text-purple-300">Eliminate repetitive work with intelligent pipelines.</p>
                        <h1 className="font-mono leading-tight font-bold text-3xl md:text-5xl">AI Integration</h1>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-12">
                       <p className="text-primary-foreground/65 text-base md:text-2xl leading-relaxed">
                        You have a working product, now you want to make it smarter.
                         I integrate large language models, vector search, and AI APIs into existing applications: intelligent search, co-pilots, content generation, classification, and more.
                       </p>
                       <div>
                         <p className="font-mono text-sm text-muted-foreground tracking-widest mb-5 uppercase">What's included</p>
                         <ul className="space-y-3">
                           <li className="flex items-start gap-3">
                             <CheckCircle size={12} className="text-purple-300"/>
                              <span className="text-primary-foreground/65 text-lg leading-relaxed">LLM feature design and prompt engineering</span>
                           </li>
                            <li className="flex items-start gap-3">
                             <CheckCircle size={12} className="text-purple-300"/>
                              <span className="text-primary-foreground/65 text-lg leading-relaxed">Vector database setup (Pinecone, pgvector)</span>
                           </li>
                            <li className="flex items-start gap-3">
                             <CheckCircle size={12} className="text-purple-300"/>
                              <span className="text-primary-foreground/65 text-lg leading-relaxed">RAG pipelines for document</span>
                           </li>
                            <li className="flex items-start gap-3">
                             <CheckCircle size={12} className="text-purple-300"/>
                              <span className="text-primary-foreground/65 text-lg leading-relaxed">Streaming AI responses in React UIs</span>
                           </li>
                            <li className="flex items-start gap-3">
                             <CheckCircle size={12} className="text-purple-300"/>
                              <span className="text-primary-foreground/65 text-lg leading-relaxed">Cost optimisation and caching strategies</span>
                           </li>
                         </ul>
                       </div>
                       <div>
                         <div className="flex items-center gap-3 mb-7">
                            <div className="h-px flex-1 bg-border/30"></div>
                            <p className="font-mono tracking-widest uppercase text-xs text-purple-300">Benefits to a Company</p>
                            <div className="h-px flex-1 bg-border/30"></div>
                         </div>
                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                           {BENEFITS.map(({ id, icon, title, text})=>(
                             <div key={id} className="border border-primary-foreground/65 p-5 hover:border-foreground transition-all group">
                                <div className="w-8 h-8 flex items-center justify-center border border-foreground mb-4 text-purple-300">
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