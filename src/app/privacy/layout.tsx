import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How the Vaani billing app and website handle your information.",
  alternates: { canonical: "/privacy" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
