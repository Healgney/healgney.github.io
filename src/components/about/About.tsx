import { Section } from '@/components/layout/Section';
import { WhoamiTerminal } from './WhoamiTerminal';
import { profile } from '@/data/profile';
import { Tag } from '@/components/ui/Tag';

export function About() {
  return (
    <Section
      id="about"
      eyebrow="// about"
      title="Research engineer with a builder's bias."
      description="I work where new modeling ideas meet the friction of production. The bullets below are where I spend my hours; the terminal on the right is the long version."
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
        <div className="space-y-8 lg:col-span-2">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.22em] text-mute">Research interests</h3>
            <ul className="mt-3 space-y-2 text-[15px] text-ink/90">
              {profile.about.interests.map((it) => (
                <li key={it} className="flex gap-2">
                  <span className="mt-2 inline-block h-1 w-3 flex-none bg-accent-cyan/70" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.22em] text-mute">Skills</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {profile.about.skills.map((s) => (
                <Tag key={s} tone="mute">
                  {s}
                </Tag>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.22em] text-mute">Current focus</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/90">{profile.about.currentFocus}</p>
          </div>
        </div>

        <div className="lg:col-span-3">
          <WhoamiTerminal />
        </div>
      </div>
    </Section>
  );
}
