export default function ContactPage() {
  return (
    <section className="max-w-2xl mx-auto py-20 text-center">
      <h1 className="text-4xl text-brandYellow font-bold mb-6">Contact Me</h1>
      <p className="text-slate-300 mb-8">
        Reach out for project inquiries, automation work, or collaboration.
      </p>

      <a
        href="mailto:pythonatoz.team@gmail.com"
        className="bg-brandYellow text-black px-6 py-3 font-semibold rounded-full hover:bg-yellow-300 transition"
      >
        Email Me
      </a>

      <div className="mt-6 space-x-4 text-white font-black">
        <a href="tel:+919930106939" className="hover:text-brandYellow">
          Call
        </a>
        <a
          href="https://wa.me/919930106939"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-brandYellow"
        >
          WhatsApp
        </a>
      </div>
    </section>
  );
}
