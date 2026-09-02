import {
  Github,
  Mail,
  Linkedin,
  FileText,
  GraduationCap,
  Twitter,
  type LucideIcon,
} from 'lucide-react';
import type { SocialKind, SocialLink } from '@/types/profile';

const iconFor: Record<SocialKind, LucideIcon> = {
  github: Github,
  scholar: GraduationCap,
  email: Mail,
  cv: FileText,
  linkedin: Linkedin,
  twitter: Twitter,
};

const labelFor: Record<SocialKind, string> = {
  github: 'GitHub',
  scholar: 'Scholar',
  email: 'Email',
  cv: 'CV',
  linkedin: 'LinkedIn',
  twitter: 'Twitter',
};

export function resolveHref(link: SocialLink): string {
  if (link.kind === 'cv' && !/^https?:|^mailto:/.test(link.href)) {
    const base = import.meta.env.BASE_URL.endsWith('/')
      ? import.meta.env.BASE_URL
      : `${import.meta.env.BASE_URL}/`;
    return `${base}${link.href.replace(/^\//, '')}`;
  }
  return link.href;
}

export function IconLink({ link, compact = false }: { link: SocialLink; compact?: boolean }) {
  const Icon = iconFor[link.kind];
  const label = link.label ?? labelFor[link.kind];
  const isExternal = /^https?:/.test(link.href);

  return (
    <a
      href={resolveHref(link)}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer noopener' : undefined}
      className={`group inline-flex items-center gap-2 rounded-md border border-line bg-white/[.02] px-3 py-1.5 text-sm text-ink/85 transition hover:border-accent-cyan/40 hover:bg-accent-cyan/[.06] hover:text-ink ${
        compact ? 'px-2 py-1' : ''
      }`}
      aria-label={label}
    >
      <Icon size={compact ? 14 : 16} strokeWidth={1.75} className="opacity-90 group-hover:opacity-100" />
      {!compact && <span>{label}</span>}
    </a>
  );
}
