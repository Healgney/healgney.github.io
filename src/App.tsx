import { MotionConfig } from 'framer-motion';
import { NavBar } from '@/components/layout/NavBar';
import { Hero } from '@/components/hero/Hero';
import { About } from '@/components/about/About';
import { Publications } from '@/components/papers/Papers';
import { Hobbies } from '@/components/hobbies/Hobbies';
import { Contact } from '@/components/contact/Contact';
import { Footer } from '@/components/layout/Footer';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#fafbfc] text-slate-900 selection:bg-cyan-100 selection:text-slate-900 font-sans dark:bg-black dark:text-neutral-100 dark:selection:bg-cyan-950 dark:selection:text-cyan-200 transition-colors duration-300">
        <NavBar />
        <main className="relative">
          <Hero />
          <About />
          <Publications />
          <Hobbies />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
