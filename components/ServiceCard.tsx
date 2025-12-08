"use client";

import { motion } from "framer-motion";

interface ServiceCardProps {
  name: string;
  description: string;
  priceNote: string;
  highlights: string[];
}

export const ServiceCard = ({
  name,
  description,
  priceNote,
  highlights,
}: ServiceCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 flex flex-col gap-3 shadow-[0_18px_45px_rgba(15,23,42,0.75)]"
    >
      <h3 className="font-semibold text-lg text-slate-50">{name}</h3>
      <p className="text-sm text-slate-300/90">{description}</p>
      <ul className="text-sm text-slate-300/90 space-y-1 mt-1">
        {highlights.map((h) => (
          <li key={h}>• {h}</li>
        ))}
      </ul>
      <p className="mt-2 text-sm font-medium text-brandYellow">{priceNote}</p>
    </motion.div>
  );
};
