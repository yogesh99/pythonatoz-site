"use client";

import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  tag: string;
  link: string;
}

export default function ServiceCard({
  title,
  description,
  tag,
  link,
}: ServiceCardProps) {
  return (
    <div className="p-6 bg-[#092540]/70 rounded-xl border border-white/10 shadow-md hover:shadow-yellow-400/10 transition">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <span className="px-2 py-0.5 text-xs rounded-full bg-yellow-400/20 text-yellow-300">
          {tag}
        </span>
      </div>

      <p className="text-sm text-slate-300 mt-3 leading-relaxed">
        {description}
      </p>

      {link ? (
        <Link href={link}>
          <span className="text-brandYellow text-sm mt-4 inline-block hover:underline underline-offset-4">
            Learn more →
          </span>
        </Link>
      ) : (
        <span className="text-brandYellow text-sm mt-4 opacity-50 cursor-not-allowed inline-block">
          Learn more →
        </span>
      )}
    </div>
  );
}
