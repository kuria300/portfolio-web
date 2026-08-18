'use server'

import { ContactInfer, ContactSchema } from "../ContactSchema";


export async function ContactAction(data: ContactInfer):Promise<{
  success: boolean;
  data?: ContactInfer;
  error?: string;
}>{

    const parsed = ContactSchema.safeParse(data)

    if(!parsed.success){
    return {
      success: false,
      error: "Invalid data. Please check your inputs.",
    };
    }

   return { success: true, data: parsed.data}
}
