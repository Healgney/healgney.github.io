import { Section } from '@/components/layout/Section';
import { useIsMobile } from '@/hooks/useIsMobile';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { ProjectFlipbook } from './ProjectFlipbook';
import { ProjectStack } from './ProjectStack';

export function Projects() {
  const isMobile = useIsMobile();
  const reduced = useReducedMotion();
  const useBook = !isMobile && !reduced;

  return (
    <Section
      id="projects"
      eyebrow="// projects"
      title="Selected work, page by page."
      description="A small portfolio rendered as a flippable book on desktop. On mobile (or when reduced-motion is on), it falls back to a vertical stack."
    >
      {useBook ? <ProjectFlipbook /> : <ProjectStack />}
    </Section>
  );
}
