export default function URLShortenerProject() {
  return (
    <div className="max-w-5xl mx-auto py-20 px-6 text-white">
      <a
        href="/projects"
        className="inline-flex items-center gap-2 text-brandYellow hover:text-yellow-300 transition mb-6"
      >
        ← Back to Projects
      </a>
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-brandYellow drop-shadow-[0_0_18px_rgba(255,255,0,0.35)]">
          URL Shortener
        </h1>
        <p className="text-slate-300 text-lg">
          A FastAPI-powered short URL generator with instant redirects —
          scalable, minimal & perfect for business workflows.
        </p>
      </div>

      {/* Tech Stack Badges */}
      <div className="flex flex-wrap justify-center gap-3 mt-6">
        {[
          "Python",
          "FastAPI",
          "Next.js",
          "Tailwind CSS",
          "SQLite / PostgreSQL",
          "Render Deployment",
        ].map((tech, i) => (
          <span
            key={i}
            className="px-4 py-1.5 bg-[#0d3b5e] border border-white/10 rounded-full text-sm text-slate-200"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Project Preview / Coming Soon Image */}
      <div className="my-10 mx-auto max-w-2xl bg-brandLight/10 p-4 rounded-xl shadow-lg border border-yellow-400/30">
        <img
          src="/projects/url-shortener-preview.png"
          alt="URL Shortener UI Preview"
          className="rounded-md w-full"
        />
      </div>

      {/* Overview */}
      <section className="mt-16 space-y-4">
        <h2 className="text-3xl font-semibold text-brandYellow">Overview</h2>
        <p className="text-slate-300 leading-relaxed">
          This tool converts long URLs into short, shareable links. Built using{" "}
          <span className="font-semibold text-yellow-300">
            Python + FastAPI
          </span>
          , it handles redirection instantly — ideal for marketing campaigns,
          freelancers, brand link management & automation workflows.
        </p>
      </section>

      {/* Features */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold text-brandYellow mb-6">
          Key Features
        </h2>
        <div className="grid md:grid-cols-2 gap-5">
          {[
            "Generate short URLs instantly",
            "FastAPI backend ensures high performance",
            "Database ready → SQLite or Postgres",
            "Easy redirect handling & API-based access",
            "Perfect for WhatsApp/Instagram link sharing",
            "Deployable as standalone SaaS microservice",
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

      {/* Architecture */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-brandYellow mb-3">
          How it Works
        </h2>

        <div className="p-6 bg-[#0d3e61]/40 rounded-xl text-slate-300 space-y-3 border border-white/10">
          <p>1. User inputs long URL → fast API receives request</p>
          <p>2. System generates unique short ID (6–8 chars)</p>
          <p>3. URL stored in database with reference key</p>
          <p>4. Short link returned → e.g. yourapp.com/xA21dF</p>
          <p>5. Visiting short link instantly redirects to original URL</p>
        </div>
      </section>

      {/* Use Cases */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-brandYellow mb-6">
          Use Cases
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Marketing campaigns tracking",
            "Social media bio shortlinks",
            "QR code shortened URLs",
            "Sharing resources internally",
            "Freelancer deliverables",
            "Automation integration via API",
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
          Want a similar automation tool or backend built for your business?
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
