import type { Metadata } from 'next';
import { PlayStoreButton } from '@/components/PlayStoreButton';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: "About Vaani",
  description: "Vaani was started by Ayush Gupta in Bihar to make billing simpler for small shopkeepers in India.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="px-4 sm:px-6 lg:px-8 py-14 md:py-20 max-w-3xl mx-auto w-full">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">About Vaani</h1>
      <div className="mt-8 space-y-5 text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
        <p>
          Vaani was started by {SITE.founderName}, who grew up helping run his father&apos;s shop and saw how much time billing and
          record-keeping take at a busy counter.
        </p>
        <p>
          The idea is simple: billing software for small shopkeepers should be quick to use, work on an ordinary Android phone, and let you
          bill by voice or by hand.
        </p>
        <p>
          Vaani is now available on Google Play. We are based in {SITE.addressShort} and read every message sent through the{' '}
          <a href="/contact" className="text-blue-700 dark:text-blue-300 underline">Contact page</a>.
        </p>
      </div>
      <div className="mt-10">
        <PlayStoreButton />
      </div>
    </main>
  );
}
