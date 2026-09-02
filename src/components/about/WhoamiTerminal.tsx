import { useEffect, useRef, useState } from 'react';
import { profile } from '@/data/profile';
import { useReducedMotion } from '@/hooks/useReducedMotion';

type Line = { prompt?: string; content: string; tone?: 'ink' | 'mute' | 'cyan' | 'violet' };

function buildLines(): Line[] {
  const { about, name, tagline, location } = profile;
  return [
    { prompt: '$', content: 'whoami', tone: 'cyan' },
    { content: `${name} — ${tagline}`, tone: 'ink' },
    { content: `location: ${location}`, tone: 'mute' },
    { content: '', tone: 'mute' },
    { prompt: '$', content: 'cat ~/.research/interests', tone: 'cyan' },
    ...about.interests.map<Line>((s) => ({ content: `• ${s}`, tone: 'ink' })),
    { content: '', tone: 'mute' },
    { prompt: '$', content: 'ls ~/skills | column', tone: 'cyan' },
    { content: about.skills.join('  '), tone: 'violet' },
    { content: '', tone: 'mute' },
    { prompt: '$', content: 'tail -n 1 ~/.now', tone: 'cyan' },
    { content: about.currentFocus, tone: 'ink' },
    { prompt: '$', content: '_', tone: 'cyan' },
  ];
}

const toneClass = {
  ink: 'text-ink/90',
  mute: 'text-mute',
  cyan: 'text-accent-cyan',
  violet: 'text-accent-violet',
} as const;

export function WhoamiTerminal() {
  const lines = buildLines();
  const reduced = useReducedMotion();
  const [visibleCount, setVisibleCount] = useState(reduced ? lines.length : 0);
  const ref = useRef<HTMLDivElement | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            let i = 0;
            const tick = () => {
              i += 1;
              setVisibleCount(i);
              if (i < lines.length) setTimeout(tick, 90);
            };
            tick();
          }
        });
      },
      { threshold: 0.25 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [lines.length, reduced]);

  return (
    <div
      ref={ref}
      className="overflow-hidden rounded-xl border border-line bg-elev/80 shadow-glow backdrop-blur-sm"
    >
      <div className="flex items-center gap-2 border-b border-line bg-base/60 px-4 py-2 font-mono text-[11px] text-mute">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3">~/{profile.handle} — zsh</span>
      </div>
      <pre className="m-0 max-h-[480px] overflow-auto px-5 py-4 font-mono text-[13px] leading-relaxed">
        {lines.slice(0, visibleCount).map((l, i) => (
          <div key={i} className="whitespace-pre-wrap">
            {l.prompt && <span className="text-accent-cyan">{l.prompt}</span>}
            {l.prompt && ' '}
            <span className={toneClass[l.tone ?? 'ink']}>{l.content}</span>
            {i === visibleCount - 1 && !reduced && (
              <span className="ml-0.5 inline-block h-[1em] w-[0.5ch] -translate-y-[0.05em] animate-blink bg-accent-cyan align-middle" />
            )}
          </div>
        ))}
      </pre>
    </div>
  );
}
