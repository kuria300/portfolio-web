import type { MetadataRoute } from "next";
import { detailServices } from "@/components/data/infer";

type changeFrequency = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never"

interface serviceUrls {
    url: string;
    lastModified: Date;
    changeFrequency: changeFrequency
    priority: number;
}[]



export default function sitemap(): MetadataRoute.Sitemap{
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL as string;

    const serviceUrls: serviceUrls[]= detailServices.map((service)=>({
        url: `${baseUrl}/services/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8
    }))

    return [
        {
            url: `${baseUrl}`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1.0
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7
        },
         {
            url: `${baseUrl}/projects`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9
        },
         {
            url: `${baseUrl}/services`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9
        },
        ...serviceUrls
    ]
}