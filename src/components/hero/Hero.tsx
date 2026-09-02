import { ParticleField } from './ParticleField';
import { HeroContent } from './HeroContent';

export function Hero() {
  return (
    <section id="hero" className="relative isolate min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0 bg-radial-fade" aria-hidden />
      <ParticleField />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-line opacity-[0.08]"
        style={{ backgroundSize: '64px 64px' }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-base"
      />
      <HeroContent />
    </section>
  );
}
