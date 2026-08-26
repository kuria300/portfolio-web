import { Mail, TerminalIcon } from "lucide-react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export default function Footer (){
    return(
        <footer className="py-8 mt-auto px-6 border-t border-border">
            <div className="max-w-6xl mx-auto flex items-center justify-between flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-2">
                <TerminalIcon size={14} className="text-primary-foreground" />
                 <p className="font-mono tracking-widest text-xs text-muted-foreground "> © {new Date().getFullYear()} EKM. All Rights Reserved</p>
              </div>
              <div className="flex items-center gap-6">
                <Link
                 href='https://github.com/kuria300'
                 rel="noopener noreferrer"
                 target="_blank"
                >
                 <FaGithub size={16}/>
                </Link>

                 <Link
                 href='https://www.linkedin.com/in/eugene-maina-376177245/'
                 rel="noopener noreferrer"
                 target="_blank"
                >
                 <FaLinkedin size={16}/>
                </Link>

                 <Link href='mailto:eugenekuria66@gmail.com' >
                 <Mail size={16}/>
                </Link>
              </div>
            </div>
        </footer>
    )
}