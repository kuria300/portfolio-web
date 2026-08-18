'use client'
import { ArrowLeft, CheckCircle } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

export default function Success() {
    const[allowed, setAlloed]=useState<boolean>(false)

    const router= useRouter()
    const hasChecked = useRef(false)

    useEffect(()=>{
        if(hasChecked.current) return;
        hasChecked.current = true
        const session= sessionStorage.getItem('formSubmitted')

        if(session === 'true'){
            setAlloed(true)
            sessionStorage.removeItem('formSubmitted')      
        }else{
            router.push('/contact')
            toast.error('Please fill in form first!')
        }
    }, [router])

    if(!allowed){
        return null
    }

    return(
        <div className="flex flex-col min-h-screen items-center justify-center">
             <div className="relative w-full max-w-lg text-center">
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 15, delay: 0.1 }}
                    className="flex justify-center mb-8"
                    >
                    <div className="relative">
                        <div className="w-20 h-20 flex items-center justify-center">
                        <CheckCircle size={36} className="text-primary-foreground" />
                        </div>
                    </div>
                    </motion.div>

                    <motion.div
                     initial={{opacity:0, y:16}}
                     animate={{opacity:1, y:0}}
                     transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <p className="font-mono text-xs text-primary-foreground tracking-widest uppercase mb-3">
                                Message received
                            </p>
                            <h1 className="font-mono font-bold text-3xl md:text-4xl leading-tight mb-4">
                                Thanks for reaching out,<br />
                                <span className="text-primary-foreground">I&apos;ll be in touch.</span>
                            </h1>
                            <p className="text-primary-foreground/60 text-sm leading-relaxed mb-10">
                                Your message landed in my inbox. I typically reply within
                                24 hours. In the meantime, feel free to
                                explore the rest of the site.
                            </p>
                    </motion.div>

                     <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.9 }}
                        >
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 font-mono text-xs px-6 py-3 border border-primary-foreground/30 hover:border-primary-foreground uppercase tracking-widest text-muted-foreground hover:text-primary-foreground transition-colors"
                        >
                            <ArrowLeft size={12} /> Back to home
                        </Link>
                        </motion.div>
              </div>
        </div>
    )
}