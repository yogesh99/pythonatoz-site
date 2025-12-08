"use client";

import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  tag: string;
}

export const ProjectCard = ({ title, description, tag }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 shadow-[0_18px_45px_rgba(15,23,42,0.75)]"
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-lg text-slate-50">{title}</h3>
        <span className="text-[11px] px-2 py-1 rounded-full bg-brandYellow-500/10 text-brandYellow border border-brandYellow">
          {tag}
        </span>
      </div>
      <p className="text-sm text-slate-300/90 mb-3">{description}</p>
      <button className="text-xs font-medium text-brandYellow group-hover:text-brandYellow-200">
        View details →
      </button>
    </motion.div>
  );
};
