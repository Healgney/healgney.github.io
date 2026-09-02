import { forwardRef } from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import type { Project } from '@/types/profile';
import { Tag } from '@/components/ui/Tag';

const accentRing = {
  cyan: 'before:bg-accent-cyan/70',
  violet: 'before:bg-accent-violet/70',
  amber: 'before:bg-accent-amber/70',
} as const;

interface Props {
  project?: Project;
  index?: number;
  total?: number;
  variant?: 'cover' | 'back' | 'content';
}

export const ProjectPage = forwardRef<HTMLDivElement, Props>(function ProjectPage(
  { project, index, total, variant = 'content' },
  ref,
) {
  if (variant === 'cover') {
    return (
      <div
        ref={ref}
        className="relative h-full w-full overflow-hidden rounded-l-lg border border-line bg-gradient-to-br from-elev to-base p-8"
      >
        <div className="absolute inset-0 bg-grid-line opacity-[0.08]" style={{ backgroundSize: '36px 36px' }} />
        <div className="relative flex h-full flex-col justify-between">
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-mute">
            // selected work
          </div>
          <div>
            <h3 className="text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              Projects
            </h3>
            <p className="mt-3 max-w-[28ch] text-sm text-mute">
              Tap the corner of the page or drag to flip. A small portfolio of things I shipped.
            </p>
          </div>
          <div className="font-mono text-[11px] text-mute">{total} entries</div>
        </div>
      </div>
    );
  }

  if (variant === 'back') {
    return (
      <div
        ref={ref}
        className="relative h-full w-full overflow-hidden rounded-r-lg border border-line bg-gradient-to-tl from-elev to-base p-8"
      >
        <div className="absolute inset-0 bg-grid-line opacity-[0.06]" style={{ backgroundSize: '36px 36px' }} />
        <div className="relative flex h-full flex-col items-center justify-center text-center">
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-mute">// fin</div>
          <p className="mt-3 max-w-[28ch] text-sm text-mute">
            More on GitHub. Or scroll on for writing and contact.
          </p>
        </div>
      </div>
    );
  }

  if (!project) return <div ref={ref} className="h-full w-full bg-base" />;
  const accent = project.accent ?? 'cyan';

  return (
    <div ref={ref} className="h-full w-full bg-base">
      <div
        className={`relative flex h-full w-full flex-col gap-5 border border-line bg-elev p-6 sm:p-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[3px] ${accentRing[accent]}`}
      >
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">
            {project.title}
          </h3>
          {typeof index === 'number' && typeof total === 'number' && (
            <span className="font-mono text-[11px] text-mute">
              {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <Tag key={t} tone={accent}>
              {t}
            </Tag>
          ))}
        </div>

        <FieldRow label="Problem" value={project.problem} />
        <FieldRow label="Method" value={project.method} />
        <FieldRow label="Result" value={project.result} highlight />

        {project.links && project.links.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-2 pt-2">
            {project.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 rounded-md border border-line bg-white/[.02] px-2.5 py-1 text-xs text-ink/85 transition hover:border-accent-cyan/40 hover:text-ink"
              >
                {l.label}
                <ExternalLink size={12} strokeWidth={2} />
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
});

function FieldRow({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div>
      <div className="mb-1 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-mute">
        <ArrowUpRight size={11} strokeWidth={2} className="text-accent-cyan/70" />
        {label}
      </div>
      <p
        className={`text-[14.5px] leading-relaxed ${
          highlight ? 'text-ink' : 'text-ink/80'
        }`}
      >
        {value}
      </p>
    </div>
  );
}
