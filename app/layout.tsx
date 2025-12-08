import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "PythonAtoZ | Python Automation & Projects",
  description:
    "Python automation, real-world projects and freelance-ready solutions. Learn, build, and hire at PythonAtoZ.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-brandDark text-white antialiased font-[Plus_Jakarta_Sans]">
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
