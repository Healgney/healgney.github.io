import type { ComponentPropsWithoutRef } from 'react';

type ButtonProps = ComponentPropsWithoutRef<'a'> & {
  tone?: 'cyan' | 'violet';
};

export function GlowButton({ tone = 'cyan', className = '', children, ...rest }: ButtonProps) {
  const toneClasses =
    tone === 'cyan'
      ? 'border-accent-cyan/40 bg-accent-cyan/10 text-accent-cyan hover:bg-accent-cyan/15 hover:shadow-glow'
      : 'border-accent-violet/40 bg-accent-violet/10 text-accent-violet hover:bg-accent-violet/15 hover:shadow-glow-violet';

  return (
    <a
      {...rest}
      className={`inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium transition ${toneClasses} ${className}`}
    >
      {children}
    </a>
  );
}
