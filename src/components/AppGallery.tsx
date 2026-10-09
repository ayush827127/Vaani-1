import Image from 'next/image';
import type { AppScreen } from '@/lib/screens';

type Props = {
  eyebrow?: string;
  title: string;
  screens: AppScreen[];
};

/** Horizontal, swipeable strip of real app screens. */
export default function AppGallery({ eyebrow = "In the App", title, screens }: Props) {
  return (
    <section className="py-20 relative border-t border-slate-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold text-blue-500 tracking-widest uppercase mb-3">{eyebrow}</h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">{title}</h3>
        </div>
        <ul className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 hide-scrollbar" tabIndex={0} aria-label={title}>
          {screens.map((s) => (
            <li key={s.src} className="snap-center shrink-0 w-[260px] sm:w-[300px]">
              <Image
                src={s.src}
                alt={s.alt}
                width={s.width}
                height={s.height}
                sizes="300px"
                className="w-full h-auto rounded-3xl border border-slate-200 dark:border-white/10 shadow-xl"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
