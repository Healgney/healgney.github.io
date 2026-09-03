import { ArrowUpRight, Github, Mail } from 'lucide-react';
import { profile } from '@/data/profile';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden px-4 pb-20 pt-28 sm:px-6 sm:pb-24 sm:pt-32 lg:flex lg:min-h-[92svh] lg:items-center lg:px-10 lg:pb-20 lg:pt-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          background:
            'radial-gradient(circle at 18% 42%, rgba(184, 151, 103, 0.12), transparent 30%), radial-gradient(circle at 82% 35%, rgba(6, 182, 212, 0.09), transparent 32%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-[#fafbfc]"
      />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-y-10 lg:grid-cols-[minmax(18rem,0.78fr)_minmax(0,1.22fr)] lg:items-center lg:gap-x-16 xl:gap-x-24">
        <figure className="order-2 mx-auto w-full max-w-2xl lg:order-1 lg:mx-0 lg:w-[340px] lg:max-w-full lg:translate-y-7">
          <div className="rounded-[2rem] bg-gradient-to-br from-[#d8c9ae] via-[#61584d] to-[#c6b28d] p-px shadow-[0_24px_60px_-32px_rgba(30,23,14,0.5)] lg:rounded-[50%] lg:p-[5px] lg:shadow-[0_32px_76px_-30px_rgba(30,23,14,0.62)]">
            <div className="overflow-hidden rounded-[calc(2rem-1px)] bg-[#27231f] ring-1 ring-white/45 lg:rounded-[50%]">
              <img
                src={profile.heroImage.src}
                alt={profile.heroImage.alt}
                width={profile.heroImage.width}
                height={profile.heroImage.height}
                loading="eager"
                {...{ fetchpriority: 'high' }}
                decoding="async"
                sizes="(min-width: 1024px) 340px, calc(100vw - 2rem)"
                className="aspect-[4/3] w-full object-cover object-[50%_28%] lg:aspect-[2/3] lg:object-center"
              />
            </div>
          </div>
        </figure>

        <div className="order-1 max-w-2xl space-y-7 lg:order-2 lg:-translate-y-5 lg:space-y-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.18em] text-slate-400 sm:text-sm">
              <span>{profile.name}</span>
              <span aria-hidden="true" className="text-slate-300">
                ·
              </span>
              <span>{profile.chineseName}</span>
            </div>

            <h1 className="font-serif text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-7xl">
              {profile.displayName}
            </h1>

            <p className="text-lg font-semibold tracking-[-0.01em] text-slate-700 sm:text-xl">
              {profile.tagline}
            </p>
          </div>

          <p className="max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            {profile.bio}
          </p>

          <div className="space-y-3 border-l border-slate-300 pl-4">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-slate-500 sm:text-[13px]">
              {profile.heroMeta}
            </p>

            <p className="text-sm leading-6 text-slate-500">
              Also building{' '}
              <a
                href={profile.venture.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1 font-medium text-slate-700 underline decoration-[#b89767]/55 underline-offset-4 transition-colors hover:text-cyan-700 hover:decoration-cyan-500 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2"
              >
                <span>{profile.venture.name}</span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>{' '}
              — an AI basketball training app.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-400 hover:bg-white hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2"
            >
              <Mail aria-hidden="true" className="h-4 w-4 text-slate-500" />
              <span>Email</span>
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-400 hover:bg-white hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2"
            >
              <Github aria-hidden="true" className="h-4 w-4 text-slate-600" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
