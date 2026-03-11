import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import MaskReveal from './MaskReveal';

export const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const avatarImageStyle = { objectPosition: 'center 8%' } as const;

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-24 pb-16 md:pt-28 md:pb-24 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-black pointer-events-none">
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen" 
        />
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]) }}
          className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen" 
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <motion.div 
        style={{ y: textY }}
        className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center"
      >
        {/* Profile Avatar with Blending */}
        <motion.div
            initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="group relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mb-7 md:mb-8"
        >
            {/* Pulsing Glow Background - Added Amber/Yellow to match photo */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-yellow-500/40 via-blue-500/40 to-purple-500/40 blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse" />
            
            {/* Gradient Border Ring - Blends photo yellow with site blue/purple */}
            <div className="relative w-full h-full rounded-full p-1 bg-gradient-to-tr from-yellow-500 via-blue-500 to-purple-500">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-black relative">
                    <MaskReveal
                        className="w-full h-full rounded-full"
                        radius={64}
                        base={
                          <div className="relative w-full h-full">
                            <img
                              src={PERSONAL_INFO.profilePic}
                              alt={PERSONAL_INFO.name}
                              className="w-full h-full object-cover grayscale contrast-125 saturate-75 scale-[1.26]"
                              style={avatarImageStyle}
                            />
                            <div className="absolute inset-x-0 bottom-0 h-[34%] bg-gradient-to-t from-black via-black/75 to-transparent pointer-events-none" />
                          </div>
                        }
                        reveal={
                          <div className="relative w-full h-full">
                            <img
                              src={PERSONAL_INFO.profilePic}
                              alt={PERSONAL_INFO.name}
                              className="w-full h-full object-cover scale-[1.26] saturate-110"
                              style={avatarImageStyle}
                            />
                            <div className="absolute inset-x-0 bottom-0 h-[34%] bg-gradient-to-t from-black via-black/75 to-transparent pointer-events-none" />
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/18 via-transparent to-yellow-300/16 mix-blend-screen" />
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/25 to-transparent opacity-80 pointer-events-none mix-blend-overlay" />
                          </div>
                        }
                    />
                </div>
            </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-800 text-zinc-300 text-xs font-medium mb-6 md:mb-7 backdrop-blur-sm shadow-[0_0_15px_-3px_rgba(255,255,255,0.1)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Available for new projects
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 md:mb-5"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40">
            {PERSONAL_INFO.name}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40, filter: 'blur(5px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed"
        >
          {PERSONAL_INFO.role}
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 to-zinc-500 text-lg font-normal">Building ML models, BI dashboards, and data-driven applications that turn raw data into decisions.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-7 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center"
        >
          <a href="#contact" className="relative group px-8 py-4 bg-white text-black rounded-full font-semibold text-sm transition-all hover:scale-105 active:scale-95 flex items-center gap-2 overflow-hidden">
             {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-zinc-300/30 to-transparent z-0" />
            <span className="relative z-10 flex items-center gap-2">
                Get in Touch
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          <a href="#work" className="px-8 py-4 bg-zinc-900/50 backdrop-blur-md text-white border border-zinc-800 rounded-full font-semibold text-sm transition-all hover:bg-zinc-800 hover:border-zinc-600 hover:shadow-[0_0_20px_-5px_rgba(255,255,255,0.1)]">
            View Work
          </a>
        </motion.div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
        className="absolute bottom-5 md:bottom-8 left-1/2 -translate-x-1/2 text-zinc-500 animate-bounce"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
};