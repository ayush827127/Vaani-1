import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features",
  alternates: { canonical: "/features" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
