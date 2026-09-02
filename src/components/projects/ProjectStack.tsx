import { profile } from '@/data/profile';
import { ProjectPage } from './ProjectPage';

export function ProjectStack() {
  const total = profile.projects.length;
  return (
    <div className="grid grid-cols-1 gap-5">
      {profile.projects.map((p, i) => (
        <div key={p.title} className="min-h-[420px]">
          <ProjectPage project={p} index={i} total={total} />
        </div>
      ))}
    </div>
  );
}
