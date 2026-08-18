
import {z} from 'zod'

export const ContactSchema = z.object({

    name:z.string().min(2, 'name should be at least 2 characters')
         .max(50, 'name must be at most 50 characters')
         .regex(/^[\p{L}][\p{L}\s'-]*[\p{L}]$/u,  'Name can only contain letters, spaces, hyphens, and apostrophes'),
    email: z.email()
           .regex(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, 'Invalid email format'),
    subject: z.string()
             .min(3, 'Subject must be at least 3 characters')
             .max(100, 'Subject must be at most 100 characters'),
    message: z.string().min(20, 'Message must be at least 20 characters long')
             .max(1000, 'message should be atmost 1000 characters long'),
    // "h-captcha-response": z.string().min(1, "Please complete the captcha"),

           
})

export type ContactInfer = z.output<typeof ContactSchema>