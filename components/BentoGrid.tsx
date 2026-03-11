import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO, SKILLS, EDUCATION, PROJECTS } from '../constants';
import { GraduationCap, Award, Zap, Globe, ArrowUpRight, Layout } from 'lucide-react';

// Reusable Spotlight Card Component
const SpotlightCard = ({ 
  children, 
  className = "", 
  delay = 0 
}: { 
  children?: React.ReactNode; 
  className?: string;
  delay?: number;
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <motion.div
      ref={divRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/30 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] group ${className}`}
    >
      {/* Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px transition duration-300 z-10"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.06), transparent 40%)`,
        }}
      />
      
      {/* Content */}
      <div className="relative z-20 h-full">
        {children}
      </div>
    </motion.div>
  );
};

export const BentoGrid: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-[#050505]">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
        >
            Overview
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[180px]">
          {/* About Card - Large */}
          <SpotlightCard className="md:col-span-2 md:row-span-2 p-8 hover:border-zinc-700/50 transition-colors">
            <div className="h-full flex flex-col justify-between">
                <div>
                    <div className="w-10 h-10 rounded-full bg-zinc-800/50 flex items-center justify-center mb-4 text-blue-400 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-blue-500/10 border border-white/5">
                        <Globe size={20} />
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-4">Professional Summary</h3>
                    <p className="text-zinc-400 leading-relaxed text-lg group-hover:text-zinc-300 transition-colors">
                        {PERSONAL_INFO.about}
                    </p>
                </div>
                <div className="mt-8">
                     <div className="flex flex-wrap gap-2">
                        {SKILLS[0].items.map((skill, i) => (
                            <span key={i} className="px-3 py-1 rounded-full bg-zinc-800/40 text-zinc-300 text-xs border border-white/10 group-hover:border-blue-500/30 transition-colors">
                                {skill}
                            </span>
                        ))}
                     </div>
                </div>
            </div>
          </SpotlightCard>

          {/* Education Card 1 */}
          <SpotlightCard delay={0.1} className="p-6 flex flex-col justify-between">
            <GraduationCap className="text-blue-500 mb-2 group-hover:rotate-12 transition-transform" size={24} />
            <div>
                <h4 className="text-white font-medium text-sm mb-1">{EDUCATION[0].institution}</h4>
                <p className="text-zinc-500 text-xs">{EDUCATION[0].degree}</p>
                <p className="text-zinc-600 text-xs mt-2 font-mono">{EDUCATION[0].period}</p>
            </div>
          </SpotlightCard>

          {/* Certifications - Tall */}
          <SpotlightCard delay={0.2} className="md:row-span-2 p-6 flex flex-col">
            <div className="flex items-center gap-2 mb-6">
                <div className="p-2 bg-purple-500/10 rounded-lg border border-purple-500/20">
                    <Award className="text-purple-400" size={20} />
                </div>
                <h3 className="text-white font-semibold">Certifications</h3>
            </div>
            <div className="space-y-4 flex-1">
                {SKILLS[1].items.map((cert, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-zinc-800/30 border border-white/5 group-hover:bg-zinc-800/50 transition-colors">
                        <p className="text-zinc-300 text-sm">{cert}</p>
                    </div>
                ))}
            </div>
          </SpotlightCard>

          {/* Featured Project Card */}
          <SpotlightCard delay={0.25} className="p-6 flex flex-col justify-between group cursor-pointer hover:bg-zinc-800/40 transition-colors">
             <a href={PROJECTS[0].link} target="_blank" rel="noreferrer" className="block h-full flex flex-col justify-between">
                 <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20">
                        <Layout className="text-blue-400" size={20} />
                    </div>
                    <ArrowUpRight className="text-zinc-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={20} />
                 </div>
                 <div>
                    <h3 className="text-white font-semibold mb-2 group-hover:text-blue-200 transition-colors">{PROJECTS[0].title}</h3>
                    <p className="text-zinc-400 text-xs leading-relaxed line-clamp-3">
                        {PROJECTS[0].description}
                    </p>
                 </div>
             </a>
          </SpotlightCard>

          {/* Skills / Stats */}
           <SpotlightCard delay={0.3} className="p-6 flex flex-col justify-center items-center text-center">
             <div className="p-3 bg-yellow-500/10 rounded-full mb-3 border border-yellow-500/20">
                 <Zap className="text-yellow-500" size={24} />
             </div>
             <h3 className="text-2xl font-bold text-white">100K+</h3>
             <p className="text-zinc-500 text-xs uppercase tracking-wider mt-1">Transactions Analyzed</p>
          </SpotlightCard>

        </div>
      </div>
    </section>
  );
};