import React from 'react';
import { BackgroundEffects } from './components/BackgroundEffects';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Languages } from './components/Languages';
import { Projects } from './components/Projects';
import { SocialConnect } from './components/SocialConnect';
import { DiscordServers } from './components/DiscordServers';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MusicPlayer } from './components/MusicPlayer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#06060c] text-slate-100 relative selection:bg-cyan-500/30 selection:text-cyan-300">
      {/* Dynamic Optimized Background */}
      <BackgroundEffects />

      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col">
        <Hero />
        <About />
        <Languages />
        <Projects />
        <SocialConnect />
        <DiscordServers />
        <Contact />
      </main>

      {/* Floating Cyber Music Deck: Luz Roja (bxkq) with Mute/Unmute & Equalizer */}
      <MusicPlayer />

      {/* Futuristic Footer */}
      <Footer />
    </div>
  );
};

export default App;
