import { useCallback, useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { profile } from '@/data/profile';
import { ProjectPage } from './ProjectPage';

interface FlipBookApi {
  pageFlip: () => {
    flipNext: () => void;
    flipPrev: () => void;
    getPageCount: () => number;
  };
}

export function ProjectFlipbook() {
  const ref = useRef<FlipBookApi | null>(null);
  const [page, setPage] = useState(0);
  const total = profile.projects.length;
  const totalPages = total + 2; // cover + entries + back cover

  const flipNext = useCallback(() => ref.current?.pageFlip().flipNext(), []);
  const flipPrev = useCallback(() => ref.current?.pageFlip().flipPrev(), []);

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="w-full overflow-hidden">
        <div className="mx-auto" style={{ maxWidth: 980 }}>
          {/* @ts-expect-error: react-pageflip lacks complete TS defs for some props */}
          <HTMLFlipBook
            ref={ref}
            width={460}
            height={560}
            size="stretch"
            minWidth={320}
            maxWidth={520}
            minHeight={420}
            maxHeight={620}
            maxShadowOpacity={0.4}
            mobileScrollSupport
            showCover
            drawShadow
            flippingTime={650}
            usePortrait={false}
            startZIndex={0}
            autoSize
            clickEventForward
            useMouseEvents
            swipeDistance={30}
            showPageCorners
            disableFlipByClick={false}
            className="mx-auto"
            style={{}}
            onFlip={(e: { data: number }) => setPage(e.data)}
          >
            <ProjectPage variant="cover" total={total} />
            {profile.projects.map((p, i) => (
              <ProjectPage key={p.title} project={p} index={i} total={total} />
            ))}
            <ProjectPage variant="back" />
          </HTMLFlipBook>
        </div>
      </div>

      <div className="flex items-center gap-4 font-mono text-xs text-mute">
        <button
          onClick={flipPrev}
          disabled={page === 0}
          className="inline-flex items-center gap-1 rounded-md border border-line bg-white/[.02] px-2.5 py-1.5 text-ink/85 transition hover:border-accent-cyan/40 hover:text-ink disabled:opacity-40 disabled:hover:border-line"
          aria-label="Previous page"
        >
          <ChevronLeft size={14} />
          prev
        </button>
        <span>
          {String(Math.min(page + 1, totalPages)).padStart(2, '0')} / {String(totalPages).padStart(2, '0')}
        </span>
        <button
          onClick={flipNext}
          disabled={page >= totalPages - 1}
          className="inline-flex items-center gap-1 rounded-md border border-line bg-white/[.02] px-2.5 py-1.5 text-ink/85 transition hover:border-accent-cyan/40 hover:text-ink disabled:opacity-40 disabled:hover:border-line"
          aria-label="Next page"
        >
          next
          <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
}
