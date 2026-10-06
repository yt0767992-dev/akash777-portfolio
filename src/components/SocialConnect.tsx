import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Share2, 
  ExternalLink, 
  Copy, 
  Check, 
  MessageCircle, 
  Facebook, 
  Instagram, 
  MessageSquare
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioConfig } from '../data/portfolioData';

export const SocialConnect: React.FC = () => {
  const { socials } = portfolioConfig;
  const [copiedDiscord, setCopiedDiscord] = useState(false);

  const handleDiscordCopy = () => {
    navigator.clipboard.writeText(socials.discordUsername);
    setCopiedDiscord(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 }
    });
    setTimeout(() => setCopiedDiscord(false), 2500);
  };

  const socialPlatforms = [
    {
      id: 'whatsapp',
      name: 'WhatsApp Direct',
      username: 'Direct Chat Link',
      url: socials.whatsapp,
      icon: <MessageCircle className="w-8 h-8 text-[#25D366]" />,
      actionText: 'Chat on WhatsApp',
      color: '#25D366',
      accentBg: 'rgba(37, 211, 102, 0.1)',
      borderColor: 'rgba(37, 211, 102, 0.3)',
      shadowColor: 'rgba(37, 211, 102, 0.25)',
      description: 'Quick messaging & direct communication'
    },
    {
      id: 'facebook',
      name: 'Facebook Profile',
      username: 'Official Facebook',
      url: socials.facebook,
      icon: <Facebook className="w-8 h-8 text-[#1877F2]" />,
      actionText: 'Visit Facebook',
      color: '#1877F2',
      accentBg: 'rgba(24, 119, 242, 0.1)',
      borderColor: 'rgba(24, 119, 242, 0.3)',
      shadowColor: 'rgba(24, 119, 242, 0.25)',
      description: 'Social updates, announcements & posts'
    },
    {
      id: 'instagram',
      name: 'Instagram Profile',
      username: '@akash_777_1_2',
      url: socials.instagram,
      icon: <Instagram className="w-8 h-8 text-[#E4405F]" />,
      actionText: 'Follow on Instagram',
      color: '#E4405F',
      accentBg: 'rgba(228, 64, 95, 0.1)',
      borderColor: 'rgba(228, 64, 95, 0.3)',
      shadowColor: 'rgba(228, 64, 95, 0.25)',
      description: 'Photos, stories, gaming moments & reels'
    },
    {
      id: 'discord',
      name: 'Discord Identity',
      username: socials.discordUsername,
      url: '#',
      icon: <MessageSquare className="w-8 h-8 text-[#5865F2]" />,
      actionText: copiedDiscord ? 'Username Copied!' : 'Copy Discord Username',
      color: '#5865F2',
      accentBg: 'rgba(88, 101, 242, 0.1)',
      borderColor: 'rgba(88, 101, 242, 0.3)',
      shadowColor: 'rgba(88, 101, 242, 0.25)',
      description: 'Gaming voice chats, coding & server hangouts',
      isDiscord: true
    }
  ];

  return (
    <section id="socials" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono tracking-widest uppercase mb-4"
          >
            <Share2 className="w-3.5 h-3.5 text-emerald-400" />
            Direct Social Reach
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            CONNECT <span className="text-gradient-cyan">WITH ME</span>
          </motion.h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Reach out directly across my authentic verified channels. Guaranteed zero fake profiles.
          </p>
        </div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialPlatforms.map((platform, index) => (
            <motion.div
              key={platform.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between relative group overflow-hidden border border-white/10"
              style={{
                borderColor: platform.borderColor,
                boxShadow: `0 10px 30px -10px ${platform.shadowColor}`
              }}
            >
              {/* Dynamic Aura Glow in background */}
              <div
                className="absolute top-0 right-0 w-36 h-36 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"
                style={{ backgroundColor: platform.color }}
              />

              <div>
                {/* Platform Icon & Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className="p-3.5 rounded-2xl border flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{
                      backgroundColor: platform.accentBg,
                      borderColor: platform.borderColor
                    }}
                  >
                    {platform.icon}
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 px-2.5 py-1 rounded-md bg-dark-900 border border-white/5">
                    Official
                  </span>
                </div>

                {/* Platform Names */}
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {platform.name}
                </h3>
                <p className="text-xs font-mono text-cyan-400/90 mb-3 truncate">
                  {platform.username}
                </p>
                <p className="text-xs text-slate-400 leading-relaxed mb-6 font-light">
                  {platform.description}
                </p>
              </div>

              {/* Action Button */}
              {platform.isDiscord ? (
                <button
                  onClick={handleDiscordCopy}
                  className="w-full py-3 px-4 rounded-xl font-bold text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
                  style={{
                    backgroundColor: platform.color,
                    color: '#ffffff'
                  }}
                >
                  {copiedDiscord ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>{platform.actionText}</span>
                    </>
                  )}
                </button>
              ) : (
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl font-bold text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition-all text-white group-hover:brightness-110 shadow-md"
                  style={{
                    backgroundColor: platform.color
                  }}
                >
                  <span>{platform.actionText}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
