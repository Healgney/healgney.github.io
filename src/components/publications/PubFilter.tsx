import type { PublicationKind } from '@/types/profile';

export type FilterKind = 'all' | PublicationKind;

const buttons: { key: FilterKind; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'paper', label: 'Papers' },
  { key: 'blog', label: 'Blog' },
  { key: 'demo', label: 'Demos' },
];

export function PubFilter({
  value,
  onChange,
}: {
  value: FilterKind;
  onChange: (next: FilterKind) => void;
}) {
  return (
    <div className="inline-flex rounded-md border border-line bg-elev/60 p-1 font-mono text-[12px]">
      {buttons.map((b) => (
        <button
          key={b.key}
          onClick={() => onChange(b.key)}
          className={`rounded-[5px] px-3 py-1 transition ${
            value === b.key
              ? 'bg-white/[.05] text-ink'
              : 'text-mute hover:text-ink'
          }`}
          aria-pressed={value === b.key}
        >
          {b.label}
        </button>
      ))}
    </div>
  );
}
