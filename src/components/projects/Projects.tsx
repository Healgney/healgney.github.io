import { motion } from 'framer-motion';
import { Code, Video, Eye, Box } from 'lucide-react';
import { profile } from '@/data/profile';

export function Projects() {
  const getProjectIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Video className="w-5 h-5 text-cyan-600" />;
      case 1:
        return <Box className="w-5 h-5 text-emerald-600" />;
      default:
        return <Eye className="w-5 h-5 text-indigo-600" />;
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700">
            <Code className="w-3.5 h-3.5 text-cyan-600" />
            <span>PROJECT & RESEARCH EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Featured Projects
          </h2>
          <p className="text-slate-600 max-w-2xl text-base">
            Cutting-edge research and engineering in diffusion models, event camera 3D reconstruction, and geospatial computer vision.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profile.projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-2xl bg-slate-50 border border-slate-200/80 group-hover:scale-110 transition-transform">
                    {getProjectIcon(idx)}
                  </div>
                  <span className="text-xs font-mono text-slate-500 font-medium">
                    {project.period}
                  </span>
                </div>

                {/* Title & Organization */}
                <div className="space-y-1">
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-cyan-700">
                    {project.organization} · {project.role}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-cyan-700 transition-colors">
                    {project.title}
                  </h3>
                </div>

                {/* Description Bullets */}
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {project.description.map((desc, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2">
                      <span className="text-cyan-600 font-bold mt-1">▸</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1.5">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-50 text-slate-600 border border-slate-200/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
