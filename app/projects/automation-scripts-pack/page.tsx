export default function AutomationScriptsPackProject() {
  return (
    <div className="max-w-5xl mx-auto py-20 px-6 text-white">
      {/* Back to Projects */}
      <a
        href="/projects"
        className="inline-flex items-center gap-2 text-brandYellow hover:text-yellow-300 transition mb-6"
      >
        ← Back to Projects
      </a>

      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-brandYellow drop-shadow-[0_0_18px_rgba(255,255,0,0.35)]">
          Automation Scripts Pack
        </h1>
        <p className="text-slate-300 text-lg">
          A bundle of real-world Python scripts that automate repetitive tasks —
          built for businesses, creators, and developers who want to save hours
          every week.
        </p>
      </div>

      {/* Tech Stack Badges */}
      <div className="flex flex-wrap justify-center gap-3 mt-6">
        {[
          "Python",
          "Requests / Selenium",
          "Pandas / OpenPyXL",
          "Cron / Task Scheduler",
          "CLI & Script Tools",
          "API Integrations",
        ].map((tech, i) => (
          <span
            key={i}
            className="px-4 py-1.5 bg-[#0d3b5e] border border-white/10 rounded-full text-sm text-slate-200"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Project Preview / Pack Mockup */}
      <div className="my-10 mx-auto max-w-2xl bg-brandLight/10 p-4 rounded-xl shadow-lg border border-yellow-400/30">
        <img
          src="/projects/automation-scripts-pack-preview.png"
          alt="Automation Scripts Pack Preview"
          className="rounded-md w-full"
        />
      </div>

      {/* Overview */}
      <section className="mt-16 space-y-4">
        <h2 className="text-3xl font-semibold text-brandYellow">Overview</h2>
        <p className="text-slate-300 leading-relaxed">
          The Automation Scripts Pack is a collection of ready-to-use Python
          scripts that handle file operations, reporting, scraping and everyday
          business workflows. Each script is modular, configurable, and can be
          extended into a full automation system or SaaS product later.
        </p>
      </section>

      {/* Features */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold text-brandYellow mb-6">
          What&apos;s inside the pack?
        </h2>
        <div className="grid md:grid-cols-2 gap-5">
          {[
            "File & folder automation (rename, move, sort)",
            "Excel/CSV automation – cleaning, merging, reports",
            "PDF utilities – merge, split, compress, extract pages",
            "Bulk email sender for simple campaigns/updates",
            "Web scraping templates for products & data",
            "APIs & utility scripts for day-to-day tasks",
          ].map((item, i) => (
            <div
              key={i}
              className="p-4 bg-[#0B3554]/40 border border-white/10 rounded-xl"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Architecture / How it Works */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-brandYellow mb-3">
          How it Works
        </h2>

        <div className="p-6 bg-[#0d3e61]/40 rounded-xl text-slate-300 space-y-3 border border-white/10">
          <p>1. Choose the script you need (e.g. Excel clean-up, PDF merge).</p>
          <p>
            2. Configure a simple <code>.env</code> or config file if required.
          </p>
          <p>3. Run script via command line / task scheduler.</p>
          <p>
            4. Script processes files / data and generates output automatically.
          </p>
          <p>5. Can be upgraded into a web UI or dashboard later.</p>
        </div>
      </section>

      {/* Use Cases */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-brandYellow mb-6">
          Use Cases
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Solo founders automating repetitive workflows",
            "Freelancers delivering automation value to clients",
            "Small businesses handling reports & files daily",
            "Creators managing content, assets & exports",
            "Developers using scripts as boilerplates",
            "Students building portfolio automation projects",
          ].map((item, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-[#092c47]/50 border border-white/10"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-20 text-center">
        <p className="text-slate-300 mb-4 text-lg">
          Want a custom automation script pack tailored to your business or
          workflow?
        </p>
        <a
          href="/contact"
          className="px-8 py-3 bg-brandYellow text-black font-bold rounded-full hover:bg-yellow-300 transition"
        >
          Contact to Build Similar Tool
        </a>
      </section>
    </div>
  );
}
