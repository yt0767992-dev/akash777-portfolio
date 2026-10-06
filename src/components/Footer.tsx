import React from 'react';
import { ArrowUp, Sparkles, MessageCircle, Facebook, Instagram, MessageSquare, Music } from 'lucide-react';
import { portfolioConfig } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { personal, socials } = portfolioConfig;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-dark-950/95 pt-16 pb-12 overflow-hidden z-10">
      {/* Top subtle glow bar */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/5">
          
          {/* Brand Info (No Company) */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl font-black text-white tracking-wider flex items-center gap-2">
                {personal.name}
                <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
              </span>
            </div>
            <p className="text-sm font-mono text-cyan-300">
              Personal Developer & Content Creator Portfolio
            </p>
            <p className="text-xs text-slate-500 mt-1">
              {personal.location} | Origin: {personal.homeCountry}
            </p>
          </div>

          {/* Social Icons List */}
          <div className="flex items-center gap-3">
            <a
              href={socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-10 h-10 rounded-xl bg-dark-900 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#25D366] hover:border-[#25D366]/50 transition-all hover:scale-110"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href={socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 rounded-xl bg-dark-900 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#1877F2] hover:border-[#1877F2]/50 transition-all hover:scale-110"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href={socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-xl bg-dark-900 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#E4405F] hover:border-[#E4405F]/50 transition-all hover:scale-110"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={portfolioConfig.discordServers[0].inviteUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
              className="w-10 h-10 rounded-xl bg-dark-900 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#5865F2] hover:border-[#5865F2]/50 transition-all hover:scale-110"
            >
              <MessageSquare className="w-5 h-5" />
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-dark-900 border border-white/10 hover:border-cyan-400 text-slate-300 hover:text-cyan-300 text-xs font-mono uppercase tracking-wider transition-all hover:scale-105 cursor-pointer shadow-md"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 text-cyan-400" />
          </button>
        </div>

        {/* Bottom Copyright, Music Mention & Tech Stack */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4 text-center sm:text-left">
          <p>© {currentYear} {personal.name}. All rights reserved.</p>
          <div className="flex items-center gap-2 text-cyan-400/80">
            <Music className="w-3.5 h-3.5 animate-pulse" />
            <span>Soundtrack: Luz Roja by bxkq</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
