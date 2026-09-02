interface TagProps {
  children: React.ReactNode;
  tone?: 'cyan' | 'violet' | 'amber' | 'mute';
}

const toneClass: Record<NonNullable<TagProps['tone']>, string> = {
  cyan: 'border-accent-cyan/30 text-accent-cyan/90 bg-accent-cyan/5',
  violet: 'border-accent-violet/30 text-accent-violet/90 bg-accent-violet/5',
  amber: 'border-accent-amber/30 text-accent-amber/90 bg-accent-amber/5',
  mute: 'border-line text-mute bg-white/[.02]',
};

export function Tag({ children, tone = 'mute' }: TagProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-medium tracking-wide ${toneClass[tone]}`}
    >
      {children}
    </span>
  );
}
