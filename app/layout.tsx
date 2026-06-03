import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Scrollytelling from "@/components/Scrollytelling";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Russel Mirandilla | Full-Stack Developer",
  description:
    "Personal portfolio of Russel Mirandilla — a passionate full-stack developer crafting modern web experiences with cutting-edge technologies.",
  keywords: ["Russel Mirandilla", "developer", "portfolio", "full-stack", "web development"],
  openGraph: {
    title: "Russel Mirandilla | Full-Stack Developer",
    description:
      "Personal portfolio of Russel Mirandilla — crafting modern web experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#030303]/85 backdrop-blur-md border-b border-neutral-900 flex justify-center">
          <div className="w-full max-w-6xl px-6 md:px-10 h-20 flex items-center justify-between">
            <Link href="/" className="font-bold text-lg tracking-tight flex items-center gap-2 group shrink-0">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-violet-500 flex items-center justify-center text-white text-sm font-black group-hover:scale-105 transition-transform duration-300">
                R
              </span>
              <span className="text-neutral-100 group-hover:text-white transition-colors duration-300">
                Russel Mirandilla
              </span>
            </Link>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
              <Link href="/" className="hover:text-white transition-colors duration-200">Home</Link>
              <Link href="/about" className="hover:text-white transition-colors duration-200">About</Link>
              <Link href="/experience" className="hover:text-white transition-colors duration-200">Experience</Link>
              <Link href="/projects" className="hover:text-white transition-colors duration-200">Projects</Link>
              <Link href="/skills" className="hover:text-white transition-colors duration-200">Skills</Link>
              <Link href="/contact" className="hover:text-white transition-colors duration-200">Contact</Link>
            </div>
            <a
              href="mailto:mirandilla.russel.dejose@gmail.com"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold uppercase tracking-wider text-indigo-400 hover:text-white border border-indigo-500/30 hover:border-indigo-500 rounded-lg transition-all duration-300 bg-indigo-950/10 whitespace-nowrap"
            >
              Hire Me
            </a>
          </div>
        </nav>
        {children}
        <Scrollytelling />
        <footer className="relative z-10 w-full bg-[#030303] border-t border-neutral-900 pt-20 pb-10 flex flex-col items-center">
          <div className="w-full max-w-6xl px-6 md:px-10 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            <div className="md:col-span-2 space-y-6">
              <Link href="/" className="font-bold text-lg tracking-tight flex items-center gap-2 group shrink-0 w-fit">
                <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-violet-500 flex items-center justify-center text-white text-sm font-black group-hover:scale-105 transition-transform duration-300">
                  R
                </span>
                <span className="text-neutral-100 group-hover:text-white transition-colors duration-300">
                  Russel Mirandilla
                </span>
              </Link>
              <p className="text-neutral-400 max-w-sm leading-relaxed text-sm">
                A full-stack developer dedicated to building high-performance, accessible, and visually stunning digital experiences that solve real-world problems.
              </p>
              <div className="flex items-center gap-4">
                <a href="https://github.com/russelmain3415" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-indigo-500 transition-all duration-300 bg-neutral-950/50">
                  <span className="sr-only">GitHub</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/russel-m-1ba806369/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-indigo-500 transition-all duration-300 bg-neutral-950/50">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="https://www.facebook.com/russel.mirandilla.9/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-indigo-500 transition-all duration-300 bg-neutral-950/50">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/></svg>
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-white font-bold text-sm uppercase tracking-wider">Navigation</h3>
              <ul className="space-y-4 text-sm text-neutral-400">
                <li><Link href="/" className="hover:text-indigo-400 transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-indigo-400 transition-colors">About</Link></li>
                <li><Link href="/experience" className="hover:text-indigo-400 transition-colors">Experience</Link></li>
                <li><Link href="/projects" className="hover:text-indigo-400 transition-colors">Projects</Link></li>
                <li><Link href="/skills" className="hover:text-indigo-400 transition-colors">Skills</Link></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-white font-bold text-sm uppercase tracking-wider">Contact</h3>
              <ul className="space-y-4 text-sm text-neutral-400">
                <li><Link href="/contact" className="hover:text-indigo-400 transition-colors">Contact Page</Link></li>
                <li><a href="mailto:mirandilla.russel.dejose@gmail.com" className="hover:text-indigo-400 transition-colors">mirandilla.russel.dejose@gmail.com</a></li>
                <li className="text-neutral-500">Based in Quezon City, PH</li>
              </ul>
            </div>
          </div>

          <div className="w-full max-w-6xl px-6 md:px-10 mt-20 pt-10 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500 font-medium">
            <p>© {new Date().getFullYear()} Russel Mirandilla. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-neutral-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-neutral-300 transition-colors">Terms of Service</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
