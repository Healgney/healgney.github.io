import { ExternalLink, FileText, Sparkles, BookOpen } from 'lucide-react';
import type { Publication } from '@/types/profile';
import { Tag } from '@/components/ui/Tag';

const iconFor = {
  paper: FileText,
  blog: BookOpen,
  demo: Sparkles,
} as const;

const toneFor = {
  paper: 'cyan',
  blog: 'mute',
  demo: 'violet',
} as const;

export function PubCard({ pub }: { pub: Publication }) {
  const Icon = iconFor[pub.kind];
  const tone = toneFor[pub.kind] as 'cyan' | 'mute' | 'violet';

  const body = (
    <div className="group flex h-full flex-col gap-3 rounded-xl border border-line bg-elev/70 p-5 transition hover:border-accent-cyan/35 hover:bg-elev hover:shadow-glow">
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-mute">
          <Icon size={12} strokeWidth={2} className="text-accent-cyan/80" />
          {pub.kind}
          {pub.venue && <span className="text-accent-violet/80">· {pub.venue}</span>}
        </div>
        <span className="font-mono text-[11px] text-mute">{pub.year}</span>
      </div>

      <h3 className="text-[15.5px] font-semibold leading-snug text-ink group-hover:text-ink">
        {pub.title}
      </h3>

      {pub.authors && (
        <p className="text-[12.5px] text-mute">{pub.authors}</p>
      )}

      <p className="text-[14px] leading-relaxed text-ink/80">{pub.summary}</p>

      <div className="mt-auto flex items-center justify-between pt-1">
        <div className="flex flex-wrap gap-1.5">
          {pub.badges?.map((b) => (
            <Tag key={b} tone={tone}>
              {b}
            </Tag>
          ))}
        </div>
        {pub.href && (
          <span className="inline-flex items-center gap-1 text-xs text-accent-cyan/85 transition group-hover:translate-x-0.5">
            open <ExternalLink size={12} strokeWidth={2} />
          </span>
        )}
      </div>
    </div>
  );

  if (!pub.href) return body;
  return (
    <a href={pub.href} target="_blank" rel="noreferrer noopener" className="block h-full">
      {body}
    </a>
  );
}
