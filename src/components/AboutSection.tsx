import React from 'react';
import { DEVELOPER_PROFILE } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative z-10 w-full py-24 px-5 sm:px-8 md:px-12 max-w-6xl mx-auto scroll-mt-20">
      <div className="border-t border-white/10 pt-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-white/50 font-mono mb-3">01 · About & Philosophy</div>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white">
              Engineering for the palm of your hand.
            </h2>
          </div>
          <p className="text-white/60 text-sm sm:text-base max-w-md leading-relaxed">
            Specialized in native Swift, Kotlin, and cross-platform mobile architectures that bridge hardware capabilities with visceral, 120Hz touch interactions.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {DEVELOPER_PROFILE.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm flex flex-col justify-between"
            >
              <div className="text-3xl sm:text-4xl font-semibold text-white tracking-tight font-mono mb-2">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-wider text-white/60 font-body">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Narrative & Core Tenets */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-5 text-white/80 text-sm sm:text-base leading-relaxed">
            <h3 className="text-xl font-medium text-white tracking-tight">
              From zero to million-user mobile products
            </h3>
            <p>
              I began building iOS apps in the early days of Swift 2 and have evolved alongside the mobile landscape through SwiftUI, Jetpack Compose, and Kotlin Multiplatform.
            </p>
            <p>
              My focus is not just visual polish, but the unseen engineering invariants: 16ms render deadlines, cold launch optimization, deterministic offline sync algorithms, and battery-friendly background task scheduling.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-emerald-400">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Senior / Lead Mobile Contracts & Advisory</span>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/30 transition-colors">
              <div className="text-emerald-400 font-mono text-xs mb-2">01 · FRAME INTEGRITY</div>
              <h4 className="text-white font-medium text-base mb-2">120 FPS Kinetics</h4>
              <p className="text-xs text-white/60 leading-relaxed">
                Every gesture must feel physical. Zero dropped frames during fast scrolling, leveraging Metal shaders, Core Animation, and Jetpack Compose subcomposition avoidance.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/30 transition-colors">
              <div className="text-emerald-400 font-mono text-xs mb-2">02 · RELIABILITY</div>
              <h4 className="text-white font-medium text-base mb-2">Offline-First Core</h4>
              <p className="text-xs text-white/60 leading-relaxed">
                Network drops should never interrupt user flow. Architecture grounded in local SQLite, Room, and CoreData with idempotent background synchronization.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/30 transition-colors">
              <div className="text-emerald-400 font-mono text-xs mb-2">03 · SENSORS & METAL</div>
              <h4 className="text-white font-medium text-base mb-2">Deep Hardware Access</h4>
              <p className="text-xs text-white/60 leading-relaxed">
                Direct integration with on-device Neural Engine (CoreML), raw camera pipelines (AVFoundation, CameraX), and biometric Secure Enclaves.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/30 transition-colors">
              <div className="text-emerald-400 font-mono text-xs mb-2">04 · MULTIPLATFORM</div>
              <h4 className="text-white font-medium text-base mb-2">Unified Business Logic</h4>
              <p className="text-xs text-white/60 leading-relaxed">
                Sharing clean domain business logic across iOS and Android with Kotlin Multiplatform (KMP), while preserving 100% bespoke native UI on each platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
