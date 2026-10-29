import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "sonner";
import WhatsappIcon from "@/components/layout/WhatsappIcon";
import { SITE_URL } from "@/utils/site";

const Sans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const Mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Eugene Kuria | Full-Stack Software Engineer",
    template: "%s | Eugene Kuria",
  },
  description: "Eugene Kuria is a full-stack software engineer in Nairobi, Kenya, building web applications with React, Next.js, Node.js, Django, and FastAPI.",

  keywords: [
    "EKM",
    "Tech Company",
    "Web developer in Nairobi",
    "web developer in Kasarani",
    "frontend developer",
    "backend developer",
    "React developer",
    "DevOps Engineer",
    "Next.js portfolio",
    "web developer portfolio",
    "software development",
    ""
  ],

  authors : [{ name: "EKM"}],
  creator: "EKM",

  // setup how it will appear when shared
  openGraph:{
    type:"website",
    url: SITE_URL,
    title: "Eugene Kuria | Full-Stack Software Engineer",
    siteName: "Eugene Kuria Portfolio",
    description: "Explore projects, skills, and experience from Eugene Kuria, a full-stack software engineer based in Nairobi, Kenya.",
    locale:"en_US",

    images:[
      {
       url: "/opengraph-image.png",
       width: 1200,
       height: 630,
       alt: "Eugene Kuria portfolio"
    }
   ]
  },
  twitter: {
  card: "summary_large_image",
  title: "Eugene Kuria | Full-Stack Software Engineer",
  description: "Explore projects, skills, and experience from Eugene Kuria, a full-stack software engineer in Nairobi, Kenya.",
  images: ["/opengraph-image.png"],
},

robots:{
  index: true,
  follow: true,
  googleBot:{
    index: true,
    follow: true,
    "max-image-preview":"large" //If Google shows a picture from my page in search results, let it show a BIG picture, not a tiny 
  }
},

// icons:{
//   icon:"/favicon.ico",
//   apple:"/apple-icon.png"
// },

};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${Sans.variable} ${Mono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "worksFor":{
                "@type": "Organization",
                "name": "EKM Tech Solutions"
              },
              name: "EKM",
              jobTitle: "Full-stack Engineer",
              url: "https://eugenekuria.vercel.app/",
              sameAs: [
                "https://github.com/kuria300",
                "https://www.linkedin.com/in/eugene-maina-376177245/",
              ],
            }),
          }}
        />
        <Navbar />
        {children}
        <Footer />
        <Toaster richColors position="top-right" />

        <WhatsappIcon />
      </body>
    </html>
  );
}
