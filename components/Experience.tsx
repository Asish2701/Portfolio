import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { EXPERIENCE } from '../constants';
import { MapPin } from 'lucide-react';

export const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} id="experience" className="py-24 px-6 bg-black relative overflow-hidden">
       {/* Parallax Background Elements */}
       <motion.div 
         style={{ y: y1 }}
         className="absolute top-[10%] right-[-5%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" 
       />
       <motion.div 
         style={{ y: y2 }}
         className="absolute bottom-[10%] left-[-5%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" 
       />

       <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Professional Experience</h2>
          <p className="text-zinc-400">Experience across creative production, campus media, and hands-on execution in high-output teams.</p>
        </motion.div>

        {/* Timeline Line with Gradient */}
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-500/50 before:via-purple-500/50 before:to-transparent">
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              {/* Timeline Dot with Glow */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-800 bg-black shadow-[0_0_10px_rgba(0,0,0,0.5)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <div className={`w-3 h-3 rounded-full ${index === 0 ? 'bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)] animate-pulse' : 'bg-zinc-600 group-hover:bg-blue-400 transition-colors'}`} />
              </div>
              
              {/* Glass Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-zinc-900/20 p-6 rounded-3xl border border-white/5 backdrop-blur-xl hover:bg-zinc-900/40 hover:border-white/10 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-blue-900/5 relative overflow-hidden">
                {/* Subtle sheen on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2 relative z-10">
                    <h3 className="font-bold text-lg text-white group-hover:text-blue-200 transition-colors">{exp.role}</h3>
                    <span className="text-xs font-mono text-zinc-400 bg-zinc-800/50 px-2 py-1 rounded border border-zinc-700/50">{exp.period}</span>
                </div>
                <div className="text-blue-400 font-medium mb-3 flex items-center gap-2 text-sm relative z-10">
                    {exp.company}
                </div>
                {exp.description && (
                    <p className="text-zinc-400 text-sm leading-relaxed mb-4 group-hover:text-zinc-300 transition-colors relative z-10">
                    {exp.description}
                    </p>
                )}
                <div className="flex items-center gap-2 text-xs text-zinc-500 relative z-10">
                    <MapPin size={12} />
                    {exp.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};