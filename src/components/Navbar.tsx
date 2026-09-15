import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'ABOUT', href: '#about' },
    { label: 'CREATIVE', href: '#creative' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'WORK', href: '#work' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="main-navigation"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#F7F7F5]/90 backdrop-blur-md py-4 border-b border-[#DDDDD8]'
            : 'bg-transparent py-6 md:py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            id="nav-brand-logo"
            href="#hero"
            className="group flex flex-col tracking-tight"
          >
            <span className="text-sm md:text-base font-extrabold tracking-[0.2em] text-[#111111] group-hover:text-[#0F4C81] transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[10px] tracking-[0.15em] text-[#6B6B6B] uppercase hidden sm:inline">
              Portfolio
            </span>
          </a>

          {/* Desktop Links */}
          <nav id="desktop-nav-menu" className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-xs font-semibold tracking-[0.18em] text-[#111111] hover:text-[#0F4C81] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#0F4C81] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}

            <a
              id="nav-cv-btn"
              href="/CV_Alexsander_Josse_Sulistio.pdf"
              download="CV_Alexsander_Josse_Sulistio.pdf"
              className="inline-flex items-center space-x-1.5 text-xs font-bold tracking-[0.18em] text-[#111111] hover:text-[#0F4C81] border border-[#DDDDD8] hover:border-[#0F4C81] px-3.5 py-2 transition-all duration-300 rounded-none group"
            >
              <Download className="w-3.5 h-3.5" />
              <span>CV</span>
            </a>

            <button
              id="nav-cta-btn"
              onClick={onContactClick}
              className="inline-flex items-center space-x-1.5 text-xs font-bold tracking-[0.18em] text-[#0F4C81] hover:text-[#111111] border border-[#0F4C81]/30 hover:border-[#111111] px-4 py-2 transition-all duration-300 rounded-none group"
            >
              <span>LET'S TALK</span>
              <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-3 md:hidden">
            <button
              id="mobile-talk-btn"
              onClick={onContactClick}
              className="text-[11px] font-bold tracking-[0.15em] text-[#0F4C81] border border-[#0F4C81]/30 px-2.5 py-1.5"
            >
              TALK ↗
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#111111] hover:text-[#0F4C81] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-overlay"
          className="fixed inset-0 z-50 bg-[#F7F7F5] flex flex-col justify-between p-8 md:hidden animate-fade-in"
        >
          <div className="flex items-center justify-between border-b border-[#DDDDD8] pb-6">
            <span className="text-sm font-extrabold tracking-[0.2em] text-[#111111]">
              {PERSONAL_INFO.name}
            </span>
            <button
              id="close-mobile-menu-btn"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#111111] hover:text-[#0F4C81]"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col space-y-6 py-12">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-2xl font-bold tracking-[0.1em] text-[#111111] hover:text-[#0F4C81] flex items-center justify-between group"
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#6B6B6B] font-mono">0{idx + 1}</span>
              </a>
            ))}
          </div>

          <div className="border-t border-[#DDDDD8] pt-6 flex flex-col space-y-4">
            <a
              id="drawer-cv-btn"
              href="/CV_Alexsander_Josse_Sulistio.pdf"
              download="CV_Alexsander_Josse_Sulistio.pdf"
              className="w-full py-3.5 text-center border border-[#0F4C81] text-[#0F4C81] text-xs font-bold tracking-[0.2em] hover:bg-[#0F4C81] hover:text-white transition-colors flex items-center justify-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD CV (PDF)</span>
            </a>

            <button
              id="drawer-talk-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onContactClick();
              }}
              className="w-full py-4 text-center bg-[#111111] text-[#F7F7F5] text-xs font-bold tracking-[0.2em] hover:bg-[#0F4C81] transition-colors flex items-center justify-center space-x-2"
            >
              <span>LET'S TALK</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <div className="text-[11px] text-[#6B6B6B] tracking-wider uppercase text-center">
              {PERSONAL_INFO.location} • {PERSONAL_INFO.origin}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
