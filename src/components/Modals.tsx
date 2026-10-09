import React, { useState } from 'react';

export type ModalType =
  | 'pitch'
  | 'careers'
  | 'hello'
  | 'operate'
  | 'labs'
  | 'studio'
  | 'shop'
  | 'contact'
  | null;

interface ModalsProps {
  activeModal: ModalType;
  onClose: () => void;
}

export const Modals: React.FC<ModalsProps> = ({ activeModal, onClose }) => {
  const [pitchForm, setPitchForm] = useState({ name: '', email: '', idea: '', budget: '$25k - $50k' });
  const [pitchSubmitted, setPitchSubmitted] = useState(false);
  const [helloMessage, setHelloMessage] = useState('');
  const [helloSent, setHelloSent] = useState(false);

  if (!activeModal) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-black border border-white/20 text-white rounded-2xl p-6 sm:p-10 shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 sm:top-6 sm:right-6 text-white/60 hover:text-white transition-colors p-2 text-xl cursor-pointer"
        >
          ✕
        </button>

        {activeModal === 'pitch' && (
          <div>
            <div className="text-xs uppercase tracking-widest text-white/50 mb-2 font-mono">01 · Collaboration Brief</div>
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight mb-4">Pitch us an idea</h2>
            <p className="text-white/70 text-sm sm:text-base mb-6 leading-relaxed">
              We collaborate with bold brands, frontier tech ventures, and cultural institutions on identity, interactive systems, and spatial computing.
            </p>
            {pitchSubmitted ? (
              <div className="bg-white/5 border border-white/20 rounded-xl p-6 text-center py-8">
                <div className="text-3xl mb-2">✳︎</div>
                <h3 className="text-lg font-medium text-white mb-1">Transmission Received</h3>
                <p className="text-sm text-white/60">A member of our creative leadership will review your brief within 24 hours.</p>
                <button
                  onClick={onClose}
                  className="mt-6 inline-flex px-5 py-2 bg-white text-black text-sm rounded-full font-medium hover:bg-neutral-200 cursor-pointer"
                >
                  Return to Mainframe
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setPitchSubmitted(true);
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/60 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={pitchForm.name}
                    onChange={(e) => setPitchForm({ ...pitchForm, name: e.target.value })}
                    placeholder="Eleni Vance"
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/60 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={pitchForm.email}
                    onChange={(e) => setPitchForm({ ...pitchForm, email: e.target.value })}
                    placeholder="eleni@venture.com"
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/60 mb-1">Project Concept / Vision</label>
                  <textarea
                    required
                    rows={4}
                    value={pitchForm.idea}
                    onChange={(e) => setPitchForm({ ...pitchForm, idea: e.target.value })}
                    placeholder="Tell us what you are building, the audience, and your timeline..."
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors resize-none"
                  />
                </div>
                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-white text-black font-medium text-sm rounded-full hover:bg-neutral-200 transition-colors cursor-pointer"
                  >
                    Submit Concept
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {activeModal === 'careers' && (
          <div>
            <div className="text-xs uppercase tracking-widest text-white/50 mb-2 font-mono">02 · Studio Openings</div>
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight mb-4">Come work here</h2>
            <p className="text-white/70 text-sm sm:text-base mb-6 leading-relaxed">
              We operate at the convergence of craft, software, and human experience. Join our interdisciplinary collective.
            </p>
            <div className="space-y-4">
              {[
                { title: 'Creative Technologist', type: 'Full-time · London / Remote', spec: 'WebGL, GLSL shaders, React, physical computing' },
                { title: 'Principal Brand Designer', type: 'Full-time · New York / Hybrid', spec: 'Typography systems, editorial design, creative direction' },
                { title: 'Generative Audio Engineer', type: 'Contract · Tokyo / Remote', spec: 'Interactive web audio, spatial soundscapes, synthesizer design' },
              ].map((job) => (
                <div key={job.title} className="p-4 border border-white/10 rounded-xl hover:border-white/40 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white/[0.02]">
                  <div>
                    <h3 className="font-medium text-white text-base">{job.title}</h3>
                    <div className="text-xs text-white/60 mt-0.5">{job.type}</div>
                    <div className="text-xs text-white/40 mt-1">{job.spec}</div>
                  </div>
                  <a
                    href="mailto:careers@mainframe.co"
                    className="inline-flex items-center justify-center text-xs px-4 py-2 bg-white text-black rounded-full hover:bg-neutral-200 transition-colors self-start sm:self-auto cursor-pointer"
                  >
                    Apply Now
                  </a>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-white/50 text-center">
              Don't see your specific role? Send your portfolio to <a href="mailto:careers@mainframe.co" className="text-white underline">careers@mainframe.co</a>
            </div>
          </div>
        )}

        {activeModal === 'hello' && (
          <div>
            <div className="text-xs uppercase tracking-widest text-white/50 mb-2 font-mono">03 · Quick Note</div>
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight mb-4">Send a brief hello</h2>
            <p className="text-white/70 text-sm sm:text-base mb-6 leading-relaxed">
              Have a question, an invitation, or just want to introduce yourself? We read and reply to every message.
            </p>
            {helloSent ? (
              <div className="bg-white/5 border border-white/20 rounded-xl p-6 text-center py-8">
                <div className="text-3xl mb-2">✳︎</div>
                <h3 className="text-lg font-medium text-white mb-1">Hello received!</h3>
                <p className="text-sm text-white/60">Thanks for saying hi. We'll be in touch soon.</p>
                <button
                  onClick={onClose}
                  className="mt-6 inline-flex px-5 py-2 bg-white text-black text-sm rounded-full font-medium hover:bg-neutral-200 cursor-pointer"
                >
                  Close
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setHelloSent(true);
                }}
                className="space-y-4"
              >
                <div>
                  <textarea
                    required
                    rows={4}
                    value={helloMessage}
                    onChange={(e) => setHelloMessage(e.target.value)}
                    placeholder="Drop us a line or say hello..."
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors resize-none"
                  />
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-white/50">Direct: hello@mainframe.co</span>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-white text-black font-medium text-sm rounded-full hover:bg-neutral-200 transition-colors cursor-pointer"
                  >
                    Send Note
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {activeModal === 'operate' && (
          <div>
            <div className="text-xs uppercase tracking-widest text-white/50 mb-2 font-mono">04 · Methodology</div>
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight mb-4">See how we operate</h2>
            <div className="space-y-6 text-sm text-white/80 leading-relaxed">
              <div className="border-l-2 border-white/40 pl-4 py-1">
                <h3 className="text-white font-medium text-base mb-1">01. Typographic Rigor & Human Empathy</h3>
                <p className="text-white/60">Every interactive artifact starts with communication hierarchy. Typefaces are crafted as bespoke architectural systems rather than decorative coatings.</p>
              </div>
              <div className="border-l-2 border-white/40 pl-4 py-1">
                <h3 className="text-white font-medium text-base mb-1">02. Responsive Behavioral Kinetics</h3>
                <p className="text-white/60">Interfaces shouldn't feel like static billboards. Motion, mouse scrubbing, and dynamic physics communicate life and responsive machine intelligence.</p>
              </div>
              <div className="border-l-2 border-white/40 pl-4 py-1">
                <h3 className="text-white font-medium text-base mb-1">03. High-Velocity Prototyping</h3>
                <p className="text-white/60">We test ideas in code and WebGL from day one. Real tactile prototypes replace hundreds of static presentation decks.</p>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={onClose}
                className="px-5 py-2 bg-white text-black text-sm rounded-full font-medium hover:bg-neutral-200 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {activeModal === 'labs' && (
          <div>
            <div className="text-xs uppercase tracking-widest text-white/50 mb-2 font-mono">Mainframe Labs</div>
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight mb-4">Experimental R&D</h2>
            <p className="text-white/70 text-sm sm:text-base mb-6 leading-relaxed">
              Mainframe Labs is our experimental foundry exploring spatial interfaces, real-time kinetic shaders, adaptive typography, and generative audio pipelines.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 border border-white/10 rounded-xl bg-white/[0.02]">
                <div className="text-xs text-white/40 font-mono mb-1">PROJECT 01</div>
                <h3 className="font-medium text-white mb-1">A.R.I.A Architecture</h3>
                <p className="text-xs text-white/60">Adaptive Response Interface Agent for multimodal spatial interaction.</p>
              </div>
              <div className="p-4 border border-white/10 rounded-xl bg-white/[0.02]">
                <div className="text-xs text-white/40 font-mono mb-1">PROJECT 02</div>
                <h3 className="font-medium text-white mb-1">Kinetic Glyphs</h3>
                <p className="text-xs text-white/60">Variable font interpolation driven by acoustic resonance.</p>
              </div>
            </div>
          </div>
        )}

        {activeModal === 'studio' && (
          <div>
            <div className="text-xs uppercase tracking-widest text-white/50 mb-2 font-mono">Mainframe Studio</div>
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight mb-4">About the Studio</h2>
            <p className="text-white/70 text-sm sm:text-base mb-6 leading-relaxed">
              Mainframe is an independent creative agency and research laboratory founded in 2024. We operate as a distributed collective across London, Tokyo, and San Francisco.
            </p>
            <div className="grid grid-cols-3 gap-4 border-t border-b border-white/10 py-4 my-6 text-center">
              <div>
                <div className="text-2xl font-medium">32</div>
                <div className="text-xs text-white/50 uppercase mt-1">Exhibitions</div>
              </div>
              <div>
                <div className="text-2xl font-medium">14</div>
                <div className="text-xs text-white/50 uppercase mt-1">Global Awards</div>
              </div>
              <div>
                <div className="text-2xl font-medium">100%</div>
                <div className="text-xs text-white/50 uppercase mt-1">Independent</div>
              </div>
            </div>
          </div>
        )}

        {activeModal === 'shop' && (
          <div>
            <div className="text-xs uppercase tracking-widest text-white/50 mb-2 font-mono">Mainframe Shop</div>
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight mb-4">Objects & Editions</h2>
            <p className="text-white/70 text-sm sm:text-base mb-6 leading-relaxed">
              Limited run physical artifacts, typography specimens, and hardware peripherals designed by Mainframe.
            </p>
            <div className="space-y-3">
              <div className="p-4 border border-white/10 rounded-xl flex justify-between items-center bg-white/[0.02]">
                <div>
                  <h3 className="font-medium text-white text-sm">Mainframe Monograph 01</h3>
                  <div className="text-xs text-white/50">Hardcover typography archive · 240 pages</div>
                </div>
                <span className="text-xs uppercase px-3 py-1 bg-white/10 rounded-full text-white/70">Edition 300</span>
              </div>
              <div className="p-4 border border-white/10 rounded-xl flex justify-between items-center bg-white/[0.02]">
                <div>
                  <h3 className="font-medium text-white text-sm">Machined Aluminum Dial 0.1</h3>
                  <div className="text-xs text-white/50">USB-C scrub controller for creative suites</div>
                </div>
                <span className="text-xs uppercase px-3 py-1 bg-white/10 rounded-full text-white/70">Sold Out</span>
              </div>
            </div>
          </div>
        )}

        {activeModal === 'contact' && (
          <div>
            <div className="text-xs uppercase tracking-widest text-white/50 mb-2 font-mono">Direct Communication</div>
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight mb-4">Get in touch with Omar</h2>
            <p className="text-white/70 text-sm sm:text-base mb-6 leading-relaxed font-light">
              Available for mobile software engineering positions, real-time app architecture, and technical inquiries.
            </p>
            <div className="space-y-3 text-sm">
              {/* 1. GitHub Profile */}
              <div className="p-4 border border-white/10 rounded-xl bg-white/[0.02] flex items-center justify-between">
                <div>
                  <div className="text-xs text-white/50 uppercase font-mono">GitHub Profile</div>
                  <div className="font-medium text-white text-base mt-1">github.com/OmaarElAmri</div>
                </div>
                <a
                  href="https://github.com/OmaarElAmri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white text-black text-xs font-medium rounded-full hover:bg-neutral-200 transition-colors"
                >
                  Open GitHub ↗
                </a>
              </div>

              {/* 2. LinkedIn Profile */}
              <div className="p-4 border border-white/10 rounded-xl bg-white/[0.02] flex items-center justify-between">
                <div>
                  <div className="text-xs text-white/50 uppercase font-mono">LinkedIn Profile</div>
                  <div className="font-medium text-white text-base mt-1">linkedin.com/in/omar-el-amri</div>
                </div>
                <a
                  href="https://linkedin.com/in/omar-el-amri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-white/20 text-white text-xs font-medium rounded-full hover:bg-white hover:text-black transition-colors"
                >
                  Open LinkedIn ↗
                </a>
              </div>

              {/* 3. Email Address */}
              <div className="p-4 border border-white/10 rounded-xl bg-white/[0.02] flex items-center justify-between">
                <div>
                  <div className="text-xs text-white/50 uppercase font-mono">Email Address</div>
                  <div className="font-medium text-white text-base mt-1">omar_el_amri@icloud.com</div>
                </div>
                <a
                  href="mailto:omar_el_amri@icloud.com"
                  className="px-4 py-2 border border-white/20 text-white text-xs font-medium rounded-full hover:bg-white hover:text-black transition-colors"
                >
                  Send Email ↗
                </a>
              </div>

              {/* 4. Phone / WhatsApp */}
              <div className="p-4 border border-white/10 rounded-xl bg-white/[0.02] flex items-center justify-between">
                <div>
                  <div className="text-xs text-white/50 uppercase font-mono">Phone / WhatsApp</div>
                  <div className="font-medium text-white text-base mt-1">+216 52 070 023</div>
                </div>
                <div className="flex gap-2">
                  <a
                    href="https://wa.me/21652070023"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-medium rounded-full hover:bg-emerald-500/30 transition-colors"
                  >
                    WhatsApp
                  </a>
                  <a
                    href="tel:+21652070023"
                    className="px-3 py-1.5 bg-white/10 text-white border border-white/20 text-xs font-medium rounded-full hover:bg-white hover:text-black transition-colors"
                  >
                    Call
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
