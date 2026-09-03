import { Cpu, Terminal, Layers, Globe, Camera, Heart } from 'lucide-react';
import { profile } from '@/data/profile';

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700">
            <Cpu className="w-3.5 h-3.5 text-cyan-600" />
            <span>TECHNICAL EXPERTISE & INTERESTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Skills & Capabilities
          </h2>
          <p className="text-slate-600 max-w-2xl text-base">
            Comprehensive foundation in AI modeling, systems engineering, multimedia creation, and multilingual communication.
          </p>
        </div>

        {/* Categorized Skills Bento */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Models & Methods */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all space-y-4">
            <div className="flex items-center gap-2.5 text-slate-900 font-bold text-base">
              <Layers className="w-5 h-5 text-cyan-600" />
              <span>Models & Methods</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {profile.skills.modelsAndMethods.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-xl text-xs font-mono bg-cyan-50/70 text-cyan-800 border border-cyan-200/80 font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* ML Frameworks & Platforms */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all space-y-4">
            <div className="flex items-center gap-2.5 text-slate-900 font-bold text-base">
              <Cpu className="w-5 h-5 text-emerald-600" />
              <span>ML Platforms & Tools</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {profile.skills.mlPlatforms.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-xl text-xs font-mono bg-emerald-50/70 text-emerald-800 border border-emerald-200/80 font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Programming & Systems */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all space-y-4">
            <div className="flex items-center gap-2.5 text-slate-900 font-bold text-base">
              <Terminal className="w-5 h-5 text-indigo-600" />
              <span>Programming & Systems</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {profile.skills.programmingAndSystems.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-xl text-xs font-mono bg-indigo-50/70 text-indigo-800 border border-indigo-200/80 font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all space-y-4">
            <div className="flex items-center gap-2.5 text-slate-900 font-bold text-base">
              <Globe className="w-5 h-5 text-amber-600" />
              <span>Languages</span>
            </div>
            <div className="space-y-2">
              {profile.skills.languages.map((lang, idx) => (
                <div
                  key={idx}
                  className="px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-50 text-slate-700 border border-slate-200/70"
                >
                  {lang}
                </div>
              ))}
            </div>
          </div>

          {/* Multimedia & Creative */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all space-y-4">
            <div className="flex items-center gap-2.5 text-slate-900 font-bold text-base">
              <Camera className="w-5 h-5 text-rose-600" />
              <span>Multimedia Production</span>
            </div>
            <div className="space-y-2">
              {profile.skills.multimedia.map((item, idx) => (
                <div
                  key={idx}
                  className="px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-50 text-slate-700 border border-slate-200/70"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Hobbies */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all space-y-4">
            <div className="flex items-center gap-2.5 text-slate-900 font-bold text-base">
              <Heart className="w-5 h-5 text-red-500" />
              <span>Life & Hobbies</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {profile.skills.hobbies.map((hobby, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-xl text-xs font-medium bg-slate-100 text-slate-800 border border-slate-200"
                >
                  {hobby}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
