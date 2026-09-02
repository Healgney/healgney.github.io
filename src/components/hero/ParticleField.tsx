import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { ISourceOptions } from '@tsparticles/engine';
import { useIsMobile } from '@/hooks/useIsMobile';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function ParticleField() {
  const [ready, setReady] = useState(false);
  const isMobile = useIsMobile();
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  const options = useMemo<ISourceOptions>(
    () => ({
      fullScreen: { enable: false },
      fpsLimit: 60,
      detectRetina: true,
      background: { color: { value: 'transparent' } },
      particles: {
        number: {
          value: isMobile ? 28 : 85,
          density: { enable: true, width: 1200, height: 800 },
        },
        color: { value: ['#22d3ee', '#8b5cf6', '#9aa3b2'] },
        links: {
          enable: true,
          distance: isMobile ? 110 : 150,
          color: '#22d3ee',
          opacity: 0.22,
          width: 1,
        },
        move: {
          enable: true,
          speed: isMobile ? 0.5 : 0.85,
          direction: 'none',
          random: true,
          straight: false,
          outModes: { default: 'out' },
        },
        opacity: {
          value: { min: 0.25, max: 0.7 },
          animation: { enable: true, speed: 0.6, sync: false },
        },
        size: { value: { min: 0.8, max: 2.2 } },
        shape: { type: 'circle' },
      },
      interactivity: {
        events: {
          onHover: { enable: !isMobile, mode: 'grab' },
          resize: { enable: true },
        },
        modes: {
          grab: { distance: 160, links: { opacity: 0.55 } },
        },
      },
    }),
    [isMobile],
  );

  if (reducedMotion) {
    return (
      <div
        aria-hidden
        className="absolute inset-0 bg-grid-line opacity-[0.18]"
        style={{ backgroundSize: '48px 48px' }}
      />
    );
  }

  if (!ready) return null;

  return (
    <Particles id="hero-particles" options={options} className="absolute inset-0" />
  );
}
