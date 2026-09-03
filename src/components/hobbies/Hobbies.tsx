import { motion } from 'framer-motion';
import {
  Camera,
  Headphones,
  Snowflake,
  Waves,
  Sparkles,
  ArrowUpRight,
  Flame,
} from 'lucide-react';
import { profile } from '@/data/profile';

// Custom Basketball Icon for clean representation
function BasketballIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M5 5a10 10 0 0 0 14 14" />
      <path d="M19 5a10 10 0 0 0-14 14" />
      <line x1="2" y1="12" x2="22" y2="12" />
    </svg>
  );
}

export function Hobbies() {
  return (
    <section
      id="hobbies"
      aria-labelledby="hobbies-heading"
      className="py-14 sm:py-16 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto"
    >
      <div className="space-y-7">
        {/* Section Header */}
        <div className="space-y-2.5 sm:space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>OUTSIDE THE LAB</span>
          </div>
          <h2
            id="hobbies-heading"
            className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900"
          >
            Beyond Work
          </h2>
          <p className="text-slate-600 max-w-2xl text-sm sm:text-base">
            Balancing algorithm research with athletic drive, mountain adventures, visual framing, and rhythmic flow.
          </p>
        </div>

        {/* Compact Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4.5">
          {/* Card 1: Basketball & Swishly (Spans 2 columns on lg/md) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="md:col-span-2 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-amber-50/60 via-white to-orange-50/40 border border-slate-200/90 p-5 sm:p-5.5 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Masked Background Photo: Focused on mid-air jump shooter & ball */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl sm:rounded-3xl z-0">
              <img
                src="/hobbies/basketball.jpg"
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-[80%_0%] scale-90 sm:scale-95 origin-top-right opacity-50 group-hover:opacity-75 transition-all duration-500 filter saturate-[0.85] contrast-[0.98] group-hover:saturate-100"
                style={{
                  maskImage:
                    'linear-gradient(to right, transparent 0%, transparent 18%, rgba(0, 0, 0, 0.45) 42%, rgba(0, 0, 0, 1) 75%)',
                  WebkitMaskImage:
                    'linear-gradient(to right, transparent 0%, transparent 18%, rgba(0, 0, 0, 0.45) 42%, rgba(0, 0, 0, 1) 75%)',
                }}
              />
            </div>

            <div className="space-y-2.5 relative z-10">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-600 group-hover:scale-105 transition-transform backdrop-blur-xs">
                    <BasketballIcon className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                    Basketball & Shot Mechanics
                  </h3>
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-100/80 border border-amber-200 text-amber-800 text-[11px] font-mono font-semibold shrink-0">
                  <Flame className="w-3 h-3 text-amber-600" />
                  FOUNDER
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
                Fascinated by shooting biomechanics and court spatial vision. Inspired founding <span className="font-semibold text-slate-800">Swishly</span>—applying mobile computer vision to analyze shot arcs and release mechanics without wearables.
              </p>
            </div>

            <div className="pt-3 flex flex-wrap items-center justify-between gap-2 relative z-10 border-t border-slate-100/90 mt-3">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-white/90 border border-slate-200/80 text-slate-600 shadow-xs">
                  #CourtVision
                </span>
                <span className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-white/90 border border-slate-200/80 text-slate-600 shadow-xs">
                  #SwishlyBuilder
                </span>
              </div>

              <a
                href={profile.venture.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-amber-700 hover:text-amber-800 transition-colors"
              >
                <span>Swishly.app</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </motion.div>

          {/* Card 2: Photography & Visual Storytelling */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="rounded-2xl sm:rounded-3xl bg-white/95 border border-slate-200/90 p-5 sm:p-5.5 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Masked Background Photo: Focused on Canon 5D camera body & telephoto lens */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl sm:rounded-3xl z-0">
              <img
                src="/hobbies/photography.jpg"
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-[75%_18%] opacity-50 group-hover:opacity-75 transition-all duration-500 filter saturate-[0.85] contrast-[0.98] group-hover:saturate-100"
                style={{
                  maskImage:
                    'linear-gradient(to right, transparent 0%, transparent 18%, rgba(0, 0, 0, 0.45) 42%, rgba(0, 0, 0, 1) 75%)',
                  WebkitMaskImage:
                    'linear-gradient(to right, transparent 0%, transparent 18%, rgba(0, 0, 0, 0.45) 42%, rgba(0, 0, 0, 1) 75%)',
                }}
              />
            </div>

            <div className="space-y-2.5 relative z-10">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 group-hover:scale-105 transition-transform backdrop-blur-xs">
                    <Camera className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-indigo-700 transition-colors">
                    Photography
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-slate-400 font-semibold uppercase">
                  Visual
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Focusing on geometry, urban contrasts, and ephemeral light. Visual framing sharpens computer vision intuition.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100/90 mt-3 flex flex-wrap gap-1.5 relative z-10">
              <span className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-50/90 border border-slate-200/80 text-slate-600">
                #StreetLens
              </span>
              <span className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-50/90 border border-slate-200/80 text-slate-600">
                #Framing
              </span>
            </div>
          </motion.div>

          {/* Card 3: Snowboarding / Skiing */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="rounded-2xl sm:rounded-3xl bg-white/95 border border-slate-200/90 p-5 sm:p-5.5 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Masked Background Photo: Focused on snowboard carving rider right of text & snow spray */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl sm:rounded-3xl z-0">
              <img
                src="/hobbies/snowboarding.jpg"
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-[85%_40%] opacity-50 group-hover:opacity-75 transition-all duration-500 filter saturate-[0.85] contrast-[0.98] group-hover:saturate-100"
                style={{
                  maskImage:
                    'linear-gradient(to right, transparent 0%, transparent 18%, rgba(0, 0, 0, 0.45) 42%, rgba(0, 0, 0, 1) 75%)',
                  WebkitMaskImage:
                    'linear-gradient(to right, transparent 0%, transparent 18%, rgba(0, 0, 0, 0.45) 42%, rgba(0, 0, 0, 1) 75%)',
                }}
              />
            </div>

            <div className="space-y-2.5 relative z-10">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-cyan-50 border border-cyan-100 text-cyan-600 group-hover:scale-105 transition-transform backdrop-blur-xs">
                    <Snowflake className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
                    Snowboarding / Skiing
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-slate-400 font-semibold uppercase">
                  Winter
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Carving powder ridges and steep mountain lines. Finding pure flow state, edge control, and mountain speed.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100/90 mt-3 flex flex-wrap gap-1.5 relative z-10">
              <span className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-50/90 border border-slate-200/80 text-slate-600">
                #Snowboarding
              </span>
              <span className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-50/90 border border-slate-200/80 text-slate-600">
                #PowderSnow
              </span>
            </div>
          </motion.div>

          {/* Card 4: Kayaking */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.15 }}
            className="rounded-2xl sm:rounded-3xl bg-white/95 border border-slate-200/90 p-5 sm:p-5.5 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Masked Background Photo: Scaled down and shifted down to show person, blue vest & paddle */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl sm:rounded-3xl z-0">
              <img
                src="/hobbies/kayaking.jpg"
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-[72%_42%] scale-90 sm:scale-95 origin-center opacity-50 group-hover:opacity-75 transition-all duration-500 filter saturate-[0.85] contrast-[0.98] group-hover:saturate-100"
                style={{
                  maskImage:
                    'linear-gradient(to right, transparent 0%, transparent 18%, rgba(0, 0, 0, 0.45) 42%, rgba(0, 0, 0, 1) 75%)',
                  WebkitMaskImage:
                    'linear-gradient(to right, transparent 0%, transparent 18%, rgba(0, 0, 0, 0.45) 42%, rgba(0, 0, 0, 1) 75%)',
                }}
              />
            </div>

            <div className="space-y-2.5 relative z-10">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 group-hover:scale-105 transition-transform backdrop-blur-xs">
                    <Waves className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    Kayaking
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-slate-400 font-semibold uppercase">
                  Outdoor
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Paddling across open waterways. A rhythmic test of physical endurance, calm waters, and outdoor mindfulness.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100/90 mt-3 flex flex-wrap gap-1.5 relative z-10">
              <span className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-50/90 border border-slate-200/80 text-slate-600">
                #OpenWater
              </span>
              <span className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-50/90 border border-slate-200/80 text-slate-600">
                #Endurance
              </span>
            </div>
          </motion.div>

          {/* Card 5: Hip-Hop & Audio Beats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.2 }}
            className="rounded-2xl sm:rounded-3xl bg-white/95 border border-slate-200/90 p-5 sm:p-5.5 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Masked Background Photo: Shifted down to center red lettering and silhouette */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl sm:rounded-3xl z-0">
              <img
                src="/hobbies/hiphop.jpg"
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-[75%_42%] opacity-50 group-hover:opacity-75 transition-all duration-500 filter saturate-[0.85] contrast-[0.98] group-hover:saturate-100"
                style={{
                  maskImage:
                    'linear-gradient(to right, transparent 0%, transparent 18%, rgba(0, 0, 0, 0.45) 42%, rgba(0, 0, 0, 1) 75%)',
                  WebkitMaskImage:
                    'linear-gradient(to right, transparent 0%, transparent 18%, rgba(0, 0, 0, 0.45) 42%, rgba(0, 0, 0, 1) 75%)',
                }}
              />
            </div>

            <div className="space-y-2.5 relative z-10">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-rose-50 border border-rose-100 text-rose-600 group-hover:scale-105 transition-transform backdrop-blur-xs">
                    <Headphones className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-rose-700 transition-colors">
                    Hip-Hop & Beats
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-slate-400 font-semibold uppercase">
                  Audio
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Boom-bap grooves and rhythmic vinyl loops powering deep late-night focus and coding sessions.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100/90 mt-3 flex flex-wrap gap-1.5 relative z-10">
              <span className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-50/90 border border-slate-200/80 text-slate-600">
                #BoomBap
              </span>
              <span className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-50/90 border border-slate-200/80 text-slate-600">
                #FocusFlow
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
