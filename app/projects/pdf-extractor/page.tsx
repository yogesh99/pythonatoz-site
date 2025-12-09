export default function PDFExtractorProject() {
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
          PDF to Text Extractor
        </h1>
        <p className="text-slate-300 text-lg">
          Upload a PDF → Extract text/content instantly using Python. Clean
          output for resume parsing, document processing & data scraping
          workflows.
        </p>
      </div>

      {/* Tech Stack Badges */}
      <div className="flex flex-wrap justify-center gap-3 mt-6">
        {[
          "Python",
          "PyPDF2 / PDFPlumber",
          "Next.js Frontend",
          "Tailwind CSS",
          "Flask / FastAPI",
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

      {/* Project Preview / UI Image */}
      <div className="my-10 mx-auto max-w-2xl bg-brandLight/10 p-4 rounded-xl shadow-lg border border-yellow-400/30">
        <img
          src="/projects/pdf-extractor-preview.png"
          alt="PDF Extractor UI Preview"
          className="rounded-md w-full"
        />
      </div>

      {/* Overview */}
      <section className="mt-16 space-y-4">
        <h2 className="text-3xl font-semibold text-brandYellow">Overview</h2>
        <p className="text-slate-300 leading-relaxed">
          A PDF-to-text converter tool allowing users to upload documents and
          extract text quickly. Perfect for automation use cases — resume
          parsing, invoice reading, content extraction and AI preprocessing.
        </p>
      </section>

      {/* Features */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold text-brandYellow mb-6">
          Key Features
        </h2>
        <div className="grid md:grid-cols-2 gap-5">
          {[
            "Extract text from PDF instantly",
            "Supports single/multi-page PDF",
            "Copy or download extracted text",
            "Works offline and secure",
            "Ideal for resume & invoice parsing",
            "Useful for automation with AI",
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
          <p>1. User uploads PDF file from browser</p>
          <p>2. Backend reads PDF using PDFPlumber/PyPDF2</p>
          <p>3. Extracted text is cleaned and processed</p>
          <p>4. Output returned to user in UI to copy/download</p>
        </div>
      </section>

      {/* Use Cases */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-brandYellow mb-6">
          Use Cases
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Resume parsing for HR automation",
            "Extract invoice data for billing",
            "Convert PDFs into clean text",
            "OCR integration upgrades later",
            "Preprocessing documents for AI",
            "Bulk PDF to text workflow",
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
          Want to automate PDF processing for your business?
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
