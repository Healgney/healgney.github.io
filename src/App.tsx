import { MotionConfig } from 'framer-motion';
import { NavBar } from '@/components/layout/NavBar';
import { Hero } from '@/components/hero/Hero';
import { About } from '@/components/about/About';
import { Projects } from '@/components/projects/Projects';
import { Publications } from '@/components/publications/Publications';
import { Contact } from '@/components/contact/Contact';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <NavBar />
      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Publications />
        <Contact />
      </main>
    </MotionConfig>
  );
}
