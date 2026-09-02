import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, eyebrow, title, description, children, className = '' }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-20 border-t border-line py-20 sm:py-28 ${className}`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-10 max-w-3xl"
        >
          {eyebrow && (
            <div className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-accent-cyan/80">
              {eyebrow}
            </div>
          )}
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{title}</h2>
          {description && (
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-mute">{description}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
