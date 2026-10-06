import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Volume2, 
  VolumeX, 
  Play, 
  Pause, 
  Disc3, 
  Music2, 
  Minimize2, 
  Maximize2, 
  Sparkles 
} from 'lucide-react';

export const MusicPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.65);
  // Default to minimized on mobile screens (< 768px) for clean browsing
  const [isMinimized, setIsMinimized] = useState<boolean>(
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );
  const [hasInteracted, setHasInteracted] = useState<boolean>(false);
  const [showAutoNotice, setShowAutoNotice] = useState<boolean>(true);

  // Autoplay attempt on mount & on first user interaction
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume;

    const startAudio = () => {
      audio.play().then(() => {
        setIsPlaying(true);
        setHasInteracted(true);
        setShowAutoNotice(false);
      }).catch(() => {
        setIsPlaying(false);
      });
    };

    startAudio();

    const handleFirstUserInteraction = () => {
      if (!hasInteracted && audio) {
        audio.play().then(() => {
          setIsPlaying(true);
          setHasInteracted(true);
          setShowAutoNotice(false);
        }).catch(() => {});
      }
    };

    window.addEventListener('click', handleFirstUserInteraction, { once: true, passive: true });
    window.addEventListener('keydown', handleFirstUserInteraction, { once: true, passive: true });
    window.addEventListener('touchstart', handleFirstUserInteraction, { once: true, passive: true });

    return () => {
      window.removeEventListener('click', handleFirstUserInteraction);
      window.removeEventListener('keydown', handleFirstUserInteraction);
      window.removeEventListener('touchstart', handleFirstUserInteraction);
    };
  }, [hasInteracted, volume]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => {
        setIsPlaying(true);
        setHasInteracted(true);
        setShowAutoNotice(false);
      }).catch(err => console.error(err));
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isMuted) {
      audio.muted = false;
      setIsMuted(false);
    } else {
      audio.muted = true;
      setIsMuted(true);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (audioRef.current) {
      audioRef.current.volume = newVol;
      if (newVol === 0) {
        audioRef.current.muted = true;
        setIsMuted(true);
      } else if (isMuted) {
        audioRef.current.muted = false;
        setIsMuted(false);
      }
    }
  };

  return (
    <>
      {/* HTML5 Audio with Loop for Luz Roja */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src="/luz_roja.webm" type="audio/webm" />
        <source src="/luz_roja.mp3" type="audio/mpeg" />
      </audio>

      {/* Floating Futuristic Music Controller (Mobile & Desktop Responsive) */}
      <div className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-40 flex flex-col items-end gap-2 max-w-[calc(100vw-2rem)]">
        
        {/* Autoplay prompt toast on mobile and desktop */}
        <AnimatePresence>
          {!isPlaying && showAutoNotice && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={togglePlay}
              className="cursor-pointer px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl bg-dark-900/95 border border-cyan-400/50 backdrop-blur-md shadow-neon-blue flex items-center gap-2.5 text-xs text-slate-200 hover:border-cyan-300 transition-all group"
            >
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500" />
              </span>
              <div className="flex items-center gap-1.5 font-mono text-[11px] sm:text-xs">
                <Music2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Tap to Play <strong className="text-cyan-300">Luz Roja</strong></span>
              </div>
              <Sparkles className="w-3 h-3 text-pink-400 shrink-0" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Music Player Container */}
        <div
          className={`glass-panel border border-white/10 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 ${
            isMinimized ? 'p-2 bg-dark-950/90' : 'p-3 sm:p-4 bg-dark-950/95 w-[270px] sm:w-[300px]'
          } ${isPlaying ? 'border-cyan-500/40 shadow-neon-blue/20' : 'border-white/10'}`}
        >
          {isMinimized ? (
            /* Minimized Icon Mode for Mobile Comfort */
            <div className="flex items-center gap-2">
              <button
                onClick={togglePlay}
                className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center text-white shadow-md active:scale-95 transition-transform"
                title={isPlaying ? "Pause Luz Roja" : "Play Luz Roja"}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
              </button>

              <button
                onClick={toggleMute}
                className="p-2 rounded-xl text-slate-300 hover:text-cyan-300 bg-white/5 transition-colors"
                title={isMuted ? "Unmute Sound" : "Mute Sound"}
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
              </button>

              <button
                onClick={() => setIsMinimized(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-white bg-white/5 transition-colors"
                title="Expand Music Player"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            /* Full Cyber Deck Mode */
            <div className="flex flex-col gap-2.5">
              
              {/* Header: Track Info & Minimize */}
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <div className="relative shrink-0">
                    <Disc3
                      className={`w-8 h-8 sm:w-9 sm:h-9 text-cyan-400 ${
                        isPlaying && !isMuted ? 'animate-spin' : ''
                      }`}
                      style={{ animationDuration: '3.5s' }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 animate-pulse" />
                    </div>
                  </div>

                  <div className="flex flex-col truncate">
                    <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Soundtrack
                    </span>
                    <span className="text-xs font-bold text-white tracking-wide truncate">
                      Luz Roja
                    </span>
                    <span className="text-[9px] sm:text-[10px] text-slate-400 font-mono truncate">
                      bxkq • Drift Phonk
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setIsMinimized(true)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors shrink-0"
                  title="Minimize Player"
                >
                  <Minimize2 className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Hardware Equalizer Bar */}
              <div className="h-5 px-2 py-1 rounded-lg bg-dark-900/90 border border-white/5 flex items-end justify-between gap-0.5 sm:gap-1">
                {[50, 80, 60, 95, 35, 75, 100, 65, 85, 45, 90, 55, 70, 85].map((height, i) => (
                  <div
                    key={i}
                    style={{
                      height: isPlaying && !isMuted ? `${height}%` : '15%',
                      animation: isPlaying && !isMuted ? `pulseWave 0.5s ease-in-out infinite alternate ${i * 0.05}s` : 'none',
                    }}
                    className={`w-1 rounded-full transition-all duration-300 ${
                      i % 3 === 0
                        ? 'bg-cyan-400'
                        : i % 3 === 1
                        ? 'bg-purple-500'
                        : 'bg-pink-500'
                    }`}
                  />
                ))}
              </div>

              {/* Controls: Play/Pause, Mute/Unmute & Volume Bar */}
              <div className="flex items-center justify-between pt-1 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <button
                    onClick={togglePlay}
                    className="p-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white shadow-neon-blue transition-all active:scale-95 cursor-pointer"
                    title={isPlaying ? "Pause Luz Roja" : "Play Luz Roja"}
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
                  </button>

                  <button
                    onClick={toggleMute}
                    className={`p-2 rounded-xl border transition-all cursor-pointer ${
                      isMuted
                        ? 'bg-red-500/20 border-red-500/40 text-red-400'
                        : 'bg-dark-900 border-white/10 text-cyan-400 hover:border-cyan-400/50'
                    }`}
                    title={isMuted ? "Unmute Sound" : "Mute Sound"}
                  >
                    {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Volume Slider */}
                <div className="flex items-center gap-1.5">
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    className="w-14 sm:w-16 h-1 bg-dark-900 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                    title="Volume slider"
                  />
                  <span className="text-[9px] sm:text-[10px] font-mono text-slate-400 w-6 text-right">
                    {isMuted ? '0%' : `${Math.round(volume * 100)}%`}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
