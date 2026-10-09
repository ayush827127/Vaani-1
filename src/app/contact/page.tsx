import type { Metadata } from 'next';
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { SITE, buildWhatsAppUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: "Contact & Support",
  description: "Contact the Vaani team by email, phone or WhatsApp for help with the Vaani billing app.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const items = [
    { icon: Mail, label: "Email", text: SITE.email, href: `mailto:${SITE.email}` },
    { icon: Phone, label: "Phone", text: SITE.phoneDisplay, href: SITE.phoneHref },
    { icon: MessageCircle, label: "WhatsApp", text: "Message us on WhatsApp", href: buildWhatsAppUrl("Hi Vaani team, I need help with the Vaani billing app.") },
  ];

  return (
    <main className="px-4 sm:px-6 lg:px-8 py-14 md:py-20 max-w-3xl mx-auto w-full">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">Contact &amp; support</h1>
      <p className="mt-4 text-lg text-slate-700 dark:text-slate-300">Questions about the app or a problem with a bill? Reach us any of these ways.</p>

      <ul className="mt-10 space-y-4">
        {items.map(({ icon: Icon, label, text, href }) => (
          <li key={label}>
            <a
              href={href}
              {...(label === "WhatsApp" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="flex items-center gap-4 rounded-2xl border border-slate-200 dark:border-white/10 p-5 bg-white dark:bg-white/[0.03] hover:border-blue-500 transition-colors"
            >
              <span className="w-11 h-11 rounded-xl bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm text-slate-600 dark:text-slate-400">{label}</span>
                <span className="block font-semibold text-slate-900 dark:text-white break-all">{text}</span>
              </span>
            </a>
          </li>
        ))}
        <li className="flex items-center gap-4 rounded-2xl border border-slate-200 dark:border-white/10 p-5 bg-white dark:bg-white/[0.03]">
          <span className="w-11 h-11 rounded-xl bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 flex items-center justify-center shrink-0">
            <MapPin className="w-5 h-5" aria-hidden="true" />
          </span>
          <span>
            <span className="block text-sm text-slate-600 dark:text-slate-400">Location</span>
            <span className="block font-semibold text-slate-900 dark:text-white">{SITE.address}</span>
          </span>
        </li>
      </ul>
    </main>
  );
}
