import React, { useEffect } from 'react';
import { Hero } from './components/Hero';
import { BentoGrid } from './components/BentoGrid';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { ChatWidget } from './components/ChatWidget';
import { motion, useScroll, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
import MaskReveal from './components/MaskReveal';
import { Analytics } from '@vercel/analytics/react';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Global Cursor Glow Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="bg-black min-h-screen text-zinc-100 font-sans selection:bg-blue-500/30 relative">
      {/* Global Cursor Glow */}
      <motion.div
        className="fixed top-0 left-0 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none z-0 mix-blend-screen"
        style={{ 
            x: mouseX, 
            y: mouseY, 
            translateX: "-50%", 
            translateY: "-50%" 
        }}
      />

      {/* Film Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[60] opacity-[0.03] mix-blend-overlay">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <filter id="noiseFilter">
                <feTurbulence 
                    type="fractalNoise" 
                    baseFrequency="0.65" 
                    numOctaves="3" 
                    stitchTiles="stitch" 
                />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 origin-left z-50"
        style={{ scaleX }}
      />

      <nav className="fixed top-0 inset-x-0 z-40 flex justify-center p-4">
        <div className="px-6 py-3 rounded-full bg-zinc-950/40 backdrop-blur-2xl border border-white/10 flex gap-6 text-sm font-medium text-zinc-400 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] ring-1 ring-white/5">
           <a href="#home" className="hover:text-white hover:bg-white/5 px-3 py-1 rounded-full transition-all">Home</a>
           <a href="#about" className="hover:text-white hover:bg-white/5 px-3 py-1 rounded-full transition-all">About</a>
           <a href="#work" className="hover:text-white hover:bg-white/5 px-3 py-1 rounded-full transition-all">Work</a>
           <a href="#experience" className="hover:text-white hover:bg-white/5 px-3 py-1 rounded-full transition-all">Experience</a>
           <a href="#contact" className="hover:text-white hover:bg-white/5 px-3 py-1 rounded-full transition-all">Contact</a>
        </div>
      </nav>

      <main className="relative z-10">
        <Hero />
        <BentoGrid />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <ChatWidget />
      <Analytics />
    </div>
  );
};

export default App;

export function Home() {
  return (
    <main className="min-h-screen bg-black grid place-items-center p-6">
      <MaskReveal
        className="rounded-2xl border border-zinc-800 max-w-md w-full"
        radius={110}
        base={
          <div className="p-8 bg-zinc-950 text-zinc-500">
            <h2 className="text-2xl font-semibold">Asish Sharma</h2>
            <p>Frontend Developer</p>
          </div>
        }
        reveal={
          <div className="p-8 bg-gradient-to-r from-blue-500 to-violet-500 text-white">
            <h2 className="text-2xl font-semibold">Asish Sharma</h2>
            <p>Available for new projects</p>
          </div>
        }
      />
    </main>
  );
}