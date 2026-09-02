import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { profile } from '@/data/profile';
import { IconLink } from '@/components/ui/IconLink';
import { GlowButton } from '@/components/ui/GlowButton';

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};

export function HeroContent() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={stagger}
      className="relative z-10 mx-auto max-w-6xl px-5 pb-10 pt-32 sm:px-8 sm:pt-40"
    >
      <motion.div
        variants={item}
        className="inline-flex items-center gap-2 rounded-full border border-line bg-elev/60 px-3 py-1 font-mono text-[11px] tracking-wider text-mute backdrop-blur-sm"
      >
        <span className="inline-block h-1.5 w-1.5 animate-pulse-slow rounded-full bg-accent-cyan" />
        AVAILABLE FOR RESEARCH COLLABORATIONS
      </motion.div>

      <motion.h1
        variants={item}
        className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl"
      >
        {profile.name}
        <span className="ml-2 inline-block h-[0.9em] w-[0.5ch] -translate-y-[0.05em] animate-blink bg-accent-cyan align-middle" />
      </motion.h1>

      <motion.p variants={item} className="mt-4 max-w-2xl text-lg text-ink/80 sm:text-xl">
        <span className="bg-gradient-to-r from-accent-cyan via-ink to-accent-violet bg-clip-text text-transparent">
          {profile.tagline}
        </span>
      </motion.p>

      <motion.p variants={item} className="mt-4 max-w-xl text-[15px] leading-relaxed text-mute">
        {profile.bio}
      </motion.p>

      <motion.div variants={item} className="mt-6 inline-flex items-center gap-2 text-sm text-mute">
        <MapPin size={14} strokeWidth={1.75} />
        <span>{profile.location}</span>
      </motion.div>

      <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
        <GlowButton href="#projects" tone="cyan">
          See projects
          <ArrowRight size={15} strokeWidth={2} />
        </GlowButton>
        <GlowButton href="#contact" tone="violet">
          Get in touch
        </GlowButton>
      </motion.div>

      <motion.div variants={item} className="mt-6 flex flex-wrap gap-2">
        {profile.socials.map((s) => (
          <IconLink key={s.kind} link={s} />
        ))}
      </motion.div>
    </motion.div>
  );
}
