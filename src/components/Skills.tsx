import React, { useState, useMemo } from 'react';
import { ModalType } from './Modals';

interface SkillsProps {
  onOpenModal?: (type: ModalType) => void;
}

export interface SkillItem {
  name: string;
  level: string;
  experience: string;
  highlight: string;
  ecosystem: string[];
}

export interface SkillCategory {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  leadTech: string;
  accentColor: string;
  summary: string;
  skills: SkillItem[];
  architecturalPillars: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'mobile-dev',
    number: '01',
    title: 'Mobile Development',
    subtitle: 'Native Android & Cross-Platform Systems',
    leadTech: 'Android SDK & Jetpack Compose',
    accentColor: 'text-emerald-400',
    summary:
      'Engineering high-performance native Android applications with Android SDK, Jetpack Compose, CameraX, OpenCV real-time image processing, Room persistence, and Bluetooth IoT communication.',
    skills: [
      {
        name: 'Android SDK & Jetpack Compose',
        level: 'Expert · Senior Level',
        experience: 'Production Core',
        highlight: 'Declarative UI, StateFlow, Coroutines, Custom Layouts, Lifecycle Management & Modern UI Patterns',
        ecosystem: ['Jetpack Compose', 'Android SDK', 'StateFlow', 'Coroutines', 'Material 3'],
      },
      {
        name: 'CameraX & OpenCV Image Processing',
        level: 'Advanced Specialist',
        experience: 'Specialized Hardware',
        highlight: 'Real-time rPPG physiological signal extraction (heart rate, SpO₂, BP), FFT signal filtering, frame interpolation',
        ecosystem: ['CameraX', 'OpenCV', 'FFT Signal Processing', 'Threads & Filters', 'On-Device Processing'],
      },
      {
        name: 'Google Maps API & Location Engine',
        level: 'Advanced Specialist',
        experience: 'Production Scaled',
        highlight: 'Real-time GPS route tracking, geofencing, turn-by-turn navigation, and interactive marker clustering',
        ecosystem: ['Google Maps API', 'Location Services', 'Real-Time Tracking', 'Route Optimization'],
      },
      {
        name: 'Cross-Platform & IoT Hardware (React Native & Bluetooth)',
        level: 'Proficient Engineer',
        experience: 'IoT & Cross-Platform',
        highlight: 'React Native mobile interfaces, Bluetooth Sockets communication with Raspberry Pi devices, Wi-Fi pairing & firmware updates',
        ecosystem: ['React Native', 'Bluetooth Sockets', 'Raspberry Pi', 'Unit Testing', 'Git & CI/CD'],
      },
    ],
    architecturalPillars: [
      'Android SDK & Jetpack Compose Lifecycle',
      'OpenCV & CameraX Real-Time Processing',
      'Google Maps & Location Services',
      'Bluetooth Sockets & Raspberry Pi Hardware',
    ],
  },
  {
    id: 'languages-arch',
    number: '02',
    title: 'Languages & Architecture',
    subtitle: 'Core Languages & Scalable Design Patterns',
    leadTech: 'Kotlin & Clean MVVM',
    accentColor: 'text-amber-300',
    summary:
      'Applying strict Clean Architecture with MVVM, decoupled layers, deterministic state management, and idiomatic Kotlin and Java for scalable enterprise codebases.',
    skills: [
      {
        name: 'Kotlin',
        level: 'Primary Flagship',
        experience: 'Core Language',
        highlight: 'Modern idioms, Coroutines, Flow, StateFlow, Sealed Classes, Type-Safe Builders & Extensions',
        ecosystem: ['Coroutines', 'StateFlow', 'Kotlin DSL', 'Functional Idioms', 'Asynchronous Pipelines'],
      },
      {
        name: 'Clean Architecture (MVVM)',
        level: 'Architectural Standard',
        experience: 'Production Methodology',
        highlight: 'Strict separation of concerns, Repository Pattern, UseCases/Interactors, decoupled Domain & Presentation layers',
        ecosystem: ['MVVM Pattern', 'Repository Pattern', 'Use Cases', 'Unidirectional Data Flow'],
      },
      {
        name: 'Java',
        level: 'Strong Foundation',
        experience: 'Native Android',
        highlight: 'Object-oriented architecture, concurrency primitives, Android framework internals, multi-threading',
        ecosystem: ['Java OOP', 'Android Runtime', 'Multi-Threading', 'Collections Framework'],
      },
      {
        name: 'JavaScript',
        level: 'Proficient',
        experience: 'Cross-Platform & Web',
        highlight: 'Modern ES6+ syntax, asynchronous programming, React Native modules, and web platform interop',
        ecosystem: ['ES6+ JavaScript', 'Asynchronous Promises', 'React Native Scripts', 'API Handlers'],
      },
    ],
    architecturalPillars: [
      'Clean Architecture Separation of Concerns',
      'Model-View-ViewModel (MVVM) Patterns',
      'Coroutines & StateFlow Concurrency',
      'Strict Layer Isolation & Testability',
    ],
  },
  {
    id: 'networking-apis',
    number: '03',
    title: 'Networking & APIs',
    subtitle: 'Real-Time Sockets & Cloud Infrastructure',
    leadTech: 'Retrofit & Socket.IO',
    accentColor: 'text-cyan-400',
    summary:
      'Real-time duplex communication via Socket.IO, resilient HTTP client layers with Retrofit, OAuth2/JWT security tokens, and comprehensive Firebase cloud suite integration.',
    skills: [
      {
        name: 'Socket.IO Real-Time Engine',
        level: 'Specialist · Real-Time',
        experience: 'Duplex WebSockets',
        highlight: 'Bidirectional events, live in-app messaging, real-time dispatch alerts, and live GPS coordinate streaming',
        ecosystem: ['Socket.IO Client', 'Real-Time Events', 'WebSocket Protocol', 'Instant Chat & Alerts'],
      },
      {
        name: 'Retrofit & RESTful APIs',
        level: 'Expert · HTTP Layer',
        experience: 'Production Standard',
        highlight: 'Type-safe HTTP requests, OkHttp interceptors, error handling, JSON serialization, and dynamic headers',
        ecosystem: ['Retrofit 2', 'OkHttp Interceptors', 'RESTful Endpoints', 'JSON Parsers'],
      },
      {
        name: 'Firebase Suite (Auth, Firestore, FCM, Crashlytics)',
        level: 'Senior Cloud Integrator',
        experience: 'Full Stack BaaS',
        highlight: 'User authentication, real-time Firestore database, targeted push notifications with FCM, and 99%+ crash monitoring',
        ecosystem: ['Firebase Auth', 'Cloud Firestore', 'Firebase Cloud Messaging (FCM)', 'Crashlytics Monitoring'],
      },
      {
        name: 'OAuth2 & JWT Authentication',
        level: 'Security Architecture',
        experience: 'Enterprise Auth',
        highlight: 'Secure token storage, automatic token refreshing interceptors, role-based access control (RBAC), and GDPR compliance',
        ecosystem: ['OAuth2 Handshake', 'JWT Tokens', 'Bearer Interceptors', 'Encrypted Storage'],
      },
    ],
    architecturalPillars: [
      'Low-Latency Socket.IO Event Pipelines',
      'Type-Safe Retrofit REST Services',
      'Full Firebase BaaS & Telemetry',
      'Secure OAuth2/JWT Token Life Cycles',
    ],
  },
  {
    id: 'payments-storage',
    number: '04',
    title: 'Payments & Subscriptions',
    subtitle: 'Monetization, Gateways & Local Persistence',
    leadTech: 'Stripe, Paypal & Konnect',
    accentColor: 'text-purple-400',
    summary:
      'Seamless multi-gateway payment processing across Stripe, PayPal, and Konnect, combined with offline-first Room local database caching and CI/CD pipelines.',
    skills: [
      {
        name: 'Stripe Payment Gateway',
        level: 'Production Integration',
        experience: 'Global Checkout',
        highlight: 'Credit card tokenization, PaymentIntents, secure client-side element checkout, and Webhook verification',
        ecosystem: ['Stripe SDK', 'PaymentIntents', 'Card Processing', 'PCI Compliance'],
      },
      {
        name: 'PayPal Integration',
        level: 'Production Integration',
        experience: 'Digital Wallet',
        highlight: 'One-touch checkout flows, subscription agreements, order authorization, and multi-currency handling',
        ecosystem: ['PayPal SDK', 'Order Capture', 'Digital Wallet', 'Recurring Billing'],
      },
      {
        name: 'Konnect Payment Gateway',
        level: 'Regional Gateway Specialist',
        experience: 'Local Monetization',
        highlight: 'North African & regional payment integration, instant mobile transaction validation, and automated receipts',
        ecosystem: ['Konnect Gateway', 'Direct Carrier / Mobile Wallet', 'Webhooks', 'Transaction Verification'],
      },
      {
        name: 'Room Database & Offline Persistence',
        level: 'Expert Persistence',
        experience: 'Local-First Data',
        highlight: 'SQLite object mapping, DAOs, reactive Flow queries, database migrations, and offline cache synchronization',
        ecosystem: ['Room ORM', 'SQLite DAOs', 'Flow Queries', 'Schema Migrations', 'Offline Sync'],
      },
    ],
    architecturalPillars: [
      'Multi-Gateway Payment Orchestration',
      'Secure Checkout Tokenization & PCI Compliance',
      'Room Database Offline-First Synchronization',
      'Continuous Integration, Git & Unit Testing',
    ],
  },
];

export const Skills: React.FC<SkillsProps> = ({ onOpenModal }) => {
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedSkill, setSelectedSkill] = useState<{ category: string; skill: SkillItem } | null>(null);

  const filteredCategories = useMemo(() => {
    return SKILL_CATEGORIES.map((category) => {
      // If a category filter is active and doesn't match this category
      if (activeCategoryFilter !== 'all' && category.id !== activeCategoryFilter) {
        return null;
      }

      // If search query is present, filter skills inside this category
      if (!searchQuery.trim()) {
        return category;
      }

      const q = searchQuery.toLowerCase().trim();
      const matchingSkills = category.skills.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.highlight.toLowerCase().includes(q) ||
          s.ecosystem.some((eco) => eco.toLowerCase().includes(q))
      );

      const categoryMatches =
        category.title.toLowerCase().includes(q) ||
        category.leadTech.toLowerCase().includes(q) ||
        category.architecturalPillars.some((p) => p.toLowerCase().includes(q));

      if (categoryMatches || matchingSkills.length > 0) {
        return {
          ...category,
          skills: matchingSkills.length > 0 ? matchingSkills : category.skills,
        };
      }

      return null;
    }).filter((c): c is SkillCategory => c !== null);
  }, [activeCategoryFilter, searchQuery]);

  return (
    <section id="skills" className="py-24 sm:py-32 px-5 sm:px-8 md:px-12 max-w-7xl mx-auto border-b border-white/10">
      {/* SECTION HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-white/50 font-mono mb-3">
            02 · Technical Proficiencies & Core Competencies
          </div>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight max-w-3xl text-balance">
            Mobile engineering depth across Android, real-time APIs, and image processing.
          </h2>
        </div>
        <div className="flex flex-col sm:items-end gap-2 text-right">
          <p className="text-sm text-white/50 max-w-md text-left sm:text-right">
            Proven record delivering high-performance, real-time map, camera, and payment solutions.
          </p>
          <div className="text-xs font-mono text-white/40 uppercase tracking-widest flex items-center sm:justify-end gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
            <span>4 Dedicated CV Categories</span>
          </div>
        </div>
      </div>

      {/* INTERACTIVE CONTROLS: CATEGORY GROUP TABS + SEARCH */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
        {/* Category Filter Tabs (4 groups + all) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-white/[0.03] border border-white/10 w-fit">
          <button
            onClick={() => setActiveCategoryFilter('all')}
            className={`px-3.5 py-1.5 text-xs font-mono tracking-wide rounded-lg transition-all cursor-pointer ${
              activeCategoryFilter === 'all'
                ? 'bg-white text-black font-semibold shadow-sm'
                : 'text-white/60 hover:text-white hover:bg-white/5'
            }`}
          >
            All 4 Categories
          </button>
          <button
            onClick={() => setActiveCategoryFilter('mobile-dev')}
            className={`px-3.5 py-1.5 text-xs font-mono tracking-wide rounded-lg transition-all cursor-pointer ${
              activeCategoryFilter === 'mobile-dev'
                ? 'bg-white text-black font-semibold shadow-sm'
                : 'text-white/60 hover:text-white hover:bg-white/5'
            }`}
          >
            01 · Mobile Development
          </button>
          <button
            onClick={() => setActiveCategoryFilter('languages-arch')}
            className={`px-3.5 py-1.5 text-xs font-mono tracking-wide rounded-lg transition-all cursor-pointer ${
              activeCategoryFilter === 'languages-arch'
                ? 'bg-white text-black font-semibold shadow-sm'
                : 'text-white/60 hover:text-white hover:bg-white/5'
            }`}
          >
            02 · Languages & Architecture
          </button>
          <button
            onClick={() => setActiveCategoryFilter('networking-apis')}
            className={`px-3.5 py-1.5 text-xs font-mono tracking-wide rounded-lg transition-all cursor-pointer ${
              activeCategoryFilter === 'networking-apis'
                ? 'bg-white text-black font-semibold shadow-sm'
                : 'text-white/60 hover:text-white hover:bg-white/5'
            }`}
          >
            03 · Networking & APIs
          </button>
          <button
            onClick={() => setActiveCategoryFilter('payments-storage')}
            className={`px-3.5 py-1.5 text-xs font-mono tracking-wide rounded-lg transition-all cursor-pointer ${
              activeCategoryFilter === 'payments-storage'
                ? 'bg-white text-black font-semibold shadow-sm'
                : 'text-white/60 hover:text-white hover:bg-white/5'
            }`}
          >
            04 · Payments & Subscriptions
          </button>
        </div>

        {/* Quick Filter Search */}
        <div className="relative w-full md:w-72">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search CV skills (e.g. Kotlin, OpenCV, Stripe)..."
            className="w-full px-3.5 py-2 pl-9 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/40 text-xs focus:outline-none focus:border-white/40 transition-colors font-body"
          />
          <svg
            className="absolute left-3 top-2.5 w-3.5 h-3.5 text-white/40"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-2 text-white/40 hover:text-white text-xs"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* 4 CATEGORY CARDS GRID */}
      <div
        className={`grid gap-8 ${
          filteredCategories.length === 1
            ? 'grid-cols-1 max-w-3xl mx-auto'
            : filteredCategories.length === 2
            ? 'grid-cols-1 lg:grid-cols-2'
            : 'grid-cols-1 lg:grid-cols-2 gap-8'
        }`}
      >
        {filteredCategories.map((cat) => (
          <div
            key={cat.id}
            className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-7 sm:p-9 hover:border-white/20 transition-all duration-300 relative group overflow-hidden"
          >
            {/* Top Atmospheric Ambient Glow Line */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div>
              {/* Card Category Header */}
              <div className="flex items-start justify-between mb-5">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-white/40 uppercase tracking-widest mb-1.5">
                    <span>{cat.number}</span>
                    <span aria-hidden="true">·</span>
                    <span>{cat.subtitle}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-white flex items-center gap-3">
                    {cat.title}
                  </h3>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/80 shrink-0">
                  {cat.leadTech}
                </span>
              </div>

              {/* Category Narrative Summary */}
              <p className="text-sm text-white/60 leading-relaxed mb-7 pb-6 border-b border-white/10">
                {cat.summary}
              </p>

              {/* Individual Skill Items within Category */}
              <div className="space-y-4 mb-8">
                <div className="text-xs font-mono uppercase tracking-wider text-white/40 flex items-center justify-between">
                  <span>Core Proficiencies from CV</span>
                  <span>Category Status</span>
                </div>

                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    onClick={() => setSelectedSkill({ category: cat.title, skill })}
                    className="p-3.5 rounded-xl bg-black/40 border border-white/5 hover:border-white/20 transition-all cursor-pointer group/skill"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <div className="text-sm font-medium text-white group-hover/skill:text-emerald-300 transition-colors flex items-center gap-2">
                        <span>{skill.name}</span>
                        <svg
                          className="w-3 h-3 text-white/30 group-hover/skill:text-white/80 transition-colors inline-block"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                      <div className="text-xs font-mono text-white/60 text-right">
                        <span>{skill.level}</span>
                      </div>
                    </div>

                    <p className="text-xs text-white/50 leading-relaxed mb-2.5">
                      {skill.highlight}
                    </p>

                    {/* Unboxed Ecosystem / Framework Markers */}
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-mono text-white/40">
                      {skill.ecosystem.map((item, idx) => (
                        <React.Fragment key={item}>
                          <span className="hover:text-white/80 transition-colors">{item}</span>
                          {idx < skill.ecosystem.length - 1 && (
                            <span className="text-white/20" aria-hidden="true">
                              ·
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Architectural Pillars Footer */}
            <div className="pt-6 border-t border-white/10">
              <div className="text-xs font-mono uppercase tracking-widest text-white/40 mb-3">
                Key Production Technologies & Standards
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-white/70">
                {cat.architecturalPillars.map((pillar) => (
                  <div key={pillar} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                    <span>{pillar}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL / DETAIL DRAWER POPUP FOR SPECIFIC SKILL */}
      {selectedSkill && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-xl rounded-2xl bg-zinc-950 border border-white/20 p-6 sm:p-8 shadow-2xl text-white">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-white/40 mb-1">
                  {selectedSkill.category}
                </div>
                <h3 className="text-2xl font-medium tracking-tight">
                  {selectedSkill.skill.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedSkill(null)}
                className="w-8 h-8 rounded-full border border-white/20 hover:border-white/50 flex items-center justify-center text-white/60 hover:text-white transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 py-4 my-4 border-y border-white/10 text-xs font-mono">
              <div>
                <span className="text-white/40 block mb-1">Proficiency Level</span>
                <span className="text-white font-medium">{selectedSkill.skill.level}</span>
              </div>
              <div>
                <span className="text-white/40 block mb-1">Domain Focus</span>
                <span className="text-white font-medium">{selectedSkill.skill.experience}</span>
              </div>
            </div>

            <div className="mb-6">
              <span className="text-xs font-mono uppercase tracking-wider text-white/40 block mb-2">
                CV Experience & Application
              </span>
              <p className="text-sm text-white/80 leading-relaxed">
                {selectedSkill.skill.highlight}
              </p>
            </div>

            <div className="mb-6">
              <span className="text-xs font-mono uppercase tracking-wider text-white/40 block mb-2">
                Technologies & Modules
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedSkill.skill.ecosystem.map((eco) => (
                  <span
                    key={eco}
                    className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-white/80"
                  >
                    {eco}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
              <button
                onClick={() => setSelectedSkill(null)}
                className="px-4 py-2 rounded-full border border-white/20 text-xs font-medium hover:border-white/40 transition-colors cursor-pointer"
              >
                Close
              </button>
              {onOpenModal && (
                <button
                  onClick={() => {
                    setSelectedSkill(null);
                    onOpenModal('pitch');
                  }}
                  className="px-5 py-2 rounded-full bg-white text-black text-xs font-medium hover:bg-white/90 transition-colors cursor-pointer"
                >
                  Connect on this Skill
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
