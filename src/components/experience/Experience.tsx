import { motion } from 'framer-motion';
import { Briefcase, Building2, Calendar } from 'lucide-react';
import { profile } from '@/data/profile';

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700">
            <Briefcase className="w-3.5 h-3.5 text-cyan-600" />
            <span>INDUSTRY & ACADEMIC APPOINTMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Professional Experience
          </h2>
          <p className="text-slate-600 max-w-2xl text-base">
            Track record in AI algorithm engineering, multimodal research, and system implementation.
          </p>
        </div>

        {/* Experience Timeline Cards */}
        <div className="space-y-6">
          {profile.experience.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                      {item.title}
                    </h3>
                    {item.type && (
                      <span className="px-2 py-0.5 rounded-full text-[11px] font-mono bg-cyan-50 text-cyan-700 border border-cyan-200">
                        {item.type}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                    <Building2 className="w-4 h-4 text-slate-400" />
                    <span>{item.company}</span>
                    {item.location && (
                      <>
                        <span className="text-slate-300">•</span>
                        <span className="text-xs text-slate-500">{item.location}</span>
                      </>
                    )}
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-xs font-mono text-slate-700 font-medium self-start sm:self-auto">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{item.period}</span>
                </div>
              </div>

              <ul className="space-y-2 pt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2.5">
                    <span className="text-cyan-600 font-bold mt-0.5">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
