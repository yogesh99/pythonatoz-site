import { ServiceCard } from "@/components/ServiceCard";

export default function ServicesPage() {
  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-semibold text-slate-50">Services</h1>
      <p className="text-[16px] text-slate-300 max-w-2xl">
        Whether you&apos;re a founder, creator, student or small business – I
        can help you turn your idea or repetitive task into a clean Python
        solution.
      </p>
      <div className="grid md:grid-cols-3 gap-5 mt-4">
        <ServiceCard
          name="Script Fix / Mini Task"
          description="Small Python-related help: debugging, improvements, or adding a minor feature."
          priceNote="Best for small, well-defined requests. Pricing shared after understanding scope."
          highlights={["Bug fixes", "Small features", "Code review"]}
        />
        <ServiceCard
          name="Automation for Business"
          description="Custom automation built around your existing tools (Excel, Google Sheets, APIs, email, etc.)."
          priceNote="Great for solo founders, agencies and teams wanting to save time each week."
          highlights={[
            "Repetitive workflow automation",
            "API + email + file operations",
            "Documentation & handover",
          ]}
        />
        <ServiceCard
          name="Full Project Build"
          description="End-to-end Python project with clear structure, GitHub repo and basic docs."
          priceNote="Ideal for long-term tools, SaaS prototypes, and serious portfolio projects."
          highlights={[
            "Planning & architecture",
            "Clean, scalable code",
            "Support during integration",
          ]}
        />
      </div>
      <p className="text-xs text-slate-400 mt-4">
        To discuss a project, use the contact form or reach out via Instagram /
        email with your idea, budget and timeline.
      </p>
    </div>
  );
}
