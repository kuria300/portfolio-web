import { Star } from "lucide-react"

export default function StarRow({count, maxStars=5}: {count: number, maxStars?: number}) {

    const validCount = Math.max(0, Math.min(count, maxStars))
    return(
     
        <div className="flex items-center gap-1">
        {Array.from({length: maxStars}).map((_, index)=>{
            const isFilled = index < validCount

            return (
             <Star
                key={index}
                size={12}
                className={
                isFilled 
                    ? 'fill-primary-foreground text-primary-foreground'  
                    : 'text-accent fill-transparent'
                }
            />
            )

        })}
        </div>

    )
}