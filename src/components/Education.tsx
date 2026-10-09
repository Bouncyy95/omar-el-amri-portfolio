import React, { useState } from 'react';

interface EducationItem {
  id: string;
  type: 'degree' | 'formation';
  degree: string;
  institution: string;
  institutionUrl?: string;
  location: string;
  period: string;
  field: string;
  description: string;
  skillsAcquired: string[];
}

interface LanguageItem {
  language: string;
  proficiency: string;
  levelCode: string;
  detail: string;
}

const ACADEMIC_DATA: EducationItem[] = [
  {
    id: 'software-engineer-epi',
    type: 'degree',
    degree: 'Software Engineer',
    institution: 'EPI - International Polytechnic School',
    institutionUrl: 'https://www.epi.ens.tn/',
    location: 'Sousse, Tunisia',
    period: '2018 — 2021',
    field: 'Software Engineering & Distributed Systems',
    description:
      'Comprehensive engineering degree covering advanced object-oriented architectures, design patterns, mobile systems, concurrent programming, real-time networking, and full software lifecycle engineering.',
    skillsAcquired: [
      'Clean Architecture (MVVM)',
      'Distributed Systems & Networking',
      'Advanced Java & OOP Principles',
      'Mobile Application Design',
      'Agile / Scrum Methodologies',
      'Database Architecture & SQL',
    ],
  },
  {
    id: 'bachelor-cs',
    type: 'degree',
    degree: 'Bachelor of Computer Science',
    institution: 'School of Sciences and Technology',
    location: 'Hammam Sousse, Tunisia',
    period: '2015 — 2018',
    field: 'Computer Science, Algorithms & Foundations',
    description:
      'Rigorous undergraduate curriculum with deep foundations in algorithms, data structures, operating systems, relational databases, network protocols, and core programming paradigms. Culminated in a Bachelor final-year project building "Blasa" — an Android ride-sharing app with real-time location and Firebase synchronization.',
    skillsAcquired: [
      'Data Structures & Algorithms',
      'Operating Systems & Concurrency',
      'Java & C Programming',
      'Relational Databases & SQL',
      'Network Protocols & Sockets',
      'Final-Year Project: Java Android + Firebase',
    ],
  },
];

const LANGUAGES_DATA: LanguageItem[] = [
  {
    language: 'French',
    proficiency: 'Fluent',
    levelCode: 'C1 / Native-level',
    detail: 'Full professional working proficiency in technical and executive communication.',
  },
  {
    language: 'English',
    proficiency: 'Professional (B2)',
    levelCode: 'B2',
    detail: 'Professional working proficiency for international engineering squads and technical specifications.',
  },
  {
    language: 'German',
    proficiency: 'Elementary (A2)',
    levelCode: 'A2',
    detail: 'Working knowledge of fundamental syntax and daily professional interactions.',
  },
  {
    language: 'Spanish',
    proficiency: 'Basic',
    levelCode: 'A1',
    detail: 'Basic understanding and beginner conversational competence.',
  },
];

export const Education: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'education' | 'languages'>('all');

  return (
    <section id="education" className="py-24 sm:py-32 px-5 sm:px-8 md:px-12 max-w-7xl mx-auto border-b border-white/10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-white/50 font-mono mb-3">
            03 · Academic Formation & Qualifications
          </div>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight max-w-2xl text-balance">
            Academic engineering background and multilingual capabilities.
          </h2>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-white/5 border border-white/10 rounded-full self-start md:self-auto">
          {[
            { id: 'all', label: 'All Qualifications' },
            { id: 'education', label: 'University Degrees' },
            { id: 'languages', label: 'Languages' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`px-4 py-1.5 text-xs rounded-full transition-all duration-200 cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-white text-black font-medium shadow-sm'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Degrees and Languages */}
      <div className="space-y-16">
        {/* Academic Degrees Timeline */}
        {(activeTab === 'all' || activeTab === 'education') && (
          <div>
            <div className="text-xs uppercase tracking-widest text-white/40 font-mono mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Higher Education & Engineering Formation</span>
            </div>

            <div className="relative">
              {/* Continuous Spine Line */}
              <div
                className="absolute left-[11px] sm:left-[19px] top-6 bottom-6 w-[1px] bg-white/15"
                aria-hidden="true"
              />

              <div className="space-y-10 sm:space-y-12">
                {ACADEMIC_DATA.map((item) => (
                  <div key={item.id} className="relative flex items-start gap-6 sm:gap-10 group">
                    {/* Timeline Marker Dot */}
                    <div className="relative mt-2 shrink-0 z-10">
                      <div className="w-[23px] h-[23px] sm:w-[39px] sm:h-[39px] rounded-full bg-black border border-white/30 flex items-center justify-center group-hover:border-white transition-colors">
                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-400 transition-transform duration-300 group-hover:scale-125" />
                      </div>
                    </div>

                    {/* Card Container */}
                    <div className="flex-1 p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-white/30 transition-all duration-300">
                      {/* Meta Header */}
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                        <div className="flex flex-wrap items-center gap-2 text-xs">
                          <span className="uppercase tracking-wider font-mono text-emerald-400 text-[11px]">
                            University Degree
                          </span>
                          <span aria-hidden="true" className="text-white/30">·</span>
                          <span className="text-white/90 font-medium">
                            {item.institutionUrl ? (
                              <a
                                href={item.institutionUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-emerald-300 transition-colors inline-flex items-center gap-1"
                              >
                                {item.institution} ↗
                              </a>
                            ) : (
                              item.institution
                            )}
                          </span>
                          <span aria-hidden="true" className="text-white/30">·</span>
                          <span className="text-white/40">{item.location}</span>
                        </div>

                        <span className="text-xs font-mono text-white/60 shrink-0">
                          {item.period}
                        </span>
                      </div>

                      {/* Degree Title */}
                      <h3 className="text-xl sm:text-2xl font-medium text-white mb-1 group-hover:text-white transition-colors">
                        {item.degree}
                      </h3>
                      <div className="text-xs font-mono text-white/50 mb-4">
                        {item.field}
                      </div>

                      {/* Description */}
                      <p className="text-sm text-white/70 leading-relaxed mb-6 font-light">
                        {item.description}
                      </p>

                      {/* Skills Acquired & Curriculum Highlights */}
                      <div className="pt-4 border-t border-white/10">
                        <div className="text-[11px] font-mono uppercase tracking-wider text-white/40 mb-2">
                          Core Academic Disciplines & Competencies
                        </div>
                        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-xs text-white/60 font-mono">
                          {item.skillsAcquired.map((skill, idx) => (
                            <React.Fragment key={skill}>
                              <span className="text-white/80">{skill}</span>
                              {idx < item.skillsAcquired.length - 1 && (
                                <span aria-hidden="true" className="text-white/20">·</span>
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Languages Section from CV */}
        {(activeTab === 'all' || activeTab === 'languages') && (
          <div>
            <div className="text-xs uppercase tracking-widest text-white/40 font-mono mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Languages</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {LANGUAGES_DATA.map((lang) => (
                <div
                  key={lang.language}
                  className="p-5 sm:p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-white/25 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono uppercase tracking-widest text-white/40">
                        {lang.levelCode}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 border border-white/10 text-emerald-300">
                        {lang.proficiency}
                      </span>
                    </div>
                    <h4 className="text-xl font-medium text-white mb-2">
                      {lang.language}
                    </h4>
                    <p className="text-xs text-white/60 leading-relaxed font-light">
                      {lang.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
