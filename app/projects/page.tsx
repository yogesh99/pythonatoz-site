import { ProjectCard } from "@/components/ProjectCard";

const allProjects = [
  {
    title: "Business Automation Scripts",
    description:
      "Automate reports, notifications, file operations and routine tasks for small businesses.",
    tag: "Automation",
  },
  {
    title: "Resume Builder in Python",
    description:
      "Python tool that generates clean resumes from structured input data.",
    tag: "Career",
  },
  {
    title: "URL Shortener Service",
    description:
      "Self-hosted short link generator with analytics-ready structure.",
    tag: "Web",
  },
  {
    title: "PDF Text Extractor",
    description:
      "Extracts and cleans text from PDFs in bulk, ideal for research & documentation.",
    tag: "PDF",
  },
  {
    title: "ChatGPT API Tools",
    description:
      "AI-powered helpers using the ChatGPT API to draft content, replies or summaries.",
    tag: "AI",
  },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-semibold text-slate-50">Projects</h1>
      <p className="text-[16px] text-slate-300 max-w-2xl">
        A selection of Python projects focused on automation, productivity, and
        real-world use cases. Each project is built with clarity, reusability
        and documentation in mind.
      </p>
      <div className="grid md:grid-cols-3 gap-5">
        {allProjects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </div>
  );
}
