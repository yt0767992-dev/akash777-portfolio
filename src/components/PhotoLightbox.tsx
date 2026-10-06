import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, MapPin, Camera, Download, Sparkles } from 'lucide-react';
import { portfolioConfig } from '../data/portfolioData';

interface PhotoLightboxProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PhotoLightbox: React.FC<PhotoLightboxProps> = ({ isOpen, onClose }) => {
  const { personal } = portfolioConfig;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-dark-950/90 backdrop-blur-xl cursor-zoom-out"
        >
          {/* Main Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full glass-panel rounded-3xl border border-cyan-400/40 p-4 sm:p-6 shadow-[0_0_60px_rgba(0,240,255,0.25)] flex flex-col cursor-default"
          >
            {/* Top Bar with Info & Close Button */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-400 to-purple-600 flex items-center justify-center text-white">
                  <Camera className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-1.5">
                    {personal.name} — Studio Portrait HD
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  </h3>
                  <p className="text-[11px] font-mono text-slate-400">
                    High-Fidelity Original Portrait
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={personal.avatarUrl}
                  download="Akash777_HD_Portrait.jpg"
                  className="p-2 rounded-xl bg-dark-900 border border-white/10 text-slate-300 hover:text-cyan-300 hover:border-cyan-400/40 transition-colors"
                  title="Download Original HD Portrait"
                >
                  <Download className="w-4 h-4" />
                </a>

                <button
                  onClick={onClose}
                  className="p-2 rounded-xl bg-dark-900 border border-white/10 text-slate-400 hover:text-white hover:border-red-500/40 transition-colors cursor-pointer"
                  title="Close Lightbox"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* High-Resolution Photo Display */}
            <div className="relative rounded-2xl overflow-hidden bg-dark-900 max-h-[70vh] flex items-center justify-center border border-white/5 shadow-2xl">
              <img
                src={personal.avatarUrl}
                alt={personal.name}
                className="w-full h-auto max-h-[70vh] object-contain filter contrast-[1.04] brightness-[1.02] saturate-[1.05]"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
              />

              {/* Watermark Tag */}
              <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-xl bg-dark-950/85 backdrop-blur-md border border-cyan-400/40 text-xs font-mono text-cyan-300 flex items-center gap-1.5 shadow-lg">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Verified Authenticity • 100% Real Face</span>
              </div>
            </div>

            {/* Bottom Meta Bar */}
            <div className="pt-4 mt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>Location: {personal.location} (Heritage: {personal.homeCountry})</span>
              </div>
              <span className="text-cyan-400/80">Press ESC or click outside to close</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
