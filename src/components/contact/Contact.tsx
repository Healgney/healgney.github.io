import { Section } from '@/components/layout/Section';
import { profile } from '@/data/profile';
import { IconLink, resolveHref } from '@/components/ui/IconLink';

export function Contact() {
  const email = profile.socials.find((s) => s.kind === 'email');

  return (
    <Section
      id="contact"
      eyebrow="// contact"
      title="Talk shop?"
      description="The fastest way to reach me is email. I read everything, but reply selectively — relevant > polite."
    >
      <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          {email && (
            <a
              href={resolveHref(email)}
              className="block break-all font-mono text-2xl text-accent-cyan transition hover:text-accent-violet sm:text-3xl"
            >
              {email.href.replace(/^mailto:/, '')}
            </a>
          )}
          <p className="mt-3 max-w-md text-sm text-mute">
            For collaborations, papers, or interesting datasets. CV available below.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {profile.socials.map((s) => (
            <IconLink key={s.kind} link={s} />
          ))}
        </div>
      </div>

      <footer className="mt-16 flex flex-col items-start justify-between gap-2 border-t border-line pt-6 font-mono text-[11px] text-mute sm:flex-row sm:items-center">
        <span>
          © {new Date().getFullYear()} {profile.name}. Built with Vite + React + tsParticles.
        </span>
        <span>
          ~/{profile.handle} <span className="animate-blink text-accent-cyan">_</span>
        </span>
      </footer>
    </Section>
  );
}
