import { ArrowUp, Github, Mail } from 'lucide-react';
import { profile } from '@/data/profile';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200/80 bg-white/60 py-10 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="font-mono text-sm font-bold text-slate-900">
            {profile.displayName} · {profile.name} · {profile.chineseName}
          </div>
          <span className="text-slate-300">|</span>
          <div className="text-xs text-slate-500 font-mono">
            MSc PolyU · AI Algorithm Engineer
          </div>
        </div>

        <div className="flex items-center gap-6 text-xs text-slate-600 font-mono">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 transition-colors flex items-center gap-1.5"
          >
            <Github className="w-3.5 h-3.5" />
            <span>github@{profile.githubHandle}</span>
          </a>

          <a
            href={`mailto:${profile.email}`}
            className="hover:text-slate-900 transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>

          <button
            type="button"
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
