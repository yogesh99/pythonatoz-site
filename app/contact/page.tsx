"use client";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto text-center space-y-12 py-24">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-brandYellow drop-shadow-[0_0_12px_rgba(255,255,0,0.35)]">
        Get in Touch
      </h1>

      <p className="text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
        Have a Python project in mind? Automation, scripts or freelance work?
        <br /> Tap a card below to contact instantly.
      </p>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6 text-left">
        {/* Email */}
        <Link
          href="mailto:pythonatoz.team@gmail.com"
          className="group p-6 rounded-xl bg-[#0e3f61]/40 border border-white/10 hover:border-brandYellow hover:shadow-xl transition cursor-pointer block"
        >
          <h3 className="font-semibold text-lg text-white">Email</h3>
          <p className="text-sm text-slate-400 mt-2 group-hover:text-brandYellow transition">
            Tap to send an email →
          </p>
        </Link>

        {/* Call */}
        <Link
          href="tel:+919930106939"
          className="group p-6 rounded-xl bg-[#0e3f61]/40 border border-white/10 hover:border-brandYellow hover:shadow-xl transition cursor-pointer block"
        >
          <h3 className="font-semibold text-lg text-white">Call</h3>
          <p className="text-sm text-slate-400 mt-2 group-hover:text-brandYellow transition">
            Tap to call →
          </p>
        </Link>

        {/* WhatsApp */}
        <Link
          href="https://wa.me/919930106939?text=Hi%20I%20want%20to%20discuss%20a%20Python%20project"
          target="_blank"
          className="group p-6 rounded-xl bg-[#0e3f61]/40 border border-white/10 hover:border-brandYellow hover:shadow-xl transition cursor-pointer block"
        >
          <h3 className="font-semibold text-lg text-white">WhatsApp</h3>
          <p className="text-sm text-slate-400 mt-2 group-hover:text-brandYellow transition">
            Tap to chat →
          </p>
        </Link>
      </div>

      {/* Bottom CTA */}
      <p className="text-sm text-slate-400">
        Response time:{" "}
        <span className="text-brandYellow">within a few hours</span>
      </p>
    </div>
  );
}
