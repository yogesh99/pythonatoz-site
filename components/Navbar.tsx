"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-brandDark/80 backdrop-blur-xl border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" width="90" height="90" />
          <span className="font-semibold text-lg tracking-tight text-white">
            Python<span className="text-brandYellow font-bold">AtoZ</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative transition 
                  ${
                    isActive
                      ? "text-brandYellow font-medium"
                      : "text-slate-200 hover:text-brandYellow"
                  }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute left-0 -bottom-1 h-0.5 w-full bg-brandYellow rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <Link
          href="/services"
          className="hidden md:inline-flex bg-brandYellow text-black px-4 py-2 rounded-full text-xs font-semibold shadow hover:bg-yellow-300 transition"
        >
          Hire for Python Work
        </Link>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-3xl text-brandYellow"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-brandDark/95 backdrop-blur-xl px-6 py-4 space-y-3 border-t border-white/10"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block text-base py-2 transition
                    ${
                      isActive
                        ? "text-brandYellow font-semibold"
                        : "text-slate-200 hover:text-brandYellow"
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              href="/services"
              onClick={() => setOpen(false)}
              className="inline-block w-full text-center bg-brandYellow text-black font-semibold py-3 mt-2 rounded-full hover:bg-yellow-300 transition"
            >
              Hire for Project
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
