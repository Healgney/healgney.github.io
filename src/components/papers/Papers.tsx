import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, CheckCircle2, Layers, Cpu } from 'lucide-react';
import { profile } from '@/data/profile';

export function Publications() {
  return (
    <section id="publications" className="py-20 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700 dark:bg-neutral-900 dark:border-white/10 dark:text-neutral-300">
            <BookOpen className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>PUBLICATIONS & PEER REVIEW</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Publications
          </h2>
          <p className="text-slate-600 dark:text-neutral-400 max-w-2xl text-base">
            First-author research in leading top-tier multimedia and AI conferences.
          </p>
        </div>

        {/* Papers List */}
        <div className="space-y-8">
          {profile.papers.map((paper, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative p-6 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all space-y-6 group dark:bg-[#121212] dark:border-white/10 dark:hover:border-cyan-500/40 dark:shadow-none"
            >
              {/* Badges & Meta */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-slate-100 dark:border-white/10">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs font-mono border border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800/60">
                    {paper.role}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 font-bold text-xs font-mono border border-cyan-200 dark:bg-cyan-950/60 dark:text-cyan-300 dark:border-cyan-800/60">
                    {paper.venue} ({paper.venueFull})
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 font-mono text-xs dark:bg-neutral-900 dark:text-neutral-400">
                    {paper.year}
                  </span>
                </div>

                <a
                  href={`https://arxiv.org/abs/${paper.arxivId.replace('arXiv:', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-mono text-xs transition dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-300"
                >
                  <span>{paper.arxivId}</span>
                  <ExternalLink className="w-3 h-3 text-slate-500 dark:text-neutral-400" />
                </a>
              </div>

              <div
                className={
                  paper.thumbnail
                    ? 'grid gap-6 xl:grid-cols-[minmax(24rem,1.25fr)_minmax(0,1.45fr)] xl:items-start'
                    : 'space-y-6'
                }
              >
                {paper.thumbnail && (
                  <figure className="self-start overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-2 shadow-sm dark:border-white/10 dark:bg-black/60 dark:shadow-none">
                    <img
                      src={paper.thumbnail}
                      alt={paper.thumbnailAlt ?? `${paper.title} thumbnail`}
                      width={3413}
                      height={1920}
                      loading="lazy"
                      decoding="async"
                      className="h-auto w-full rounded-xl object-contain"
                    />
                  </figure>
                )}

                <div className="space-y-5">
                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-snug group-hover:text-cyan-700 dark:group-hover:text-cyan-400 transition-colors">
                    {paper.title}
                  </h3>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {paper.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-50 text-slate-600 border border-slate-200/80 dark:bg-neutral-900 dark:text-neutral-300 dark:border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Compact research summary */}
                  <div className="divide-y divide-slate-200/80 overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-50/70 dark:divide-white/10 dark:border-white/10 dark:bg-neutral-950/60">
                    <div className="grid gap-2 p-2.5 sm:grid-cols-[7.5rem_1fr] sm:gap-3">
                      <div className="flex items-center gap-2 text-[11px] font-mono font-bold text-amber-700 dark:text-amber-400">
                        <Layers className="h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400" />
                        <span>PROBLEM</span>
                      </div>
                      <p className="text-xs leading-relaxed text-slate-600 dark:text-neutral-400">
                        {paper.problemIdea}
                      </p>
                    </div>

                    <div className="grid gap-2 p-2.5 sm:grid-cols-[7.5rem_1fr] sm:gap-3">
                      <div className="flex items-center gap-2 text-[11px] font-mono font-bold text-cyan-700 dark:text-cyan-400">
                        <Cpu className="h-4 w-4 shrink-0 text-cyan-600 dark:text-cyan-400" />
                        <span>METHOD</span>
                      </div>
                      <p className="text-xs leading-relaxed text-slate-600 dark:text-neutral-400">
                        {paper.method}
                      </p>
                    </div>

                    <div className="grid gap-2 bg-emerald-50/40 dark:bg-emerald-950/30 p-2.5 sm:grid-cols-[7.5rem_1fr] sm:gap-3">
                      <div className="flex items-center gap-2 text-[11px] font-mono font-bold text-emerald-800 dark:text-emerald-300">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                        <span>RESULT</span>
                      </div>
                      <p className="text-xs font-medium leading-relaxed text-slate-700 dark:text-neutral-200">
                        {paper.result}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
