import { ArrowRight, BarChart3Icon, Bell, CheckCircle, DollarSign, Link2, Shield, Smartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaMobileAlt } from "react-icons/fa";

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

export default function Mobile() {
    const BENEFITS:Benefits[] =[
        {
            id: 1,
            icon: <DollarSign size={20}/>,
            title: "One codebase, half the cost",
            text: "React Native delivers iOS and Android from a single codebase. You get full mobile coverage without paying for two separate native teams."
        },
         {
            id: 2,
            icon: <Smartphone size={20}/>,
            title: "Reach your entire audience",
            text: "Millions of users are mobile-first. An app on both major platforms means no customer is left out because they happen to be on the other OS."
        },
         {
            id: 3,
            icon: <Bell size={20}/>,
            title: "Push notifications drive re-engagement",
            text: "Apps have a direct line to your users' lock screens. Push campaigns and in-app messaging outperform email for time-sensitive engagement."
        },
         {
            id: 4,
            icon: <Shield size={20}/>,
            title: "A polished product builds brand trust",
            text: "A well-designed mobile app signals professionalism and permanence. It tells customers and investors you're building something built to last."
        }
    ]

    const STATS:Stats[] =[
        {
            list: "01",
            label: "UX Planning",
            text: "Map user flows and define navigation architecture."
        },
        {
             list: "02",
            label: "Design",
            text: "High-fidelity screens aligned with platform conventions."
        },
        {
             list: "03",
            label: "Build",
            text: "Sprint-based delivery with TestFlight / Play builds each week."
        },
        {
             list: "04",
            label: "Ship",
            text: "Store submission, metadata, screenshots, and release notes."
        }
    ]

    const TECH = ['React Native', 'Expo', 'TypeScript', 'Node.js', 'Firebase', 'Redux']
    return(
         <div className="pt-36 pb-28 px-6">
            <div className="max-w-[1350px] mx-auto">
                <div className="relative overflow-hidden bg-muted2 mb-12 min-h-[500px] flex items-end">
                    <Image 
                    src='/mobileapp.avif'
                    width={200}
                    height={200}
                    alt="mobile app development"
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                        <div className="w-12 h-12 flex justify-center items-center mb-4">
                          <FaMobileAlt size={24} className="text-orange-300"/>
                        </div>
                        <p className="font-mono tracking-widest text-sm uppercase mb-2 text-orange-300">Cross-platform apps that feel native.</p>
                        <h1 className="font-mono leading-tight font-bold text-3xl md:text-5xl">Mobile App Development</h1>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-12">
                       <p className="text-primary-foreground/65 text-base md:text-2xl leading-relaxed">
                         I build React Native applications for iOS and Android that share a codebase without sacrificing the native feel.
                         From consumer apps to B2B tools, I handle architecture, UI, API integration, and App Store submission end to end.
                       </p>
                       <div>
                         <p className="font-mono text-sm text-muted-foreground tracking-widest mb-5 uppercase">What's included</p>
                         <ul className="space-y-3">
                           <li className="flex items-start gap-3">
                             <CheckCircle size={12} className="text-orange-300"/>
                              <span className="text-primary-foreground/65 text-lg leading-relaxed">React Native cross-platform development</span>
                           </li>
                            <li className="flex items-start gap-3">
                             <CheckCircle size={12} className="text-orange-300"/>
                              <span className="text-primary-foreground/65 text-lg leading-relaxed">Custom UI components and animations</span>
                           </li>
                            <li className="flex items-start gap-3">
                             <CheckCircle size={12} className="text-orange-300"/>
                              <span className="text-primary-foreground/65 text-lg leading-relaxed">REST and GraphQL API integration</span>
                           </li>
                            <li className="flex items-start gap-3">
                             <CheckCircle size={12} className="text-orange-300"/>
                              <span className="text-primary-foreground/65 text-lg leading-relaxed">Push notifications and offline support</span>
                           </li>
                            <li className="flex items-start gap-3">
                             <CheckCircle size={12} className="text-orange-300"/>
                              <span className="text-primary-foreground/65 text-lg leading-relaxed">App Store and Play Store submission</span>
                           </li>
                         </ul>
                       </div>
                       <div>
                         <div className="flex items-center gap-3 mb-7">
                            <div className="h-px flex-1 bg-border/30"></div>
                            <p className="font-mono tracking-widest uppercase text-xs text-orange-300">Benefits to your company</p>
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
                                <p className="font-mono uppercase text-muted-foreground text-sm tracking-widest mb-2">Timeline</p>
                                <p className="font-mono text-xs text-primary-foreground/65 leading-relaxed">6 – 14 weeks</p>
                            </div>
                            <div className="h-px bg-border/30"></div>
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
                                <p className="font-mono text-xs text-primary-foreground/65 leading-relaxed">Startups needing iOS + Android coverage, existing web products going mobile.</p>
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