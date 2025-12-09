export default function ResumeBuilderProject() {
  return (
    <div className="max-w-5xl mx-auto py-20 px-6 text-white">
      {/* Back Button */}
      <a
        href="/projects"
        className="inline-flex items-center gap-2 text-brandYellow hover:text-yellow-300 transition mb-6"
      >
        ← Back to Projects
      </a>

      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-brandYellow drop-shadow-[0_0_18px_rgba(255,255,0,0.35)]">
          Resume Builder
        </h1>
        <p className="text-slate-300 text-lg">
          A tool that generates professional resumes from user input - export as
          PDF in one click.
        </p>
      </div>

      {/* Tech Stack Badges */}
      <div className="flex flex-wrap justify-center gap-3 mt-6">
        {[
          "Python",
          "FastAPI / Flask",
          "Next.js Frontend",
          "Tailwind CSS",
          "PDFKit / ReportLab",
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

      {/* Preview Image */}
      <div className="my-10 mx-auto max-w-2xl bg-brandLight/10 p-4 rounded-xl shadow-lg border border-yellow-400/20">
        <img
          src="/projects/resume-builder-preview.png"
          alt="Resume Builder Preview"
          className="rounded-md w-full"
        />
      </div>

      {/* Overview */}
      <section className="mt-16 space-y-4">
        <h2 className="text-3xl font-semibold text-brandYellow">Overview</h2>
        <p className="text-slate-300 leading-relaxed">
          This project allows users to fill details like education, skills,
          experience & achievements - and generates a formatted PDF resume.
          Suitable for creators, job seekers & portfolio websites.
        </p>
      </section>

      {/* Features */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold text-brandYellow mb-6">
          Key Features
        </h2>
        <div className="grid md:grid-cols-2 gap-5">
          {[
            "Fill form → Generate PDF instantly",
            "Multiple resume sections supported",
            "Clean minimal template layout",
            "Exports in PDF format",
            "Downloadable and share-ready",
            "Perfect for students & freelancers",
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
          <p>1. User enters details in required fields → form submission</p>
          <p>2. Backend API receives data & fills into PDF template</p>
          <p>3. Resume automatically generated using ReportLab/PDFKit</p>
          <p>4. User can download the final PDF resume instantly</p>
          <p>5. Optionally auto-save for future editing (later upgrade)</p>
        </div>
      </section>

      {/* Use Cases */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-brandYellow mb-6">
          Use Cases
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Students preparing resumes",
            "Job seekers & freshers",
            "Freelancers building quick resumes",
            "Creators who want portfolio attachments",
            "HR startups offering resume previews",
            "Add-on feature for career-based apps",
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
          Want a Resume Builder like this for your platform or automation needs?
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
