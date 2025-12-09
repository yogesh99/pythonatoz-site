"use client";

import { ProjectCard } from "@/components/ProjectCard";
import ServiceCard from "@/components/ServiceCard";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Business Automation Scripts",
    description:
      "Custom Python scripts that automate repetitive business tasks – reports, emails, data cleaning and more.",
    tag: "Automation",
  },
  {
    title: "Resume Builder with Python",
    description:
      "Generate tailored, ATS-friendly resumes powered by Python templates and data.",
    tag: "Career",
  },
  {
    title: "URL Shortener Service",
    description:
      "A self-hosted URL shortener built with Python, ideal for brands & campaigns.",
    tag: "Web",
  },
];

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero */}

      <section className="pt-6 grid md:grid-cols-[1.6fr,1.1fr] gap-10 items-center">
        <div>
          <motion.h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
            Python automation, projects <br />
            <span className="text-brandYellow glow-yellow">
              and freelance-ready solutions.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-slate-300 text-[16px] max-w-xl mt-4"
          >
            I build real-world Python solutions: automation for businesses,
            tools for creators, and portfolio-worthy projects you can learn
            from. Hire me for custom Python work or follow along and upskill
            with PythonAtoZ.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-6 flex flex-wrap gap-4"
          >
            <Link
              href="/services"
              className="btn-brand text-brandYellow font-bold"
            >
              Hire for Python Project
            </Link>
            <Link
              href="/projects"
              className="btn-outline-brand text-brandYellow font-bold"
            >
              Explore Projects
            </Link>
          </motion.div>
          <p className="mt-4 text-sm text-slate-100">
            Also on Instagram & YouTube: tutorials, breakdowns, and
            build-in-public.
          </p>
        </div>

        {/* Glassy info card */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="rounded-3xl border border-white/10 bg-linear-to-br from-white/10 via-white/5 to-emerald-500/10 backdrop-blur-2xl px-6 py-6 shadow-[0_30px_80px_rgba(15,23,42,0.9)] flex flex-col gap-4"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-300/80 mb-1">
              PythonAtoZ • Focus
            </p>
            <h2 className="text-lg font-semibold text-slate-50">
              Automation • APIs • Real Projects
            </h2>
            <p className="text-sm text-slate-200/90 mt-1.5">
              Current stack: Python, FastAPI, Selenium, automation scripts, PDF
              tools, URL shorteners, AI tools using ChatGPT API.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm text-slate-200/90">
            <div className="space-y-1">
              <p className="text-[12px] text-brandYellow font-bold">
                Ideal clients
              </p>
              <p>Solo founders, small businesses, creators & students.</p>
            </div>
            <div className="space-y-1">
              <p className="text-[12px] text-brandYellow font-bold">
                What you get
              </p>
              <p>
                Clean code, clear docs, and automation that actually saves time.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Featured projects */}
      <section className="space-y-5">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-xl font-semibold text-slate-50">
            Featured Projects
          </h2>
          <Link
            href="/projects"
            className="text-sm text-emerald-300 hover:text-emerald-200"
          >
            View all projects →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {projects.map((p) => (
            <ProjectCard link={""} key={p.title} {...p} />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="mt-20 space-y-5">
        <h2 className="text-2xl font-semibold text-white">Services</h2>
        <p className="text-slate-300 max-w-2xl">
          I help businesses and creators build automation scripts, Python tools,
          and AI-driven applications. Clean, fast and production-ready
          development.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <ServiceCard
            title="Business Automation Scripts"
            description="Automate repetitive tasks, scraping, email workflows, data processing & more."
            tag="Automation"
            link="/services"
          />

          <ServiceCard
            title="Python Tools & Apps"
            description="We build custom Python-based tools like URL shorteners, PDF apps, scrapers, dashboards."
            tag="Tools"
            link="/services"
          />

          <ServiceCard
            title="AI + ChatGPT Solutions"
            description="AI-powered assistants, content generation tools, chatbot integrations & automation."
            tag="AI"
            link="/services"
          />
        </div>
      </section>
    </div>
  );
}
