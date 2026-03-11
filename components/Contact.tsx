import React from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-black border-t border-zinc-900">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
            Let's create something<br />
            <span className="text-zinc-600">exceptional together.</span>
          </h2>
          <p className="text-zinc-400 text-lg mb-12 max-w-xl mx-auto">
            Open to data science internships, analytics collaborations, and Python-focused problem solving.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
             {SOCIAL_LINKS.map((link, i) => (
                <motion.a 
                    key={i} 
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, type: "spring", stiffness: 400, damping: 20 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="group flex items-center gap-3 px-6 py-3 bg-zinc-900 rounded-full text-zinc-300 hover:text-white hover:bg-zinc-800 hover:border-zinc-700 transition-all border border-zinc-800 cursor-pointer shadow-lg hover:shadow-blue-500/10"
                >
                    <link.icon size={18} className="group-hover:text-blue-400 transition-colors" />
                    <span className="font-medium">{link.name}</span>
                    <ArrowUpRight size={14} className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                </motion.a>
             ))}
          </div>

          <div className="mt-20 pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-zinc-600 text-sm">
            <p>© {new Date().getFullYear()} Asish Sharma. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
                <span>Kolkata, India</span>
                <span>•</span>
                <span>Open to internships</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};