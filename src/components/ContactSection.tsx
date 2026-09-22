import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check, Mail, Download } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { MagneticButton } from './MagneticButton';

interface ContactSectionProps {
  onOpenMessageModal?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenMessageModal }) => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    subject: 'Collaboration Inquiry'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${formState.subject} - from ${formState.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-[#F7F7F5] border-b border-[#DDDDD8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left Column: Editorial Statement & Verified Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex flex-col justify-between space-y-12"
          >
            <div className="space-y-6">
              <span className="text-xs font-mono tracking-[0.25em] text-[#0F4C81] uppercase block font-bold">
                LET'S TALK
              </span>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#111111] tracking-tight uppercase leading-[1.05]">
                Let's create something meaningful.
              </h2>

              <p className="text-base sm:text-lg text-[#6B6B6B] leading-relaxed max-w-md">
                Have a project, idea, collaboration, or opportunity in mind?
              </p>

              {/* Direct Email Display with Copy Functionality */}
              <div className="pt-4">
                <div className="inline-flex items-center space-x-3 p-3 bg-white/70 border border-[#DDDDD8] shadow-2xs">
                  <Mail className="w-4 h-4 text-[#0F4C81]" />
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-xs sm:text-sm font-mono font-semibold text-[#111111] hover:text-[#0F4C81] transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 hover:bg-[#E8E8E4] transition-colors text-[#6B6B6B] hover:text-[#111111] cursor-pointer"
                    title="Copy Email Address"
                    aria-label="Copy Email Address"
                  >
                    {copied ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
                {copied && (
                  <span className="block text-[11px] text-emerald-700 font-mono mt-1.5 animate-fade-in">
                    ✓ Email address copied to clipboard
                  </span>
                )}
              </div>
            </div>

            {/* Direct Channels & Social Links */}
            <div className="space-y-4 pt-8 border-t border-[#DDDDD8]">
              <span className="text-xs font-mono text-[#6B6B6B] tracking-widest uppercase block">
                Direct Channels &amp; Visuals
              </span>

              <div className="flex flex-col space-y-3">
                <a
                  href={PERSONAL_INFO.socials.personalInstagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="OPEN ↗"
                  className="group inline-flex items-center space-x-2 text-sm sm:text-base font-bold text-[#111111] hover:text-[#0F4C81] transition-colors w-fit"
                >
                  <span className="relative pb-0.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#0F4C81] group-hover:after:w-full after:transition-all after:duration-300">
                    {PERSONAL_INFO.socials.personalInstagram.label}
                  </span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#6B6B6B] group-hover:text-[#0F4C81]" />
                </a>

                <a
                  href={PERSONAL_INFO.socials.photographyInstagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="OPEN ↗"
                  className="group inline-flex items-center space-x-2 text-sm sm:text-base font-bold text-[#111111] hover:text-[#0F4C81] transition-colors w-fit"
                >
                  <span className="relative pb-0.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#0F4C81] group-hover:after:w-full after:transition-all after:duration-300">
                    {PERSONAL_INFO.socials.photographyInstagram.label}
                  </span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#6B6B6B] group-hover:text-[#0F4C81]" />
                </a>

                <a
                  href={PERSONAL_INFO.socials.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="OPEN ↗"
                  className="group inline-flex items-center space-x-2 text-sm sm:text-base font-bold text-[#111111] hover:text-[#0F4C81] transition-colors w-fit"
                >
                  <span className="relative pb-0.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#0F4C81] group-hover:after:w-full after:transition-all after:duration-300">
                    {PERSONAL_INFO.socials.linkedin.label}
                  </span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#6B6B6B] group-hover:text-[#0F4C81]" />
                </a>

                <a
                  href="/CV_Alexsander_Josse_Sulistio.pdf"
                  download="CV_Alexsander_Josse_Sulistio.pdf"
                  data-cursor="DOWNLOAD"
                  className="group inline-flex items-center space-x-2 text-sm sm:text-base font-bold text-[#0F4C81] hover:text-[#111111] transition-colors w-fit pt-2"
                >
                  <Download className="w-4 h-4 text-[#0F4C81] transform group-hover:translate-y-0.5 transition-transform" />
                  <span className="relative pb-0.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#111111] group-hover:after:w-full after:transition-all after:duration-300">
                    Download Curriculum Vitae (PDF)
                  </span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Direct Message Composer */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 bg-white/70 border border-[#DDDDD8] p-8 md:p-10 shadow-xs"
          >
            <div className="mb-6">
              <span className="text-xs font-mono tracking-widest text-[#6B6B6B] uppercase block mb-1">
                Direct Inquiry
              </span>
              <h3 className="text-xl font-bold text-[#111111] tracking-tight uppercase">
                Send a Message
              </h3>
            </div>

            {submitted ? (
              <div className="p-6 bg-[#F7F7F5] border border-[#0F4C81]/30 space-y-3">
                <span className="text-xs font-mono font-bold text-[#0F4C81] uppercase block">
                  Message Prepared
                </span>
                <p className="text-sm text-[#111111]">
                  Thank you! Your mail client has been opened with your inquiry. Alternatively, you can always write directly to <strong className="font-mono">{PERSONAL_INFO.email}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-mono text-[#0F4C81] hover:underline block pt-2 cursor-pointer"
                >
                  Send another note
                </button>
              </div>
            ) : (
              <form onSubmit={handleSendMessage} className="space-y-5">
                <div>
                  <label className="block text-xs font-mono tracking-wider uppercase text-[#111111] mb-2">
                    Your Name / Organization
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Elena Hartono"
                    className="w-full px-4 py-3 bg-[#F7F7F5] border border-[#DDDDD8] focus:border-[#111111] focus:outline-none text-sm text-[#111111]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono tracking-wider uppercase text-[#111111] mb-2">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="elena@example.com"
                    className="w-full px-4 py-3 bg-[#F7F7F5] border border-[#DDDDD8] focus:border-[#111111] focus:outline-none text-sm text-[#111111]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono tracking-wider uppercase text-[#111111] mb-2">
                    Subject / Area of Interest
                  </label>
                  <select
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-[#F7F7F5] border border-[#DDDDD8] focus:border-[#111111] focus:outline-none text-sm text-[#111111]"
                  >
                    <option value="Creative Direction & Visual Content">Creative Direction &amp; Visual Content</option>
                    <option value="Photography / Videography Project">Photography / Videography Project</option>
                    <option value="Web Development & Engineering">Web Development &amp; Engineering</option>
                    <option value="Easteria Brand & Collaboration">Easteria Brand &amp; Collaboration</option>
                    <option value="General Opportunity">General Opportunity</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono tracking-wider uppercase text-[#111111] mb-2">
                    Message / Project Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell me about your project, timeline, or vision..."
                    className="w-full px-4 py-3 bg-[#F7F7F5] border border-[#DDDDD8] focus:border-[#111111] focus:outline-none text-sm text-[#111111] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  data-cursor="LET'S TALK"
                  className="w-full py-4 bg-[#111111] text-[#F7F7F5] hover:bg-[#0F4C81] transition-all duration-300 text-xs font-bold tracking-[0.2em] uppercase flex items-center justify-center space-x-2 group cursor-pointer shadow-sm"
                >
                  <span className="transform group-hover:translate-x-0.5 transition-transform">
                    LET'S TALK
                  </span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
