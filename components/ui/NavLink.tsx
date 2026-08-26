'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavLinkProps {
    href: string, 
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>)=>void,
    children: React.ReactNode,
    className?: string
}

export default function NavLink ({ href,onClick, children, className}: NavLinkProps){
    const pathName = usePathname()

    const isActive = pathName === href || pathName.startsWith(href + '/')

    return(
    <Link
        href={href} 
        onClick={onClick}
        className={`px-4 py-2 rounded-md transition-colors text-muted-foreground  ${
            isActive 
            ? "text-primary-foreground font-medium" 
            : "text-muted-foreground hover:text-primary-foreground/90"
        }
         ${className || ''}
        `}
        >
        {children}
    </Link>

    )

}