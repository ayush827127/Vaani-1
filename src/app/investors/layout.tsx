import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investors",
  description: "Investor information for Vaani.",
  alternates: { canonical: "/investors" },
  robots: { index: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
