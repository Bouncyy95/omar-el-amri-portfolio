import React, { useState } from 'react';
import { ModalType } from './Modals';
import resumeUrl from '../assets/EL_AMRI_OMAR_Resume.pdf';
import { Download, FileText } from 'lucide-react';

interface AboutProps {
  onOpenModal?: (type: ModalType) => void;
}

interface CapabilityItem {
  id: string;
  category: string;
  title: string;
  detail: string;
  techKeywords: string[];
}

const CORE_CAPABILITIES: CapabilityItem[] = [
  {
    id: 'arch',
    category: 'Architecture & Systems',
    title: 'Reactive System Topology & Clean Swift / Kotlin Multiplatform',
    detail:
      'Designing decoupled modular architectures (TCA, VIPER, Clean Architecture, MVI) that scale gracefully to millions of active installations with strictly zero regressions.',
    techKeywords: ['Swift 6 Concurrency', 'Kotlin Coroutines / Flow', 'TCA / Composable', 'Modular SPM'],
  },
  {
    id: 'graphics',
    category: 'Graphics & Perceptual UI',
    title: 'Hardware-Accelerated Metal & Vulkan Graphics Pipelines',
    detail:
      'Crafting 120fps fluid fluid micro-interactions, custom Metal compute shaders, CoreAnimation drivers, and zero-jank perceptual touch feedback loops.',
    techKeywords: ['Apple Metal', 'Vulkan Pipeline', 'CoreAnimation GPU', 'Haptics CoreEngine'],
  },
  {
    id: 'performance',
    category: 'Performance & Low Latency',
    title: 'Memory Footprint Tuning, Profiling & Sub-Millisecond Dispatch',
    detail:
      'Rigorous Instruments profiling (Time Profiler, Allocations, Leaks, GPU Frame Capture) eliminating dropped frames, thermals, and unnecessary battery drain.',
    techKeywords: ['Xcode Instruments', 'Perfetto / Systrace', 'Memory Safety', 'Thermal Budgets'],
  },
  {
    id: 'on-device-ml',
    category: 'Intelligent Edge',
    title: 'Private On-Device Inference & Audio DSP Engines',
    detail:
      'Integrating CoreML, TFLite, and local neural network quantization for real-time edge processing without sending user telemetry to cloud servers.',
    techKeywords: ['CoreML / Apple Silicon', 'C++ DSP / CoreAudio', 'TFLite Quantization', 'Local-First Data'],
  },
];

const CAREER_HIGHLIGHTS = [
  {
    period: '2022 — Present',
    role: 'Principal Mobile Architect & Lead Engineer',
    organization: 'Mainframe Systems / Private Studio',
    location: 'London · Remote',
    summary:
      'Spearheading flagship native mobile applications across decentralized finance, low-latency audio synthesis, and camera hardware integrations.',
  },
  {
    period: '2019 — 2022',
    role: 'Senior iOS & Native Systems Engineer',
    organization: 'Apex Fintech & Global Labs',
    location: 'Berlin · Zurich',
    summary:
      'Directed cross-functional mobile squads building institutional trading surfaces, biometrics authentication, and hardware-attested cryptographic keys.',
  },
  {
    period: '2016 — 2019',
    role: 'Mobile Software Engineer',
    organization: 'Cognitive Mobile Interactive',
    location: 'Munich',
    summary:
      'Authored low-level graphic shaders, sensor telemetry pipelines, and resilient offline-first synchronizers for enterprise fieldwork units.',
  },
];

export const About: React.FC<AboutProps> = ({ onOpenModal }) => {
  const [activeCap, setActiveCap] = useState<string>(CORE_CAPABILITIES[0].id);

  return (
    <section id="about" className="py-24 sm:py-32 px-5 sm:px-8 md:px-12 max-w-7xl mx-auto border-b border-white/10">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-white/50 font-mono mb-3">
            01 · Professional Profile & Philosophy
          </div>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight max-w-2xl text-balance">
            Senior Mobile Developer crafting tactile, resilient software at the metal boundary.
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <a
            href={resumeUrl}
            download="EL_AMRI_OMAR_Resume.pdf"
            className="group flex items-center gap-2.5 px-5 py-3 rounded-xl border text-xs font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer bg-white text-black hover:bg-white/90 border-transparent shadow-lg shadow-white/5 active:scale-95"
          >
            <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            <span>Download Resume</span>
            <span className="text-[10px] opacity-60 ml-0.5 tracking-normal lowercase font-sans">· pdf</span>
          </a>

          <div className="text-xs font-mono text-white/40 uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
            <span>Available for Consultations</span>
          </div>
        </div>
      </div>

      {/* DISTINCT HERO BENTO: Editorial Portrait + Bio Narrative + Live Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mb-20 items-stretch">
        {/* Left Column: Portrait & Studio Spec (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden group hover:border-white/20 transition-all duration-300">
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/60">
            <img
              src="/src/assets/images/senior_mobile_engineer_portrait_1791486824926.jpg"
              alt="Senior Mobile Developer Professional Portrait"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 filter grayscale contrast-[1.1] brightness-90 hover:filter-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            
            {/* Overlay Stamp */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white/80">
              <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10">
                Lead Mobile Engineer
              </span>
              <span className="text-white/60">10+ Yrs Native Systems</span>
            </div>
          </div>

          <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 gap-6">
            <div>
              <div className="text-xs text-white/40 font-mono uppercase tracking-wider mb-2">
                Executive Focus
              </div>
              <h3 className="text-xl sm:text-2xl font-medium text-white mb-3">
                High-performance mobile client architecture with zero tolerance for dropped frames.
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Specialized in deep operating-system integrations, deterministic concurrency, custom hardware audio/camera peripherals, and cryptographic trust enclaves.
              </p>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/10 text-center">
              <div>
                <div className="text-2xl sm:text-3xl font-medium font-mono text-white">10+</div>
                <div className="text-[11px] font-mono text-white/40 uppercase mt-0.5">Years Active</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-medium font-mono text-white">15M+</div>
                <div className="text-[11px] font-mono text-white/40 uppercase mt-0.5">Downloads Led</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-medium font-mono text-white">99.98%</div>
                <div className="text-[11px] font-mono text-white/40 uppercase mt-0.5">Crash-Free Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative Executive Summary & Strategic Approach (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-8 sm:p-12 hover:border-white/20 transition-all duration-300">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs uppercase tracking-widest text-white/40 font-mono">
                Executive Summary
              </span>
              <span className="text-white/20">·</span>
              <span className="text-xs font-mono text-white/60">Curated Dispatch</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-normal leading-snug tracking-tight text-white mb-6">
              "Mobile software isn't simply a web page compressed into an app window. It is a tactile, handheld instrument of computation."
            </h3>

            <div className="space-y-4 text-sm sm:text-base text-white/70 leading-relaxed font-light mb-8">
              <p>
                Over the past decade, I have architected and shipped mission-critical mobile platforms across <span className="text-white font-normal">institutional finance</span>, <span className="text-white font-normal">professional media capture</span>, and <span className="text-white font-normal">spatial DSP audio</span>. My engineering discipline merges low-level systems programming in Swift, C++, and Kotlin with an obsession for micro-interaction physics and tactile design harmony.
              </p>
              <p>
                Having navigated the evolution from Objective-C and Java to modern structured concurrency in Swift 6 and Kotlin Coroutines, I build client engines designed for longevity: offline-first by default, hardened with biometric hardware enclaves, and optimized for sub-16ms render budgets on ProMotion displays.
              </p>
              <p>
                Beyond writing clean code, I partner with founders, design directors, and platform executives to translate complex product ambitions into fluid, intuitive touch experiences that delight users and stand the test of OS updates.
              </p>
            </div>

            {/* Quick Actions & Resume Download Callout */}
            <div className="flex flex-wrap items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/[0.03] mb-8">
              <a
                href={resumeUrl}
                download="EL_AMRI_OMAR_Resume.pdf"
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg border text-xs font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer bg-white text-black hover:bg-white/90 border-transparent active:scale-95"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Complete Resume</span>
              </a>

              <div className="flex items-center gap-2 text-xs font-mono text-white/50">
                <FileText className="w-3.5 h-3.5 text-white/40" />
                <span>PDF Format · Omar El Amri · Resume</span>
              </div>
            </div>
          </div>

          {/* Core Tenets Matrix */}
          <div className="pt-8 border-t border-white/10">
            <div className="text-xs font-mono uppercase tracking-widest text-white/40 mb-4">
              Engineering Disciplines & Principles
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01]">
                <div className="text-xs font-mono text-white/90 mb-1">Deterministic Concurrency</div>
                <div className="text-xs text-white/50 leading-relaxed">
                  Actor isolation, thread safety, and immutability preventing data races in high-throughput streams.
                </div>
              </div>
              <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01]">
                <div className="text-xs font-mono text-white/90 mb-1">Zero-Jank 120Hz ProMotion</div>
                <div className="text-xs text-white/50 leading-relaxed">
                  Off-main-thread image decoding, zero layout recalculations during scroll, and GPU shader acceleration.
                </div>
              </div>
              <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01]">
                <div className="text-xs font-mono text-white/90 mb-1">Local-First Privacy</div>
                <div className="text-xs text-white/50 leading-relaxed">
                  On-device ML models, SQLite / CoreData encryption at rest, and zero unnecessary telemetry tracking.
                </div>
              </div>
              <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01]">
                <div className="text-xs font-mono text-white/90 mb-1">Hardware-Root of Trust</div>
                <div className="text-xs text-white/50 leading-relaxed">
                  Apple Secure Enclave, Android StrongBox, and biometric key signing for zero-compromise security.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CORE ARCHITECTURAL CAPABILITIES INTERACTIVE SECTION */}
      <div className="mb-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs uppercase tracking-widest text-white/40 font-mono mb-2">
              Domain Competencies
            </div>
            <h3 className="text-2xl sm:text-3xl font-medium text-white">
              Core Systems & Technical Capabilities
            </h3>
          </div>
          <div className="text-xs font-mono text-white/50">
            Select an area to explore architectural depth
          </div>
        </div>

        {/* Capability Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-6">
          {CORE_CAPABILITIES.map((cap) => {
            const isActive = activeCap === cap.id;
            return (
              <button
                key={cap.id}
                type="button"
                onClick={() => setActiveCap(cap.id)}
                className={`text-left p-5 rounded-xl border transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'border-white bg-white/[0.08] text-white shadow-lg'
                    : 'border-white/10 bg-white/[0.02] text-white/70 hover:border-white/30 hover:text-white'
                }`}
              >
                <div className="text-[11px] font-mono uppercase tracking-wider text-white/40 mb-1">
                  {cap.category}
                </div>
                <div className="text-sm font-medium leading-snug line-clamp-2">
                  {cap.title.split('&')[0]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Capability Deep-Dive View */}
        {(() => {
          const item = CORE_CAPABILITIES.find((c) => c.id === activeCap) || CORE_CAPABILITIES[0];
          return (
            <div className="p-8 sm:p-10 rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-white/40 block mb-2">
                    {item.category}
                  </span>
                  <h4 className="text-xl sm:text-2xl font-medium text-white mb-3">
                    {item.title}
                  </h4>
                  <p className="text-sm sm:text-base text-white/70 max-w-3xl leading-relaxed">
                    {item.detail}
                  </p>
                </div>
                {onOpenModal && (
                  <button
                    type="button"
                    onClick={() => onOpenModal('pitch')}
                    className="shrink-0 px-4 py-2 rounded-full border border-white/20 text-xs font-mono uppercase tracking-wider text-white hover:bg-white hover:text-black transition-colors self-start"
                  >
                    Discuss Architecture ↗
                  </button>
                )}
              </div>

              {/* Keyword List adhering to zero-pill discipline (unboxed clean labels) */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-mono text-white/60">
                <span className="text-white/40 uppercase">Production Tech Stack:</span>
                {item.techKeywords.map((tech, idx) => (
                  <span key={tech} className="flex items-center gap-4">
                    <span className="text-white/90">{tech}</span>
                    {idx < item.techKeywords.length - 1 && (
                      <span className="text-white/20">·</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          );
        })()}
      </div>

      {/* LEADERSHIP & PROFESSIONAL ENGAGEMENT CHRONOLOGY */}
      <div>
        <div className="text-xs uppercase tracking-widest text-white/40 font-mono mb-2">
          Career Trajectory
        </div>
        <h3 className="text-2xl sm:text-3xl font-medium text-white mb-8">
          Senior Leadership & Engineering Tenures
        </h3>

        <div className="border border-white/10 rounded-2xl bg-white/[0.02] divide-y divide-white/10 overflow-hidden">
          {CAREER_HIGHLIGHTS.map((career) => (
            <div
              key={career.role + career.period}
              className="p-6 sm:p-8 hover:bg-white/[0.03] transition-colors flex flex-col md:flex-row md:items-baseline justify-between gap-4"
            >
              <div className="md:w-1/3">
                <span className="text-xs font-mono text-white/40 block mb-1">
                  {career.period}
                </span>
                <h4 className="text-lg font-medium text-white">{career.role}</h4>
                <div className="text-xs text-white/50 font-mono mt-0.5">
                  {career.organization} <span className="text-white/30">·</span> {career.location}
                </div>
              </div>
              <div className="md:w-2/3">
                <p className="text-sm text-white/70 leading-relaxed font-light">
                  {career.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
