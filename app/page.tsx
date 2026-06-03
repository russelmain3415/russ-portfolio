import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/Animations";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#030303] text-neutral-100 font-sans selection:bg-indigo-500 selection:text-white antialiased flex flex-col items-center w-full">
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-12%] left-[-8%] w-[45%] h-[45%] rounded-full bg-indigo-900/10 blur-[120px]" />
        <div className="absolute bottom-[-12%] right-[-8%] w-[45%] h-[45%] rounded-full bg-violet-900/10 blur-[120px]" />
        <div className="absolute top-[35%] left-[52%] translate-x-[-50%] w-[28%] h-[28%] rounded-full bg-emerald-950/5 blur-[100px]" />
      </div>

      <main className="relative z-10 w-full max-w-6xl px-6 md:px-10 pt-32 pb-20 flex flex-col">
        <section className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 py-12">
          <div className="flex-1 space-y-8">
            <Reveal direction="right">
              <div className="space-y-4">
                <p className="text-xs font-semibold tracking-[0.3em] text-indigo-400 uppercase">Introduction</p>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
                  I&apos;m Russel.
                  <br />
                  A Junior Software Developer.
                </h1>
              </div>
            </Reveal>
            
            <Reveal direction="right" delay={0.1}>
              <p className="text-lg sm:text-xl text-neutral-400 max-w-2xl leading-relaxed">
                I am a passionate developer eager to build clean, functional, and user-centric web applications. Currently based in Quezon City, I am starting my professional journey with a strong focus on learning best practices and contributing to meaningful digital solutions.
              </p>
            </Reveal>

            <Reveal direction="right" delay={0.2}>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/projects"
                  className="px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all duration-300 shadow-lg shadow-indigo-500/25"
                >
                  View My Work
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-full border border-neutral-800 hover:border-neutral-700 bg-neutral-900/50 text-white font-semibold transition-all duration-300"
                >
                  Get in Touch
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal direction="left" delay={0.3}>
            <div className="relative w-full max-w-[400px] aspect-square flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-violet-500/20 rounded-3xl blur-2xl" />
              <div className="relative w-full h-full rounded-3xl border border-neutral-800 bg-neutral-900/40 overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=2000"
                  alt="Russel Mirandilla"
                  fill
                  priority
                  sizes="(max-width: 400px) 100vw, 400px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </Reveal>
        </section>

        <section className="mt-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { href: "/about", title: "About", desc: "My story, values and the way I work." },
              { href: "/experience", title: "Experience", desc: "A timeline of my professional career." },
              { href: "/projects", title: "Projects", desc: "A showcase of things I've built lately." },
              { href: "/skills", title: "Skills", desc: "The tools and technologies I master." },
            ].map((card, index) => (
              <Reveal key={card.href} delay={index * 0.1}>
                <Link
                  href={card.href}
                  className="group block h-full rounded-2xl border border-neutral-900 bg-neutral-950/40 hover:bg-neutral-900/30 hover:border-neutral-800 transition-all duration-300 p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-white group-hover:text-indigo-400 transition-colors">{card.title}</span>
                    <div className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:border-indigo-500/50 transition-colors">
                      <svg
                        className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M5 12h14m-7-7l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-400 leading-relaxed font-medium">{card.desc}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
