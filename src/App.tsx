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
      <div className="min-h-screen bg-[#fafbfc] text-slate-900 selection:bg-cyan-100 selection:text-slate-900 font-sans">
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
