import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  MessageCircle, 
  Facebook, 
  Instagram, 
  MessageSquare, 
  Copy, 
  Check, 
  ExternalLink, 
  Send, 
  Sparkles, 
  ShieldCheck,
  QrCode,
  X
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioConfig } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const { socials, discordServers } = portfolioConfig;
  const [copiedDiscord, setCopiedDiscord] = useState(false);
  const [formData, setFormData] = useState({ name: '', message: '' });
  const [showQrModal, setShowQrModal] = useState(false);

  const copyDiscord = () => {
    navigator.clipboard.writeText(socials.discordUsername);
    setCopiedDiscord(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.85 }
    });
    setTimeout(() => setCopiedDiscord(false), 2500);
  };

  const handleQuickWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const encoded = encodeURIComponent(`Hi Akash, I'm ${formData.name || 'someone'}. ${formData.message}`);
    window.open(`https://wa.me/message/CQ5X4Q5J3T2YH1?text=${encoded}`, '_blank');
  };

  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(socials.whatsapp)}&bgcolor=06060c&color=00f0ff&margin=10`;

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-widest uppercase mb-4"
          >
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            Direct Communication
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            LET'S <span className="text-gradient-cyber">TALK & COLLABORATE</span>
          </motion.h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Have a project proposal, want to discuss software, or connect for gaming? Reach out instantly.
          </p>
        </div>

        {/* Main Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct Channels & Verified Badges */}
          <div className="lg:col-span-6 flex flex-col justify-between glass-panel p-6 sm:p-8 rounded-3xl border border-white/10">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase tracking-widest">
                  <Sparkles className="w-4 h-4" />
                  <span>Verified Direct Channels</span>
                </div>

                {/* Scan WhatsApp QR Button */}
                <button
                  onClick={() => setShowQrModal(true)}
                  className="px-3 py-1.5 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 hover:text-white text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer hover:bg-cyan-500/25"
                >
                  <QrCode className="w-3.5 h-3.5 text-cyan-400" />
                  <span>WhatsApp QR</span>
                </button>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                Get In Touch With Akash 777
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-8 font-light">
                Feel free to connect directly through any platform below. I typically respond quickly on WhatsApp and Discord.
              </p>

              {/* Direct Buttons List */}
              <div className="flex flex-col gap-3.5 mb-8">
                {/* WhatsApp Button */}
                <a
                  href={socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 rounded-2xl bg-dark-900/90 border border-[#25D366]/30 hover:border-[#25D366] hover:bg-[#25D366]/10 transition-all duration-200"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366]">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <span className="text-xs font-mono uppercase text-[#25D366] block">
                        WhatsApp Instant Chat
                      </span>
                      <span className="text-sm font-semibold text-white group-hover:text-cyan-300">
                        Chat Directly On WhatsApp
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#25D366] group-hover:translate-x-0.5 transition-transform" />
                </a>

                {/* Facebook Button */}
                <a
                  href={socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 rounded-2xl bg-dark-900/90 border border-[#1877F2]/30 hover:border-[#1877F2] hover:bg-[#1877F2]/10 transition-all duration-200"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#1877F2]/20 border border-[#1877F2]/40 flex items-center justify-center text-[#1877F2]">
                      <Facebook className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <span className="text-xs font-mono uppercase text-[#1877F2] block">
                        Facebook Account
                      </span>
                      <span className="text-sm font-semibold text-white group-hover:text-cyan-300">
                        Visit Facebook Profile
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#1877F2] group-hover:translate-x-0.5 transition-transform" />
                </a>

                {/* Instagram Button */}
                <a
                  href={socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 rounded-2xl bg-dark-900/90 border border-[#E4405F]/30 hover:border-[#E4405F] hover:bg-[#E4405F]/10 transition-all duration-200"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#E4405F]/20 border border-[#E4405F]/40 flex items-center justify-center text-[#E4405F]">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <span className="text-xs font-mono uppercase text-[#E4405F] block">
                        Instagram Profile
                      </span>
                      <span className="text-sm font-semibold text-white group-hover:text-cyan-300">
                        @akash_777_1_2
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#E4405F] group-hover:translate-x-0.5 transition-transform" />
                </a>

                {/* Discord Username Copy */}
                <div className="flex items-center justify-between p-4 rounded-2xl bg-dark-900/90 border border-[#5865F2]/40">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#5865F2]/20 border border-[#5865F2]/40 flex items-center justify-center text-[#5865F2]">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <span className="text-xs font-mono uppercase text-[#5865F2] block">
                        Discord Username
                      </span>
                      <span className="text-sm font-mono font-bold text-white">
                        {socials.discordUsername}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={copyDiscord}
                    className="px-3.5 py-1.5 rounded-lg bg-[#5865F2]/20 hover:bg-[#5865F2]/40 text-[#5865F2] hover:text-white border border-[#5865F2]/40 text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    {copiedDiscord ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedDiscord ? "Copied" : "Copy"}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Discord Server Invitation Link Box */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-[#5865F2]/20 to-purple-600/20 border border-[#5865F2]/40 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-mono uppercase text-slate-300 block">
                  Official Community
                </span>
                <span className="text-sm font-bold text-white">
                  Join {discordServers[0].name}
                </span>
              </div>
              <a
                href={discordServers[0].inviteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-[#5865F2] hover:bg-[#4752c4] text-white text-xs font-bold font-mono tracking-wider transition-all shadow-md active:scale-95"
              >
                Join Server
              </a>
            </div>
          </div>

          {/* Right Column: Quick Interactive Messenger */}
          <div className="lg:col-span-6 glass-card p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-purple-400 text-xs font-mono uppercase tracking-widest mb-3">
                <Send className="w-4 h-4" />
                <span>Instant Message Dispatcher</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6 font-light">
                Type your message below to immediately send it directly to my WhatsApp.
              </p>

              <form onSubmit={handleQuickWhatsApp} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Your Name or Handle
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Rivera"
                    className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-sm placeholder:text-slate-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Your Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your inquiry, project proposal, or greeting here..."
                    className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-sm placeholder:text-slate-600 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 hover:from-cyan-400 hover:to-pink-400 text-white font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-neon-blue transition-all cursor-pointer active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Send to Akash via WhatsApp</span>
                </button>
              </form>
            </div>

            {/* Privacy note */}
            <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Direct end-to-end communication with zero third-party tracking.</span>
            </div>
          </div>

        </div>
      </div>

      {/* WhatsApp Scan QR Modal */}
      <AnimatePresence>
        {showQrModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-400/50 shadow-2xl max-w-sm w-full text-center relative"
            >
              <button
                onClick={() => setShowQrModal(false)}
                className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white bg-dark-900 border border-white/10"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="w-12 h-12 rounded-2xl bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] flex items-center justify-center mx-auto mb-4">
                <QrCode className="w-6 h-6" />
              </div>

              <h4 className="text-xl font-bold text-white mb-1">
                Scan to Chat on WhatsApp
              </h4>
              <p className="text-xs text-slate-400 mb-6 font-mono">
                Point your phone camera to start a direct chat with Akash 777.
              </p>

              <div className="p-3 bg-dark-950 rounded-2xl border border-cyan-500/40 inline-block shadow-neon-blue mb-6">
                <img
                  src={qrUrl}
                  alt="WhatsApp QR Code"
                  className="w-52 h-52 object-contain rounded-xl"
                  loading="lazy"
                />
              </div>

              <a
                href={socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Open WhatsApp Directly</span>
              </a>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
