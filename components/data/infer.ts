
 export interface ServiceItem {
    name: string,
    slug: string,
    description: string
}


export const detailServices: ServiceItem[] = [
  { name: "API development", slug: "api-development", description: "Custom, secure, and scalable REST or GraphQL APIs built to connect your systems and power your applications."},
  { name: "SEO", slug: "seo", description: "Technical and on-page SEO strategies to help your website rank higher on Google and attract organic traffic."},
  { name: "AI integration", slug: "ai-integration",  description: "Seamlessly integrate AI models and APIs into your product to automate workflows and enhance user experience."},
  { name: "MVP development", slug: "mvp-development" ,  description: "Fast, functional MVPs built to validate your idea and get you in front of real users quickly."},
  { name: "Technical Consulting", slug: "consulting" ,  description: "Strategic guidance on architecture, tooling, and technical decisions to keep your project on track."},
  { name: "AI Automation", slug: "ai-automation" ,  description: "Automate repetitive tasks and workflows using AI-driven tools tailored to your business needs."},
  { name: "DevOps & Containerization", slug: "devops" , description: "Docker, CI/CD pipelines, and cloud deployment setups to streamline how you ship and scale software."},
  { name: "Mobile Development", slug: "mobile",  description: "Cross-platform mobile apps built with React Native, delivering native performance from a single codebase."}
];