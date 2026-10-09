import { Play } from 'lucide-react';
import { SITE } from '@/lib/site';

type Props = {
  className?: string;
  label?: string;
};

export function PlayStoreButton({ className = '', label = 'Download on Google Play' }: Props) {
  return (
    <a
      href={SITE.playStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3.5 text-base transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 ${className}`}
    >
      <Play className="w-5 h-5 fill-current" aria-hidden="true" />
      {label}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
