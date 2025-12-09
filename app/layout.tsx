import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Analytics from "@/app/providers/Analytics";
export const metadata: Metadata = {
  title: "PythonAtoZ - Automation, AI Tools, Python Apps & Projects",
  description:
    "Learn Python automation & projects. Build automation tools, AI scripts, PDF utilities & real-world Python apps. Follow for tutorials • Hire for custom development.",
  metadataBase: new URL("https://www.pythonatoz.in"),
  openGraph: {
    title: "PythonAtoZ - Automation, AI Tools & Python Apps",
    description:
      "Follow Python tutorials, automation scripts & real projects. Hire for custom Python development.",
    url: "https://www.pythonatoz.in",
    siteName: "PythonAtoZ",
    images: [
      {
        url: "/og-banner.png", // ensure placed in /public
        width: 1200,
        height: 630,
        alt: "PythonAtoZ - Automation & Python Apps",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PythonAtoZ - Automation, Projects, Python Apps",
    description:
      "Python automation, projects & AI tools. Follow for tutorials • Hire for custom development.",
    images: ["/og-banner.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(require("./schema/organization.json")),
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="bg-brandDark text-white antialiased font-[Plus_Jakarta_Sans]"
      >
        <Analytics />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1 max-w-6xl w-full mx-auto px-4 md:px-6 py-10">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
