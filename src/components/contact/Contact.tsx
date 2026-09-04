import { useState } from 'react';
import { Github, Copy, Check, Send, Mail } from 'lucide-react';
import { profile } from '@/data/profile';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
      <div className="space-y-8">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700 dark:bg-neutral-900 dark:border-white/10 dark:text-neutral-300">
            <Mail className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Get in Touch
          </h2>
          <p className="text-slate-600 dark:text-neutral-400 max-w-2xl text-base leading-relaxed">
            I am always open to discussing academic research, AI algorithm engineering, multimodal innovations, or exciting technical collaborations.
          </p>
        </div>

        {/* Action buttons & email copy */}
        <div className="flex flex-wrap items-center gap-3.5 pt-1">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition active:scale-95 shadow-sm dark:bg-white dark:text-black dark:hover:bg-neutral-200"
          >
            <Send className="w-4 h-4 text-cyan-400 dark:text-cyan-600" />
            <span>Send Email</span>
          </a>

          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200/90 text-slate-700 text-sm font-medium transition active:scale-95 shadow-sm dark:bg-[#121212] dark:hover:bg-neutral-800 dark:border-white/10 dark:text-neutral-200"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span className="text-emerald-700 dark:text-emerald-400 font-mono text-xs sm:text-sm font-semibold">Email Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-slate-400 dark:text-neutral-500" />
                <span className="font-mono text-xs sm:text-sm text-slate-800 dark:text-neutral-200">{profile.email}</span>
              </>
            )}
          </button>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200/90 text-slate-700 text-sm font-medium transition active:scale-95 shadow-sm dark:bg-[#121212] dark:hover:bg-neutral-800 dark:border-white/10 dark:text-neutral-200"
          >
            <Github className="w-4 h-4 text-slate-700 dark:text-neutral-300" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
