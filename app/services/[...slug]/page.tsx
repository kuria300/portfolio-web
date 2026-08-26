import AIML from "@/components/services/AIML";
import Apidev from "@/components/services/Apidev";
import Consulting from "@/components/services/Consulting";
import Devops from "@/components/services/Devops";
import Frontend from "@/components/services/Frontend";
import Mobile from "@/components/services/Mobile";
import Mvp from "@/components/services/Mvp";
import Seo from "@/components/services/Seo";
import { detailServices, ServiceItem } from "@/components/data/infer";
import { Metadata } from "next";
import { notFound } from "next/navigation";


export function generateStaticParams(){
    return detailServices.map((service: ServiceItem)=>({
        slug: service.slug.split('/')
    }))
}

export async function generateMetadata({params}: { params: Promise<{ slug:string[]}>}): Promise<Metadata>{
   
    const { slug } = await params
     const slugPath = slug.join("/");

     const service = detailServices.find((s: ServiceItem)=> s.slug === slugPath)

     if (!service) return {};

     return {
        title: service.name,
        description: service.description,
        alternates:{
            canonical: `services/${slugPath}`
        },

        openGraph:{
            title: service.name,
            description: service.description,
            url: `/services/${slugPath}`,
        }
     }
}


export default async function Services({params}:{ params: Promise<{ slug: string[]}>}) {

    const { slug } = await params
     const slugPath = slug.join("/");

       const service = detailServices.find((s: ServiceItem) => s.slug === slugPath);
        if (!service) notFound();

        const jsonLd = {
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: service.name,
            provider: {
            "@type": "Organization",
            name: "EKM Tech Solutions",
            url: process.env.NEXT_PUBLIC_SITE_URL,
            founder: {
                "@type": "Person",
                name: "EKM",
            },
            },
            description: service.description,
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/services/${slugPath}`,
        };

      if (slugPath === "seo") {
        return <Seo />
    }
    if(slugPath === "mvp-development"){
        return <Mvp />
    }
    if(slugPath === "api-development"){
        return <Apidev />
    }
    if(slugPath === "ai-integration"){
        return <AIML />
    }
    if(slugPath === "consulting"){
        return <Consulting />
    }
    if(slugPath === "ai-automation"){
        return <Frontend />
    }
    if(slugPath === "devops"){
        return <Devops />
    }
    if(slugPath === "mobile"){
        return <Mobile />
    }
}