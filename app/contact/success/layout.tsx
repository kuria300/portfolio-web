import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Message Sent",
  robots: { index: false, follow: false },
};

export default function ContactSuccessLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
