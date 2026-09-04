import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { profile } from '@/data/profile';
import { ThemeToggle } from './ThemeToggle';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'publications', label: 'Publications' },
  { id: 'contact', label: 'Contact' },
];

export function NavBar() {
  const [activeTab, setActiveTab] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    );

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-white/80 backdrop-blur-xl border-b border-slate-200/80 shadow-sm dark:bg-black/80 dark:border-white/10 dark:shadow-none'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
        {/* Left: Brand Identity */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('hero');
          }}
          className="group flex items-center gap-2.5 font-mono text-sm font-semibold tracking-tight text-slate-900 dark:text-neutral-100"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-glow-cyan group-hover:scale-125 transition-transform" />
          <span className="text-slate-900 dark:text-white font-bold">{profile.displayName}</span>
        </a>

        {/* Right: Floating Tabs Navigation & Theme Toggle (Desktop) */}
        <div className="hidden md:flex items-center gap-2.5">
          <nav className="flex items-center gap-1 p-1 rounded-full bg-slate-100/90 backdrop-blur-md border border-slate-200/90 shadow-sm dark:bg-neutral-900/90 dark:border-white/10 dark:shadow-none">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-slate-900 dark:text-white font-semibold'
                      : 'text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 rounded-full bg-white shadow-sm border border-slate-200/60 dark:bg-neutral-800 dark:border-white/10"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </nav>

          <ThemeToggle />
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle size="sm" />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-slate-900 shadow-sm dark:bg-neutral-900 dark:border-white/10 dark:text-neutral-300 dark:hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden px-4 pt-3 pb-4 bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-lg space-y-1 mt-2 dark:bg-neutral-950/95 dark:border-white/10 dark:shadow-none"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition ${
                activeTab === item.id
                  ? 'bg-slate-100 text-slate-900 font-semibold dark:bg-neutral-800 dark:text-white'
                  : 'text-slate-600 hover:bg-slate-50 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </motion.div>
      )}
    </header>
  );
}
