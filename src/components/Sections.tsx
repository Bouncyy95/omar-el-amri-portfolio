import React, { useState } from 'react';
import { ModalType } from './Modals';
import resumeUrl from '../assets/EL_AMRI_OMAR_Resume.pdf';
import { Projects } from './Projects';
import { Skills } from './Skills';
import { Education } from './Education';

interface SectionsProps {
  onOpenModal: (type: ModalType) => void;
}

export const Sections: React.FC<SectionsProps> = ({ onOpenModal }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (key: string, text: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2000);
  };

  return (
    <div className="relative z-10 bg-black/95 backdrop-blur-2xl border-t border-white/10 text-white">
      {/* 01 · MOBILE PROJECTS COMPONENT */}
      <Projects />

      {/* 02 · TECHNICAL PROFICIENCIES & SKILLS COMPONENT */}
      <Skills onOpenModal={onOpenModal} />

      {/* 03 · ACADEMIC FORMATION & CERTIFICATIONS */}
      <Education />

      {/* 04 · DIRECT CHANNELS & SOCIALS */}
      <section id="contact" className="py-24 sm:py-32 px-5 sm:px-8 md:px-12 max-w-7xl mx-auto border-b border-white/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-white/50 font-mono mb-3">
              04 · Direct Channels & Socials
            </div>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight max-w-2xl text-balance">
              Get in touch directly with Omar El Amri.
            </h2>
          </div>
          <p className="text-sm text-white/50 max-w-sm">
            Available for mobile engineering opportunities, architectural consultations, and technical collaborations.
          </p>
        </div>

        {/* Direct Channel Cards: GitHub -> LinkedIn -> Email -> Rest */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* 1. GitHub (github.com/OmaarElAmri) */}
          <div
            onClick={() => window.open('https://github.com/OmaarElAmri', '_blank', 'noopener,noreferrer')}
            className="group p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-white/30 transition-all duration-300 flex flex-col justify-between min-h-[250px] cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </div>
                <span className="text-xs font-mono uppercase text-white/40">Code Repositories</span>
              </div>
              <div className="text-xs text-white/50 font-mono uppercase tracking-wider mb-1">GitHub Profile</div>
              <h3 className="text-xl sm:text-2xl font-medium text-white mb-2 group-hover:text-white transition-colors">
                github.com/OmaarElAmri
              </h3>
              <p className="text-xs text-white/60 leading-relaxed font-light">
                Explore open source repositories, Android samples, and full-stack side projects.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs">
              <a
                href="https://github.com/OmaarElAmri"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-white/70 hover:text-white underline underline-offset-2 transition-colors flex items-center gap-1"
              >
                View Repositories ↗
              </a>
              <span className="text-xs text-white/40 font-mono">Follow →</span>
            </div>
          </div>

          {/* 2. LinkedIn (linkedin.com/in/omar-el-amri) */}
          <div
            onClick={() => window.open('https://linkedin.com/in/omar-el-amri', '_blank', 'noopener,noreferrer')}
            className="group p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-white/30 transition-all duration-300 flex flex-col justify-between min-h-[250px] cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <span className="text-xs font-mono uppercase text-blue-400">Professional</span>
              </div>
              <div className="text-xs text-white/50 font-mono uppercase tracking-wider mb-1">LinkedIn Network</div>
              <h3 className="text-xl sm:text-2xl font-medium text-white mb-2 group-hover:text-white transition-colors">
                in/omar-el-amri
              </h3>
              <p className="text-xs text-white/60 leading-relaxed font-light">
                Connect on LinkedIn for professional history, recommendations, and mobile engineering updates.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs">
              <a
                href="https://linkedin.com/in/omar-el-amri"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-white/70 hover:text-white underline underline-offset-2 transition-colors flex items-center gap-1"
              >
                View Profile ↗
              </a>
              <span className="text-xs text-white/40 font-mono">Connect →</span>
            </div>
          </div>

          {/* 3. Email (omar_el_amri@icloud.com) */}
          <div
            onClick={(e) => handleCopy('email', 'omar_el_amri@icloud.com', e)}
            className="group p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-white/30 transition-all duration-300 flex flex-col justify-between min-h-[250px] cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <span className="text-xs font-mono uppercase text-white/40">Direct Mail</span>
              </div>
              <div className="text-xs text-white/50 font-mono uppercase tracking-wider mb-1">Email Address</div>
              <h3 className="text-xl sm:text-2xl font-medium text-white mb-2 group-hover:text-white transition-colors break-all">
                omar_el_amri@icloud.com
              </h3>
              <p className="text-xs text-white/60 leading-relaxed font-light">
                Direct inbox for employment, technical proposals, and consultation inquiries.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs">
              <a
                href="mailto:omar_el_amri@icloud.com"
                onClick={(e) => e.stopPropagation()}
                className="text-white/70 hover:text-white underline underline-offset-2 transition-colors"
              >
                Send Email ↗
              </a>
              <button
                type="button"
                className="px-3 py-1 rounded-full border border-white/20 text-white/80 hover:bg-white hover:text-black transition-colors"
              >
                {copiedKey === 'email' ? 'Copied to Clipboard!' : 'Copy Email'}
              </button>
            </div>
          </div>

          {/* 4. Phone Number (+216 52 070 023) */}
          <div
            onClick={(e) => handleCopy('phone', '+216 52 070 023', e)}
            className="group p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-white/30 transition-all duration-300 flex flex-col justify-between min-h-[250px] cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <span className="text-xs font-mono uppercase text-white/40">Voice & Cellular</span>
              </div>
              <div className="text-xs text-white/50 font-mono uppercase tracking-wider mb-1">Phone Line</div>
              <h3 className="text-xl sm:text-2xl font-medium text-white mb-2 group-hover:text-white transition-colors">
                +216 52 070 023
              </h3>
              <p className="text-xs text-white/60 leading-relaxed font-light">
                Direct phone line based in Sousse, Tunisia (GMT+1).
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs">
              <a
                href="tel:+21652070023"
                onClick={(e) => e.stopPropagation()}
                className="text-white/70 hover:text-white underline underline-offset-2 transition-colors"
              >
                Call Number ↗
              </a>
              <button
                type="button"
                className="px-3 py-1 rounded-full border border-white/20 text-white/80 hover:bg-white hover:text-black transition-colors"
              >
                {copiedKey === 'phone' ? 'Copied to Clipboard!' : 'Copy Number'}
              </button>
            </div>
          </div>

          {/* 5. WhatsApp (+216 52 070 023) */}
          <div
            onClick={(e) => handleCopy('whatsapp', '+216 52 070 023', e)}
            className="group p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-white/30 transition-all duration-300 flex flex-col justify-between min-h-[250px] cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </div>
                <span className="text-xs font-mono uppercase text-emerald-400/80">Active Chat</span>
              </div>
              <div className="text-xs text-white/50 font-mono uppercase tracking-wider mb-1">WhatsApp Messenger</div>
              <h3 className="text-xl sm:text-2xl font-medium text-white mb-2 group-hover:text-white transition-colors">
                +216 52 070 023
              </h3>
              <p className="text-xs text-white/60 leading-relaxed font-light">
                Instant messaging for technical discussions, quick syncs, and file transfers.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs">
              <a
                href="https://wa.me/21652070023"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2 transition-colors flex items-center gap-1"
              >
                Chat on WhatsApp ↗
              </a>
              <button
                type="button"
                className="px-3 py-1 rounded-full border border-white/20 text-white/80 hover:bg-white hover:text-black transition-colors"
              >
                {copiedKey === 'whatsapp' ? 'Copied to Clipboard!' : 'Copy WhatsApp'}
              </button>
            </div>
          </div>

          {/* 6. Location / Base */}
          <div
            className="group p-8 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col justify-between min-h-[250px]"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <span className="text-xs font-mono uppercase text-emerald-400">Available</span>
              </div>
              <div className="text-xs text-white/50 font-mono uppercase tracking-wider mb-1">Geographic Location</div>
              <h3 className="text-xl sm:text-2xl font-medium text-white mb-2">
                4021 Sousse, Tunisia
              </h3>
              <p className="text-xs text-white/60 leading-relaxed font-light">
                Open to remote contracts, on-site engagements, and international software engineering opportunities.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-white/50 font-mono">
              <span>Timezone: UTC+1 (CET)</span>
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Remote Ready
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* QUIET FOOTER */}
      <footer className="py-12 px-5 sm:px-8 md:px-12 text-white/60 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <span className="text-base text-white font-medium">
              Omar El Amri
            </span>
            <span className="text-white leading-none">·</span>
            <span className="text-white/40 font-mono">Software Engineer</span>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 text-white/60">
            <a href={resumeUrl} download="EL_AMRI_OMAR_Resume.pdf" className="hover:text-white transition-colors">Download Resume</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#education" className="hover:text-white transition-colors">Education</a>
            <a href="#contact" className="hover:text-white transition-colors">Direct Channels</a>
          </div>

          <div className="text-white/40 font-mono">
            omar_el_amri@icloud.com · +216 52 070 023
          </div>
        </div>
      </footer>
    </div>
  );
};
