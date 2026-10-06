import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Shield, Cpu, Copy, Check, Sparkles, Play } from 'lucide-react';
import { portfolioConfig } from '../data/portfolioData';

export const CyberTerminal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sys' | 'stack' | 'bio'>('sys');
  const [copied, setCopied] = useState(false);
  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setUptime(prev => prev + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatUptime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs < 10 ? '0' : ''}${secs}s`;
  };

  const copyScript = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full glass-panel rounded-3xl border border-white/10 overflow-hidden shadow-2xl relative">
      {/* Top Window Bar */}
      <div className="px-5 py-3.5 bg-dark-900/90 border-b border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_8px_#ef4444]" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_8px_#eab308]" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-[0_0_8px_#10b981]" />
          <span className="ml-3 text-xs font-mono text-slate-400 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            akash777@cyber-core:~$
          </span>
        </div>

        {/* Live Status and Uptime */}
        <div className="flex items-center gap-3 font-mono text-[11px] text-slate-400">
          <span className="hidden sm:inline-flex items-center gap-1 text-cyan-400">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            SYS_ONLINE
          </span>
          <span className="text-slate-500">|</span>
          <span>UPTIME: {formatUptime(uptime)}</span>
        </div>
      </div>

      {/* Terminal Tabs */}
      <div className="flex items-center px-4 pt-2 border-b border-white/5 bg-dark-950/60 gap-2 overflow-x-auto">
        <button
          onClick={() => setActiveTab('sys')}
          className={`px-3.5 py-1.5 rounded-t-xl text-xs font-mono tracking-wider transition-all flex items-center gap-1.5 ${
            activeTab === 'sys'
              ? 'bg-dark-900 text-cyan-300 border-t-2 border-cyan-400'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Cpu className="w-3.5 h-3.5 text-cyan-400" />
          <span>system_info.sh</span>
        </button>

        <button
          onClick={() => setActiveTab('stack')}
          className={`px-3.5 py-1.5 rounded-t-xl text-xs font-mono tracking-wider transition-all flex items-center gap-1.5 ${
            activeTab === 'stack'
              ? 'bg-dark-900 text-purple-300 border-t-2 border-purple-400'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Shield className="w-3.5 h-3.5 text-purple-400" />
          <span>stack_matrix.json</span>
        </button>

        <button
          onClick={() => setActiveTab('bio')}
          className={`px-3.5 py-1.5 rounded-t-xl text-xs font-mono tracking-wider transition-all flex items-center gap-1.5 ${
            activeTab === 'bio'
              ? 'bg-dark-900 text-pink-300 border-t-2 border-pink-400'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-pink-400" />
          <span>identity_manifest.env</span>
        </button>
      </div>

      {/* Terminal Screen Body */}
      <div className="p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto bg-dark-950/90 min-h-[220px]">
        <AnimatePresence mode="wait">
          {activeTab === 'sys' && (
            <motion.div
              key="sys"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className="space-y-2 text-slate-300"
            >
              <p className="text-cyan-400 font-bold flex items-center gap-2">
                <Play className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400" />
                EXEC: ./init_developer_profile.sh --target=production
              </p>
              <div className="pl-4 space-y-1 text-slate-400 border-l border-cyan-500/20">
                <p>&gt; <span className="text-slate-200">IDENTIFIER:</span> <span className="text-cyan-300 font-bold">{portfolioConfig.personal.name}</span></p>
                <p>&gt; <span className="text-slate-200">ROLE:</span> Full-Stack Developer | Programmer | Content Creator</p>
                <p>&gt; <span className="text-slate-200">LOCATION:</span> {portfolioConfig.personal.location} (Heritage: {portfolioConfig.personal.homeCountry})</p>
                <p>&gt; <span className="text-slate-200">SECURITY:</span> Verified Identity • Zero Third-Party Tracking</p>
                <p>&gt; <span className="text-slate-200">DISCORD_ID:</span> {portfolioConfig.personal.discordUsername}</p>
                <p>&gt; <span className="text-slate-200">AUDIO_SUB_SYS:</span> Luz Roja by bxkq [PLAYING]</p>
                <p>&gt; <span className="text-emerald-400 font-bold">STATUS:</span> [READY_FOR_COMMISSIONS_AND_COLLABORATIONS]</p>
              </div>
              <p className="text-slate-500 pt-2 flex items-center">
                akash777@cyber-core:~$ <span className="w-2 h-4 bg-cyan-400 ml-1 inline-block animate-pulse" />
              </p>
            </motion.div>
          )}

          {activeTab === 'stack' && (
            <motion.div
              key="stack"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className="space-y-1 text-slate-300"
            >
              <p className="text-purple-400 font-bold">&gt; cat stack_matrix.json</p>
              <pre className="text-purple-300/90 text-xs sm:text-sm overflow-x-auto">
{`{
  "developer": "AKASH 777",
  "frontend": ["React 18", "TypeScript", "Tailwind CSS", "Framer Motion"],
  "backend_and_bots": ["Node.js", "Python", "Discord.js", "REST APIs"],
  "native_and_systems": ["C", "C++", "C#", "Rust", "Go"],
  "database": ["SQL", "MongoDB"],
  "architecture": "High-Performance Cyber UI & Scalable Apps"
}`}
              </pre>
              <p className="text-slate-500 pt-1 flex items-center">
                akash777@cyber-core:~$ <span className="w-2 h-4 bg-purple-400 ml-1 inline-block animate-pulse" />
              </p>
            </motion.div>
          )}

          {activeTab === 'bio' && (
            <motion.div
              key="bio"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className="space-y-2 text-slate-300"
            >
              <p className="text-pink-400 font-bold">&gt; env | grep MANIFEST</p>
              <div className="pl-4 space-y-1 text-slate-400 border-l border-pink-500/20">
                <p>&gt; <span className="text-pink-300">MANIFEST_MOTTO:</span> "Building exceptional digital experiences, gaming tools, and tech platforms."</p>
                <p>&gt; <span className="text-pink-300">PASSIONS:</span> Programming, Software Development, Competitive Gaming, Content Creation</p>
                <p>&gt; <span className="text-pink-300">COMMUNITY:</span> DEVELOPER ZONE Discord Community</p>
              </div>
              <p className="text-slate-500 pt-2 flex items-center">
                akash777@cyber-core:~$ <span className="w-2 h-4 bg-pink-400 ml-1 inline-block animate-pulse" />
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Terminal Footer with Quick Copy Action */}
      <div className="px-5 py-2.5 bg-dark-900/60 border-t border-white/5 flex items-center justify-between text-xs font-mono">
        <span className="text-slate-500">interactive cyber shell v2.4</span>
        <button
          onClick={() => copyScript(`npx akash777 --connect --discord=${portfolioConfig.personal.discordUsername}`)}
          className="px-3 py-1 rounded-lg bg-dark-850 hover:bg-dark-800 text-slate-300 hover:text-cyan-300 border border-white/10 flex items-center gap-1.5 transition-colors cursor-pointer"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? "Copied Command" : "Copy Quick Command"}</span>
        </button>
      </div>
    </div>
  );
};
