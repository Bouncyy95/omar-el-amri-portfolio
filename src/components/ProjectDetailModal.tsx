import React from 'react';
import { Project } from '../data/portfolioData';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-neutral-950 border border-white/20 text-white rounded-2xl p-6 sm:p-10 shadow-2xl max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close project modal"
          className="absolute top-5 right-5 sm:top-7 sm:right-7 text-white/60 hover:text-white transition-colors p-2 text-xl cursor-pointer"
        >
          ✕
        </button>

        {/* Modal Header */}
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <span className="text-xs uppercase tracking-widest text-emerald-400 font-mono">
            {project.platform}
          </span>
          <span className="text-white/30">·</span>
          <span className="text-xs text-white/50 font-mono">{project.year}</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-medium tracking-tight mb-3">
          {project.title}
        </h2>
        <p className="text-white/70 text-base sm:text-lg mb-6 leading-relaxed">
          {project.subtitle}
        </p>

        {/* Image Preview & Key Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          <div className="lg:col-span-7 rounded-xl overflow-hidden border border-white/10 bg-black/50 aspect-[4/5] max-h-[460px] flex items-center justify-center">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="space-y-3">
              <h3 className="text-xs uppercase tracking-wider text-white/50 font-mono">Production Metrics</h3>
              <div className="grid grid-cols-1 gap-2.5">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="p-3.5 rounded-lg bg-white/[0.03] border border-white/10">
                    <div className="text-lg font-semibold text-white">{metric.value}</div>
                    <div className="text-xs text-white/60 mt-0.5">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs uppercase tracking-wider text-white/50 font-mono">Core Tech Stack</h3>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-md bg-white/10 border border-white/15 text-white/90"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Links */}
            <div className="flex flex-wrap gap-3 pt-2">
              {project.appStoreUrl && (
                <a
                  href={project.appStoreUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black text-xs font-medium rounded-full hover:bg-neutral-200 transition-colors"
                >
                  <span>App Store</span>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M1 9L9 1M9 1H3M9 1V7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              )}
              {project.playStoreUrl && (
                <a
                  href={project.playStoreUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black text-xs font-medium rounded-full hover:bg-neutral-200 transition-colors"
                >
                  <span>Google Play</span>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M1 9L9 1M9 1H3M9 1V7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              )}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white text-xs font-medium rounded-full hover:bg-white/20 transition-colors border border-white/20"
              >
                <span>GitHub Repo</span>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M1 9L9 1M9 1H3M9 1V7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Deep Dive Description */}
        <div className="border-t border-white/10 pt-6 space-y-6">
          <div>
            <h3 className="text-xs uppercase tracking-wider text-white/50 font-mono mb-2">Technical Overview</h3>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">{project.longDescription}</p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-wider text-white/50 font-mono mb-3">Architectural Highlights</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.architecture.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg bg-white/[0.02] border border-white/10 text-xs text-white/70 leading-relaxed flex items-start gap-2.5"
                >
                  <span className="text-emerald-400 font-mono text-sm leading-none shrink-0">0{idx + 1}.</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
