'use client'

import Link from "next/link";
import NavLink from "../ui/NavLink";
import { FaGithub } from "react-icons/fa";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar (){
const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const [menuOpen, setMenuOpen]= useState<boolean>(false)
    return (
        <header className="fixed top-0 border-b border-border z-50 inset-x-0 backdrop-blur-md duration-300 transition-all bg-dark-night/70">
            <nav className="max-w-6xl mx-auto flex items-center justify-between h-20 px-6">
               <Link href='/' className="font-mono font-semibold tracking-widest text-primary-foreground uppercase">
                 <span className="text-muted-foreground mr-1"> &gt; </span>  
                  EKM
               </Link>
            {/* Desktop */}
            <div className="hidden lg:flex items-center gap-3 font-mono uppercase tracking-wider text-sm">
                {navItems.map(({ name, path})=>(
                  <NavLink
                  key={path}
                  href={path}
                  >
                   {name}
                  </NavLink>
                ))}

               <Link
               href='https://github.com/kuria300'
               target="_blank"
               rel="noopener noreferrer"
               className="flex items-center gap-2 tracking-widest text-xs font-mono tracking-widest border border-muted-foreground/15 uppercase transition-all hover:border-primary-foreground hover:text-primary-foreground px-6 py-3"
               >
                <FaGithub size={13}/>
                  Github
               </Link>
            </div>

              <button
                onClick={()=> setMenuOpen((prev)=>!prev)}
                className="lg:hidden text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Toggle menu"
                >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            
            </nav>
             {menuOpen && (
                <div className="lg:hidden border-t border-border/40 bg-dark-night/95 backdrop-blur-sm">
                <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col gap-5">
                    {navItems.map(({ name, path }) => (
                    <div key={path} onClick={() => setMenuOpen(false)}>
                        <NavLink href={path}>
                        {name}
                        </NavLink>
                    </div>
                    ))}

                    <Link
                    href="https://github.com/kuria300"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 tracking-widest text-xs font-mono border border-border uppercase transition-all hover:border-primary hover:text-primary px-6 py-2 max-w-fit"
                    >
                    <FaGithub size={13} />
                    Github
                    </Link>
                </div>
                </div>
            )}
        </header>

    )
}