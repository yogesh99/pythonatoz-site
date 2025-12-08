import Link from "next/link";

export const Footer = () => {
  const socials = [
    { name: "Instagram", url: "https://instagram.com/python.atoz" },
    { name: "YouTube", url: "https://www.youtube.com/@pythonAtoZ" },
    { name: "GitHub", url: "https://github.com/yogesh99/" },
  ];
  return (
    <footer className="border-t border-white/10 mt-10">
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-6 text-xs text-slate-400 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} PythonAtoZ - Yogesh S Waradkar. All
          rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          {socials.map((s, i) => (
            <span key={s.name} className="flex items-center gap-4">
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brandYellow"
              >
                {s.name}
              </a>
              {i !== socials.length - 1 && (
                <span className="opacity-40">•</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
};
