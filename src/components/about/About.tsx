import { Compass, Binary, ScanEye, ShieldCheck, Film } from 'lucide-react';
import { profile } from '@/data/profile';

export function About() {
  const getInterestIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Binary className="w-5 h-5 text-cyan-600" />;
      case 1:
        return <ScanEye className="w-5 h-5 text-indigo-600" />;
      case 2:
        return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
      default:
        return <Film className="w-5 h-5 text-amber-600" />;
    }
  };

  const interestDescriptions = [
    'Bridging vision-language reasoning and cross-modal alignment to solve perceptual hallucinations in foundation models.',
    'Formulating instance-level spatial grounding, spatiotemporal CoT reasoning, and fine-grained visual localization.',
    'Grounding forensic reasoning in latent-pixel consistency to detect and localize deepfakes and AI-generated artifacts.',
    'Advancing high-fidelity, identity-consistent diffusion models and pose-guided generative video synthesis.',
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
      <div className="space-y-10">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700">
            <Compass className="w-3.5 h-3.5 text-cyan-600" />
            <span>CORE RESEARCH INTERESTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            About
          </h2>
          <p className="text-slate-600 max-w-2xl text-base">
            Exploring the foundations and frontiers of multimodal intelligence, deepfake forensics, and generative vision.
          </p>
        </div>

        {/* Research Interests Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {profile.researchInterests.map((interest, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all space-y-4 group"
            >
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/70 group-hover:scale-110 transition-transform">
                  {getInterestIcon(idx)}
                </div>
                <span className="text-xs font-mono text-slate-400 font-semibold">
                  0{idx + 1} / TOPIC
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-cyan-700 transition-colors">
                  {interest}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {interestDescriptions[idx] || 'Dedicated to advancing fundamental algorithms and practical systems in this domain.'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
