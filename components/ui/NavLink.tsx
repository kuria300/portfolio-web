'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"


export default function NavLink ({ href, children}: { href: string, children: React.ReactNode}){
    const pathName = usePathname()

    const isActive = pathName === href

    return(
    <Link
        href={href} 
        className={`px-4 py-2 rounded-md transition-colors text-muted-foreground  ${
            isActive 
            ? "text-primary-foreground font-medium" 
            : "text-muted-foreground hover:text-primary-foreground"
        }`}
        >
        {children}
    </Link>

    )

}