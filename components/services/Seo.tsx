import { ArrowRight, BarChart3Icon, CheckCircle, DollarSign, Search, Shield } from "lucide-react";
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

export default function Seo() {
    const BENEFITS:Benefits[] =[
        {
            id: 1,
            icon: <DollarSign size={20}/>,
            title: "Organic traffic that compounds over time",
            text: "Unlike paid ads, SEO improvements keep delivering. A page that ranks today brings in visitors for months and years with no ongoing spend."
        },
         {
            id: 2,
            icon: <Search size={20}/>,
            title: "Be found at the moment of intent",
            text: "Your customers are already searching for what you offer. Strong SEO puts you in front of them at exactly the right moment — when they're ready to buy."
        },
         {
            id: 3,
            icon: <BarChart3Icon size={20}/>,
            title: "Measurable, trackable results",
            text: "Rankings, impressions, clicks, and conversions are all measurable. You know exactly what's working and where your organic growth is coming from."
        },
         {
            id: 4,
            icon: <Shield size={20}/>,
            title: "Technical fixes improve performance for everyone",
            text: "Faster pages and better semantics don't just help rankings — they improve the experience for every visitor, reducing bounce rates and increasing time on site."
        }
    ]

    const STATS:Stats[] =[
        {
            list: "01",
            label: "Audit",
            text: "Full crawl, Core Web Vitals report, and gap analysis."
        },
        {
             list: "02",
            label: "Audit",
            text: "Full crawl, Core Web Vitals report, and gap analysis."
        },
        {
             list: "03",
            label: "Audit",
            text: "Full crawl, Core Web Vitals report, and gap analysis."
        },
        {
             list: "04",
            label: "Audit",
            text: "Full crawl, Core Web Vitals report, and gap analysis."
        }
    ]

    const TECH = ['Next.js', 'Google Search Console', 'Lighthouse', 'Ahrefs', 'SiteBulb', 'Google Analytics', 'Schema.org']
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
                          <FaMicroscope size={24} className="text-orange-300"/>
                        </div>
                        <p className="font-mono tracking-widest text-sm uppercase mb-2 text-orange-300">Organic growth built on technical foundations.</p>
                        <h1 className="font-mono leading-tight font-bold text-3xl md:text-5xl">SEO</h1>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-12">
                       <p className="text-primary-foreground/65 text-base md:text-2xl leading-relaxed">
                         SEO that sticks starts with technical correctness — fast pages, proper semantics, clean crawlability — then layers content and link strategy on top. 
                         I handle the full technical SEO stack for web apps and content sites, with measurable outcomes.
                       </p>
                       <div>
                         <p className="font-mono text-sm text-muted-foreground tracking-widest mb-5 uppercase">What's included</p>
                         <ul className="space-y-3">
                           <li className="flex items-start gap-3">
                             <CheckCircle size={12} className="text-orange-300"/>
                              <span className="text-primary-foreground/65 text-lg leading-relaxed">Technical SEO audit (Core Web Vitals, crawl)</span>
                           </li>
                            <li className="flex items-start gap-3">
                             <CheckCircle size={12} className="text-orange-300"/>
                              <span className="text-primary-foreground/65 text-lg leading-relaxed">Meta, schema markup, and Open Graph</span>
                           </li>
                            <li className="flex items-start gap-3">
                             <CheckCircle size={12} className="text-orange-300"/>
                              <span className="text-primary-foreground/65 text-lg leading-relaxed">Sitemap, robots.txt, and canonical setup</span>
                           </li>
                            <li className="flex items-start gap-3">
                             <CheckCircle size={12} className="text-orange-300"/>
                              <span className="text-primary-foreground/65 text-lg leading-relaxed">Performance optimisation for LCP/CLS</span>
                           </li>
                            <li className="flex items-start gap-3">
                             <CheckCircle size={12} className="text-orange-300"/>
                              <span className="text-primary-foreground/65 text-lg leading-relaxed">Content strategy and keyword mapping</span>
                           </li>
                         </ul>
                       </div>
                       <div>
                         <div className="flex items-center gap-3 mb-7">
                            <div className="h-px flex-1 bg-border/30"></div>
                            <p className="font-mono tracking-widest uppercase text-xs text-orange-300">Benefits to a Company</p>
                            <div className="h-px flex-1 bg-border/30"></div>
                         </div>
                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                           {BENEFITS.map(({ id, icon, title, text})=>(
                             <div key={id} className="border border-primary-foreground/65 p-5 hover:border-foreground transition-all group">
                                <div className="w-8 h-8 flex items-center justify-center border border-foreground mb-4 text-orange-300">
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
                                <p className="font-mono text-xs text-primary-foreground/65 leading-relaxed">Content Sites, Saas, e-commerce, local business</p>
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