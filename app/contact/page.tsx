'use client'
import { ArrowRight, Mail, MapPin, Send, TerminalIcon } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ContactInfer, ContactSchema } from "@/utils/ContactSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useRef } from "react";
import { toast } from "sonner";
import { ContactAction } from "@/utils/actions/ContactAction";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Contact() {
    const captchaRef = useRef<HCaptcha>(null);
    const router=useRouter()

    const DIRECT_LINKS =[
        {
        label:"Email",
        href: "mailto:eugenekuria66@gmail.com",
        icon: <Mail size={16}/>,
        display:'eugenekuria66@gmail.com'
        },
        {
         label:"Github",
        href: "https://github.com",
        icon: <FaGithub size={16}/>,
        display:'@Kuria300',
        external: true
        },
        {
        label:"Linkedln",
        href: "https://www.linkedin.com/in/eugene-maina-376177245/",
        icon: <FaLinkedin size={16}/>,
        display:'@Eugene Kuria',
        external: true
        }
]

const {register, handleSubmit,setValue, formState:{errors, isSubmitting, touchedFields}} =useForm({
     resolver: zodResolver(ContactSchema),
    mode: "onTouched"
})

const onSubmit =async(data: ContactInfer)=>{
    const captchaToken = captchaRef.current?.getResponse();
    if (!captchaToken) {
      toast.error("Please complete the captcha.");
      return;
    }

  console.log(data)

  const result= await ContactAction(data)

  if (!result.success) {
    toast.error(result.error);
    return;
  }

 try{
     const { name, email, subject, message}=data

  const res = await axios.post('https://api.web3forms.com/submit', {
    access_key: process.env.NEXT_PUBLIC_FORM_ACCESS_KEY,
    subject:    `New Inquiry: ${subject} — ${name}`,
    from_name:  "EKM",
    replyto:    email,
    name,
    email,
    message,
    "h-captcha-response": captchaToken, 
  },{
   headers:{ "Content-Type": "application/json" }
 }
)

if(res.data.success){
    setValue("name", "");
    setValue("email", "");
    setValue('subject', '')
    setValue("message", "");

     captchaRef.current?.resetCaptcha(); 

     sessionStorage.setItem("formSubmitted", "true");

    router.push("contact/success");

}else{
    toast.error("Email delivery failed. Please try again.")
    captchaRef.current?.resetCaptcha();
  }
  }catch(err: unknown){
    if(axios.isAxiosError(err)){
        console.error("Axios error:", err.response?.data);
          toast.error("Email delivery failed. Please try again.");
    }
     toast.error("Unexpected error. Please try again.");
}
captchaRef.current?.resetCaptcha();
}

    return(
        <div className="pt-36 pb-28 px-6">
            <div className="max-w-6xl mx-auto">
                {/* header */}
                <div className="mb-16 border-b border-border/30 pb-12">
                    <p className="font-mono text-xs text-primary-foreground tracking-widest uppercase mb-4">
                        Get in touch
                    </p>
                    <h1 className="font-mono font-bold text-4xl md:text-5xl leading-tight mb-6">
                        contact
                    </h1>
                    <p className="text-primary-foreground/65 max-w-3xl leading-relaxed text-base md:text-lg">
                        Whether you're a recruiter with a role, a founder with a project, or just want to talk tech — I'm reachable. I reply to every message.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
                    <div className="lg:col-span-3 border border-primary-foreground/65 p-8">
                       <form  onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <label htmlFor='name' className="font-mono text-sm uppercase tracking-widest text-muted-foreground block mb-2">
                                    Name
                                </label>
                                <input 
                                id="name"
                                type="text"
                                autoComplete="name"
                                required
                               className="w-full bg-secondary2 border border-border px-4 py-3 font-mono text-sm text-background placeholder:text-background/50 focus:border-primary-foreground transition-colors"
                                placeholder="Your name"
                                {...register('name')}
                                />
                                {touchedFields.name && errors.name && (
                                    <p className="mt-2 text-xs text-destructive">{errors.name.message}</p>
                                )}
                            </div>
                             <div>
                                <label htmlFor="email" className="font-mono text-sm uppercase tracking-widest text-muted-foreground block mb-2">
                                    email
                                </label>
                                <input 
                                id="email"
                                type="email"
                                autoComplete="email"
                                required
                               className="w-full bg-secondary2 border border-border px-4 py-3 font-mono text-sm text-primary-foreground placeholder:text-background/50 outline-none focus:border-primary-foreground transition-colors"
                                placeholder="you@company.com"
                                {...register('email')}
                                />
                                {touchedFields.email && errors.email && (
                                    <p className="mt-2 text-xs text-destructive">{errors.email.message}</p>
                                )}

                            </div>
                             <div className="sm:col-span-2">
                                <label htmlFor="subject" className="font-mono text-sm uppercase tracking-widest text-muted-foreground block mt-2">
                                    Subject
                                </label>
                                <input 
                                id="subject"
                                type="text"
                                autoComplete="subject"
                                required
                               className="w-full bg-secondary2 border border-border px-4 py-3 font-mono text-sm text-primary-foreground placeholder:text-background/50 focus:border-primary-foreground transition-colors"
                                placeholder="e.g. Freelance project, full-time role..."
                                {...register('subject')}
                                />
                                {touchedFields.subject && errors.subject && (
                                    <p className="mt-2 text-xs text-destructive">{errors.subject.message}</p>
                                )}

                            </div>
                             <div className="sm:col-span-2">
                            <label htmlFor="message" className="font-mono text-xs uppercase tracking-widest text-muted-foreground block mt-2">
                                Message
                            </label>
                            <textarea
                            id="message"
                                required
                                rows={7}
                                className="w-full bg-secondary2 border border-border px-4 py-3 font-mono text-sm text-primary-foreground placeholder:text-background/50 outline-none focus:border-primary-foreground transition-colors resize-none"
                                placeholder="Tell me about your project, the role, or what you have in mind..."
                                autoComplete="off"
                                 {...register("message")}
                            />
                            {touchedFields.message && errors.message && (
                                <p className="mt-2 text-xs text-destructive">{errors.message.message}</p>
                            )}
                            </div>
                         </div>
                         <HCaptcha
                            sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"  
                            reCaptchaCompat={false}
                            ref={captchaRef}
                            // onVerify={(token) => setValue("h-captcha-response", token)}
                            // {...register("h-captcha-response")}
                        />

                          <button
                            type="submit"
                            className="w-full flex items-center justify-center gap-2 bg-background text-primary font-mono text-xs uppercase tracking-widest py-4 hover:bg-background/80 transition-colors font-semibold"
                            >
                            <Send size={13} /> {isSubmitting ? 'sending...': 'send message'}
                            </button>
                       </form>
                    </div>

                    <div className="lg:col-span-2 space-y-8">
                        <div>
                            <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-5">
                                Direct links
                            </p>
                            <div className="space-y-3">
                                {DIRECT_LINKS.map((D)=>(
                                    <Link
                                    key={D.label} 
                                    href={D.href}
                                    target={D.external ? "_blank": undefined}
                                    rel={D.external ? "noreferrer" : undefined}
                                    className="flex items-center border border-muted-foreground/65 hover:border-border px-6 py-3 transition-all group"
                                    >
                                        <div className="w-8 h-8 flex items-center justify-center mr-2.5">
                                            <span className="text-muted-foreground group-hover:text-shadow-primary-foreground transition-colors">
                                            {D.icon}
                                            </span>
                                        </div>
                                        <div>
                                            <p className="font-mono text-muted-foreground text-xs tracking-widest uppsercase">
                                                {D.label}
                                            </p>
                                            <p className="font-mono text-primary-foreground text-sm">
                                                {D.display}
                                            </p>
                                        </div>

                                    </Link>
                                ))}

                            </div>
                        </div>

                        <div className="mt-8 border border-border p-5">
                           <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-3">
                                Availability
                            </p>
                            <div className="flex items-center gap-2 pt-4">
                             <span className="w-2 h-2 rounded-full bg-primary-foreground" />
                             <span className="font-mono font-bold">Open to Opportunities</span>
                            </div>
                            <div className="mt-4 flex items-center">
                                <MapPin size={12} className="text-muted-foreground" />
                                <span className="font-mono text-sm text-primary-foreground ml-2">
                                    Nairobi, Kenya
                                </span>
                            </div>
                        </div>

                            
                       <div className="mt-8 border border-border p-5">
                            <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-3">
                                Open to
                            </p>
                            {["Full-time roles",  "Freelance contracts",  "Technical consulting", 'Collaborations'
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-2 py-1.5">
                                <span className="w-1 h-1 rounded-full bg-primary-foreground" />
                                <span className="font-mono text-xs text-primary-foreground/70">
                                    {item}
                                </span>
                                </div>
                            ))}
                            <Link
                                href="/contact"
                                className="mt-6 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary-foreground hover:text-primary-foreground/70 transition-colors"
                            >
                                Get in touch <ArrowRight size={12} />
                            </Link>
                            </div> 
                    </div>
                </div>
            </div>
        </div>
   
    )
}