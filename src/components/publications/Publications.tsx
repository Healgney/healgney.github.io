import { useMemo, useState } from 'react';
import { Section } from '@/components/layout/Section';
import { profile } from '@/data/profile';
import { PubCard } from './PubCard';
import { PubFilter, type FilterKind } from './PubFilter';

export function Publications() {
  const [filter, setFilter] = useState<FilterKind>('all');

  const items = useMemo(() => {
    const list =
      filter === 'all'
        ? profile.publications
        : profile.publications.filter((p) => p.kind === filter);
    return [...list].sort((a, b) => b.year - a.year);
  }, [filter]);

  return (
    <Section
      id="publications"
      eyebrow="// publications"
      title="Writing, papers, and live demos."
      description="Peer-reviewed work, longer-form writing, and things you can actually click."
    >
      <div className="mb-6">
        <PubFilter value={filter} onChange={setFilter} />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <PubCard key={p.title} pub={p} />
        ))}
      </div>
      {items.length === 0 && (
        <p className="text-sm text-mute">Nothing here yet — try another filter.</p>
      )}
    </Section>
  );
}
