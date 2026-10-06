import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Users, ExternalLink, ShieldCheck, Sparkles, Terminal } from 'lucide-react';
import { portfolioConfig } from '../data/portfolioData';

export const DiscordServers: React.FC = () => {
  const { discordServers } = portfolioConfig;

  return (
    <section id="discord" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#5865F2]/10 border border-[#5865F2]/30 text-[#5865F2] text-xs font-mono tracking-widest uppercase mb-4"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            Official Hangouts & Networks
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            MY <span className="text-gradient-purple">DISCORD SERVERS</span>
          </motion.h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Join my exclusive Discord communities for developers, programmers, gamers, and technology pioneers.
          </p>
        </div>

        {/* Server Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {discordServers.map((server, index) => (
            <motion.div
              key={server.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="relative p-[1.5px] rounded-3xl bg-gradient-to-tr from-[#5865F2] via-cyan-400 to-purple-600 shadow-neon-purple group"
            >
              <div className="bg-dark-950/90 backdrop-blur-2xl rounded-[23px] p-6 sm:p-8 h-full flex flex-col justify-between relative overflow-hidden">
                
                {/* Background ambient badge logo */}
                <div className="absolute -bottom-10 -right-10 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                  <MessageSquare className="w-64 h-64 text-[#5865F2]" />
                </div>

                <div>
                  {/* Top Bar with Tag & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-[#5865F2]/20 border border-[#5865F2]/40 flex items-center justify-center text-[#5865F2] group-hover:scale-105 transition-transform shadow-lg shadow-[#5865F2]/20">
                        <MessageSquare className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono text-[#5865F2] uppercase tracking-wider block">
                          {server.tag}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {server.name}
                        </h3>
                      </div>
                    </div>

                    {server.isPlaceholder ? (
                      <span className="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 text-[10px] font-mono uppercase tracking-wider">
                        Configurable
                      </span>
                    ) : (
                      <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-[10px] font-mono uppercase tracking-wider flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        Live & Active
                      </span>
                    )}
                  </div>

                  {/* Server Description */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
                    “{server.description}”
                  </p>

                  {/* Community Perks / Tags */}
                  <div className="grid grid-cols-2 gap-2.5 mb-8">
                    <div className="p-2.5 rounded-xl bg-dark-900/80 border border-white/5 flex items-center gap-2 text-xs font-mono text-slate-300">
                      <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>Friendly Community</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-dark-900/80 border border-white/5 flex items-center gap-2 text-xs font-mono text-slate-300">
                      <Terminal className="w-4 h-4 text-purple-400 shrink-0" />
                      <span>Dev & Tech Hub</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-dark-900/80 border border-white/5 flex items-center gap-2 text-xs font-mono text-slate-300">
                      <Users className="w-4 h-4 text-pink-400 shrink-0" />
                      <span>Gaming Hangouts</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-dark-900/80 border border-white/5 flex items-center gap-2 text-xs font-mono text-slate-300">
                      <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Creative Ideas</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Join CTA */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs font-mono text-slate-400">
                    {server.isPlaceholder ? (
                      <span className="text-amber-400/90 font-mono">
                        Invite link editable in portfolioData.ts
                      </span>
                    ) : (
                      <span className="text-slate-400">
                        Official Permanent Invite Link
                      </span>
                    )}
                  </div>

                  <a
                    href={server.inviteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg ${
                      server.isPlaceholder
                        ? 'bg-dark-900 border border-amber-500/50 text-amber-300 hover:bg-dark-850'
                        : 'bg-[#5865F2] hover:bg-[#4752c4] text-white shadow-[#5865F2]/30 hover:scale-105'
                    }`}
                  >
                    <span>JOIN SERVER</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
