'use client'
import { motion } from "motion/react"

export default function AnimatedHero(){
    return(
         <motion.h1 
         initial={{ opacity: 0, y: 20}}
         animate = {{opacity: 1, y: 0}}
         transition={{ duration: 0.6, ease: "easeOut" }}
         className="font-mono font-bold leading-none tracking-tight mb-10" style={{ fontSize: "clamp(2.8rem, 8vw, 6.6rem)" }}>
            <span className="text-muted-foreground text-xl md:text-3xl block mb-4 font-normal tracking-widest ">
              Hello, I&apos;m
            </span>
            Eugene{" "}
            <span className="text-primary-foreground">
              kuria{" "}
            </span>
            <motion.span
            initial={{ y: -100, opacity: 0}}
             animate={{ y: 0, opacity: 1 }}
                transition={{
                type: "spring",
                stiffness: 260,
                damping: 10,
                delay: 0.4, // starts after the h1 fade-in finishes
                }}

                className="max-sm:mt-2 inline-block"
            >
                Maina
            </motion.span>
          </motion.h1>

    )

}