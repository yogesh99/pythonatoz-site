"use client";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  tag: string;
  link: string;
}

export function ProjectCard({
  title,
  description,
  tag,
  link,
}: ProjectCardProps) {
  return (
    <div className="p-6 bg-[#09243d]/70 border border-white/10 rounded-xl shadow-lg hover:shadow-xl hover:border-brandYellow/60 transition-all">
      <div className="flex justify-between items-start">
        <h3 className="text-white font-semibold text-lg leading-snug">
          {title}
        </h3>

        <span className="px-3 py-1 text-[11px] rounded-full border border-yellow-400/70 text-yellow-300">
          {tag}
        </span>
      </div>

      <p className="text-slate-300 text-sm mt-2 leading-relaxed">
        {description}
      </p>

      <Link href={link}>
        <span className="text-brandYellow text-sm mt-4 inline-block hover:underline underline-offset-4">
          View details →
        </span>
      </Link>
    </div>
  );
}
