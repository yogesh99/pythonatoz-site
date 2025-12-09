import ServiceCard from "@/components/ServiceCard";

export default function ServicesPage() {
  return (
    <div className="max-w-6xl mx-auto py-20 px-6 text-white">
      <h1 className="text-4xl md:text-5xl font-bold text-brandYellow drop-shadow-[0_0_18px_rgba(255,255,0,0.4)]">
        Services
      </h1>
      <p className="text-slate-300  mt-2">
        I help businesses & creators build automation scripts, Python tools, and
        AI-driven solutions. Clean architecture, clear documentation &
        production-quality development.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <ServiceCard
          title="Business Automation Scripts"
          description="Automate spreadsheets, emails, PDF work, notifications, scrapers & repetitive business workflows."
          tag="Automation"
          link="/contact"
        />

        <ServiceCard
          title="Custom Python Tools"
          description="Build apps like PDF extractors, URL shorteners, scrapers, dashboards, & internal tools."
          tag="Tools"
          link="/contact"
        />

        <ServiceCard
          title="AI + ChatGPT Tools"
          description="Build content generators, resume bots, assistants & domain-specific AI applications."
          tag="AI"
          link="/contact"
        />
      </div>
    </div>
  );
}
