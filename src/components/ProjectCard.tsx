import React, { useState, useRef } from 'react';
import type { Project } from './Projects';

interface ProjectCardProps {
  project: Project;
  onExpandImage: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onExpandImage }) => {
  const Card = project.url ? 'a' : 'div';
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    // Calculate normalized cursor coordinates (-1 to 1) relative to center of preview slot
    const xRatio = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const yRatio = ((e.clientY - rect.top) / rect.height) * 2 - 1;

    // Apply subtle parallax translation: max 12px shift in opposite/matching direction
    const parallaxStrength = 14;
    setOffset({
      x: Math.max(-1, Math.min(1, xRatio)) * parallaxStrength,
      y: Math.max(-1, Math.min(1, yRatio)) * parallaxStrength,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Smoothly return to center
    setOffset({ x: 0, y: 0 });
  };

  return (
    <Card
      href={project.url}
      target={project.url ? '_blank' : undefined}
      rel={project.url ? 'noopener noreferrer' : undefined}
      className={`group relative rounded-2xl border border-white/10 bg-white/[0.02] transition-colors duration-500 overflow-hidden flex flex-col justify-between ${project.url ? 'hover:border-white/30 cursor-pointer focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4' : ''}`}
    >
      {/* Visual Preview Slot with Parallax Canvas */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-950 border-b border-white/10 select-none"
      >
        {/* Parallax Container: Slightly scaled up (1.08x to 1.15x) to allow fluid translations without exposing clipping boundaries */}
        <div
          className="absolute inset-0 w-full h-full pointer-events-none will-change-transform"
          style={{
            transform: isHovered
              ? `scale(1.12) translate3d(${offset.x}px, ${offset.y}px, 0)`
              : project.imageFit === 'contain' ? 'none' : 'scale(1.04) translate3d(0px, 0px, 0)',
            transition: isHovered
              ? 'transform 0.15s cubic-bezier(0.2, 0, 0.2, 1)'
              : 'transform 0.65s cubic-bezier(0.25, 1, 0.5, 1)',
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            loading="lazy"
            className={`w-full h-full object-center ${project.imageFit === 'contain' ? 'object-contain' : 'object-cover filter grayscale-[0.25] group-hover:grayscale-0 transition-[filter] duration-700'}`}
          />
        </div>

        {/* Contrast Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none" />

        {/* Floating Quick Indicators */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs pointer-events-none z-10">
          <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/15 text-white/90 font-mono text-[11px]">
            {project.year}
          </span>
          <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/15 text-white/90 text-[11px]">
            {project.platform.split('·')[0].trim()}
          </span>
        </div>

        {/* Website link preview */}
        {project.url && <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/35 backdrop-blur-[1px] pointer-events-none z-10">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-xs font-medium shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            Visit Ecoshare ↗
          </span>
        </div>}
        {!project.url && (
          <button
            type="button"
            onClick={() => onExpandImage(project)}
            aria-label={`Expand ${project.title} photo`}
            className="absolute inset-0 z-20 cursor-zoom-in focus-visible:outline-2 focus-visible:outline-white focus-visible:-outline-offset-4"
          >
            <span className="absolute bottom-4 right-4 rounded-full bg-black/70 border border-white/20 px-3 py-1.5 text-xs text-white">
              Expand photo ↗
            </span>
          </button>
        )}
      </div>

      {/* Card Content & Metadata */}
      <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs text-white/50 mb-2">
            <span>{project.category}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono text-white/40">{project.platform}</span>
          </div>

          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 mb-3">
            <h3 className="text-2xl font-medium text-white group-hover:text-white transition-colors">
              {project.title}
            </h3>
            <span className="text-xs font-mono text-white/50 shrink-0">{project.metrics}</span>
          </div>

          <p className="text-white/60 text-sm leading-relaxed mb-6 font-light">
            {project.description}
          </p>
        </div>

        {/* Tech Stack Tags (Clean Unboxed) */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex flex-wrap items-center gap-2 text-white/40 text-[11px] font-mono">
            {project.techStack.map((tech, idx) => (
              <React.Fragment key={tech}>
                <span>{tech}</span>
                {idx < project.techStack.length - 1 && <span aria-hidden="true">·</span>}
              </React.Fragment>
            ))}
          </div>
          {project.url && <span className="text-white/80 group-hover:translate-x-1 transition-transform inline-block" aria-hidden="true">
            ↗
          </span>}
        </div>
      </div>
    </Card>
  );
};
