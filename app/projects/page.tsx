import { ProjectCard } from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto py-20 px-6 text-white">
      <h1 className="text-4xl md:text-5xl font-bold text-brandYellow drop-shadow-[0_0_18px_rgba(255,255,0,0.4)]">
        Projects
      </h1>
      <p className="text-slate-300 mt-2">
        A selection of Python projects focused on automation, productivity, and
        real-world use cases. Each project is built with clarity, reusability
        and documentation in mind.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <ProjectCard
          title="Business Automation Scripts"
          description="Automate reports, file operations, notifications and routine tasks."
          tag="Automation"
          link="/projects/automation-scripts-pack"
        />

        <ProjectCard
          title="Resume Builder in Python"
          description="Generate clean, ATS-friendly resumes using templates."
          tag="Career"
          link="/projects/resume-builder"
        />

        <ProjectCard
          title="URL Shortener Service"
          description="Short-link generator with redirect support & tracking."
          tag="Web"
          link="/projects/url-shortener"
        />

        <ProjectCard
          title="PDF Text Extractor"
          description="Extract and clean text from PDFs for documentation & research."
          tag="PDF"
          link="/projects/pdf-extractor"
        />
      </div>
    </div>
  );
}
