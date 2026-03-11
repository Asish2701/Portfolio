import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ArrowUpRight, Leaf, Map, ShoppingCart, Video, Brain, Layout } from 'lucide-react';

const ProjectIcon = ({ title }: { title: string }) => {
  // RenderX Visuals - Media/Video Agency
  if (title.includes("RenderX")) return <Video size={24} className="text-pink-400 drop-shadow-[0_0_8px_rgba(244,114,182,0.5)]" />;
  
  // AI Plant Disease - Nature/Tech
  if (title.includes("Plant")) return <Leaf size={24} className="text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]" />;
  
  // Sikkim Tourism - Travel/Maps
  if (title.includes("Tourism")) return <Map size={24} className="text-orange-400 drop-shadow-[0_0_8px_rgba(251,146,60,0.5)]" />;
  
  // Market Basket - Retail/Data
  if (title.includes("Basket")) return <ShoppingCart size={24} className="text-violet-400 drop-shadow-[0_0_8px_rgba(167,139,250,0.5)]" />;
  
  // Generic AI
  if (title.includes("AI")) return <Brain size={24} className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" />;
  
  // Fallback
  return <Layout size={24} className="text-zinc-400" />;
};

export const Projects: React.FC = () => {
  return (
    <section id="work" className="py-32 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Selected Work</h2>
          <p className="text-zinc-400 max-w-2xl text-lg">
            Selected data science, analytics, and production work spanning market basket analysis, BI reporting, and applied problem solving.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col justify-between p-8 rounded-3xl bg-zinc-900/20 border border-white/10 hover:bg-zinc-900/40 hover:border-white/20 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-zinc-800/50 rounded-2xl border border-white/5 group-hover:scale-110 transition-transform duration-500 group-hover:border-white/10">
                    <ProjectIcon title={project.title} />
                  </div>
                  <div className="p-2 rounded-full bg-white/5 text-zinc-400 group-hover:bg-white/10 group-hover:text-white transition-colors">
                    <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-zinc-400 leading-relaxed mb-8 group-hover:text-zinc-300 transition-colors">
                  {project.description}
                </p>
              </div>

              <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
                {project.tags?.map((tag, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 rounded-full text-xs font-medium bg-zinc-800/50 text-zinc-400 border border-white/5 group-hover:border-white/10 transition-colors group-hover:bg-zinc-800/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
