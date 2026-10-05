'use client'

import Link from "next/link";
import NavLink from "../ui/NavLink";
import { FaGithub } from "react-icons/fa";
import { ArrowUpRight, ArrowUpRightFromSquare, ChevronUp, Menu, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { detailServices, ServiceItem } from "../data/infer";

interface NavItems {
    name: string,
    path: string,
    hasDropDown?: boolean
}


function chunkArray<T>(arr: T[], size: number):T[][]{
  const result: T[][] = []
  for(let i=0;i< arr.length;i +=size){
    result.push(arr.slice(i, i+size))
  }
  return result
}

export default function Navbar (){
const navItems:NavItems[] = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services", hasDropDown: true},
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];



  const pathName = usePathname()
  const columns = chunkArray(detailServices, 5)

  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const [servicesDrop, setServicesDrop] = useState<boolean>(false)
  const [scrolled, setScrolled]=useState(false)

  // closes the DESKTOP flyout when you click anywhere outside it
  const dropdownRef = useRef<HTMLDivElement>(null)
  const mobileDropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node
    const clickedInsideDesktop = dropdownRef.current?.contains(target)
    const clickedInsideMobile = mobileDropdownRef.current?.contains(target)

    if (!clickedInsideDesktop && !clickedInsideMobile) { 
      setServicesDrop(false)
    }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  useEffect(()=>{
    const scrollDown = (): void => setScrolled(window.scrollY > 20)


   window.addEventListener('scroll', scrollDown)
   return ()=> window.removeEventListener('scroll', scrollDown)
  }, [])

    return (
        <header className="fixed inset-x-0 top-0 z-50">
             <div className="w-full bg-primary-foreground px-4 py-1.5 text-center font-mono text-[11px] font-medium uppercase tracking-widest text-white">
                Creator-Lift <span className="opacity-60">.</span> coming soon
            </div>
            <nav
                className={`mx-auto w-full backdrop-blur-md transition-all duration-300 ease-in-out border-b border-border bg-dark-night/70 rounded-none mt-0 max-w-full
                ${
                    scrolled
                    ? "md:mt-4 md:max-w-4xl md:rounded-xl md:border md:shadow-lg"
                    : "md:max-w-full md:border-0 md:border-b"
                }`}
            >
                <div className={`mx-auto flex items-center justify-between px-4 py-3 max-sm:py-6 transition-all duration-300 md:px-6 max-sm:px-8
                    ${scrolled ? "md:max-w-4xl" : "md:max-w-6xl"}`}
                >
               <Link href='/' className="font-mono font-semibold tracking-widest text-primary-foreground uppercase">
                 <span className="text-muted-foreground mr-1"> &gt; </span>  
                  EKM
               </Link>

            {/* Desktop */}
            <div className="hidden lg:flex items-center gap-3 font-mono uppercase tracking-wider text-sm">
                {navItems.map(({ name, path, hasDropDown})=>{
                 if(hasDropDown){
                    return(
                    <div key={path} className="relative" ref={dropdownRef}>
                      <NavLink
                        href={path}
                        onClick={(e) => {
                        e.preventDefault(); 
                        e.stopPropagation(); 
                        setServicesDrop((prev) => !prev); 
                        }}
                    >
                        <span className="flex items-center gap-1">
                        {name}
                            <span
                                className={`transition-transform ${
                                servicesDrop ? "rotate-180" : ""
                                }`}
                            >
                                <ChevronUp size={14}/>
                            </span>
                        </span>
                    </NavLink>

                    {servicesDrop && (
                        <div className="absolute top-full -left-44 mt-3 flex gap-8 rounded-xl bg-white p-6 shadow-xl z-50">
                            {columns.map((col, colIndex) => (
                                <div key={colIndex} className="flex flex-col gap-3">
                                {col.map((service) => (
                                    <Link
                                    key={service.slug}
                                    href={`/services/${service.slug}`}
                                    onClick={() => setServicesDrop(false)}
                                    className="font-mono whitespace-nowrap text-sm text-primary-foreground/60 hover:text-background tracking-normal lowercase"
                                    >
                                   <span className="flex items-center gap-1 p-2 bg-muted-foreground/10">
                                     {service.name}
                                      <ArrowUpRight size={12}/>
                                   </span>
                                    </Link>
                                ))}
                                </div>
                            ))}
                            </div>
                         )}
                    </div>
                    )
                 }

                 return(
                  <NavLink
                  key={path}
                  href={path}
                  >
                   {name}
                  </NavLink>
                )})}

               <Link
               href='https://github.com/kuria300'
               target="_blank"
               rel="noopener noreferrer"
               className="flex items-center gap-2 tracking-widest text-xs font-mono border border-muted-foreground/15 uppercase transition-all hover:border-primary-foreground hover:text-primary-foreground px-6 py-3"
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
             </div>
            </nav>
 
             {menuOpen && (
                <div className="lg:hidden border-t border-border/40 bg-dark-night/95 backdrop-blur-sm">
                <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col gap-5">
                    {navItems.map(({ name, path, hasDropDown }) => {

                    // calculated PER ITEM now, not once for the whole list
                    const isActive = pathName === path || pathName.startsWith(path + '/')

                    if(hasDropDown){
                    return(
                    <div key={path} className="px-3 py-2" ref={mobileDropdownRef}>
                      <Link
                        href={path}
                        onClick={(e) => {
                        e.preventDefault(); 
                        setServicesDrop((prev) => !prev); 
                        }}
                        className={`transition-colors text-muted-foreground  ${
                            isActive 
                            ? "text-primary/60 font-medium" 
                            : "text-muted-foreground hover:text-primary"
                        }`}
                    >
                        <span className="flex items-center gap-1">
                        {name}
                            <span
                                className={`transition-transform ${
                                servicesDrop ? "rotate-180" : ""
                                }`}
                            >
                                <ChevronUp size={14}/>
                            </span>
                        </span>
                    </Link>

                    {servicesDrop && (
                        <div>
                                {detailServices.map((service) => (
                                    <div key={service.name} className="flex flex-col gap-4 ms-2.5 ">
                                        <Link
                                        key={service.slug}
                                        href={`/services/${service.slug}`}
                                        onClick={() => {
                                            setServicesDrop(false)  // close the mini list
                                            setMenuOpen(false)      // AND close the whole mobile menu
                                        }}
                                        className="p-2.5 font-mono whitespace-nowrap text-sm text-muted-foreground hover:text-primary tracking-normal"
                                        >
                                            <span className="flex items-center justify-between">
                                                {service.name}
                                                <ArrowUpRight size={12}/>
                                            </span>
                                        </Link>
                                    </div>
                                ))}
                                </div>
                         )}
                    </div>
                    )
                 }
                    
                    return(
                    <div key={path} onClick={() => setMenuOpen(false)}>
                        <Link 
                        href={path}
                         className={`px-4 py-2 rounded-md transition-colors text-muted-foreground  ${
                            isActive 
                            ? "text-primary/15 font-medium" 
                            : "text-muted-foreground hover:text-primary"
                        }`}
                        >
                        {name}
                        </Link>
                    </div>
                    )})}

                    <Link
                    href="https://github.com/kuria300"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 tracking-widest text-xs font-mono border text-muted-foreground border-border uppercase transition-all hover:border-primary hover:text-primary px-6 py-2 max-w-fit"
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