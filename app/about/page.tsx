import { Reveal } from "@/components/Animations";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#030303] text-neutral-100 font-sans selection:bg-indigo-500 selection:text-white antialiased flex flex-col items-center w-full">
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-12%] left-[-8%] w-[45%] h-[45%] rounded-full bg-indigo-900/10 blur-[120px]" />
        <div className="absolute bottom-[-12%] right-[-8%] w-[45%] h-[45%] rounded-full bg-violet-900/10 blur-[120px]" />
      </div>

      <main className="relative z-10 w-full max-w-5xl px-6 md:px-10 pt-32 pb-24">
        <header className="space-y-6">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.3em] text-indigo-400 uppercase">My Story</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">Eager to learn, build, and grow.</h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg sm:text-xl text-neutral-400 max-w-3xl leading-relaxed">
              I am a Junior Software Developer based in Quezon City, Philippines. During my college days, I discovered my true passion lies in understanding how data flows, connects, and helps people make decisions. I am launching my professional career with a commitment to building clean, organized databases and robust backend processes.
            </p>
          </Reveal>
        </header>
 
        <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <Reveal direction="right">
              <h2 className="text-2xl font-bold text-white">How I Work & My Story</h2>
            </Reveal>
            <div className="space-y-6 text-neutral-400 text-lg leading-relaxed">
              <Reveal direction="right" delay={0.1}>
                <p>
                  I have always been deeply detail-oriented when developing projects. For me, data must be meticulously organized, structured, and easy for everyone to read and interpret. To deliver the best results, I prioritize communication—constantly clarifying project requirements so that the final build aligns perfectly with expectations.
                </p>
              </Reveal>
              <Reveal direction="right" delay={0.2}>
                <p>
                  While I work comfortably across both the frontend and backend, I realized that my real forte and passion lies in backend processing and relational database management. I love studying data relationships, seeing how different entities connect, and designing the architecture that powers technology-driven reporting.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Reveal delay={0.1}>
              <div className="h-full rounded-2xl border border-neutral-900 bg-neutral-950/40 p-8 space-y-4">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                </div>
                <h3 className="text-lg font-semibold text-white">Innovation</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Always exploring new ways to solve problems and leveraging modern tools to build better experiences.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="h-full rounded-2xl border border-neutral-900 bg-neutral-950/40 p-8 space-y-4">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="text-lg font-semibold text-white">Performance</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Speed and efficiency are core features. Every millisecond matters when it comes to user retention.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="h-full rounded-2xl border border-neutral-900 bg-neutral-950/40 p-8 space-y-4">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A10.003 10.003 0 0012 3c1.268 0 2.39.234 3.41.659m-4.74 15.14a9.992 9.992 0 01-1.34-4.226m2.692 4.226a9.967 9.967 0 011.007-3.507m2.735-3.534a10.001 10.001 0 00-4.595-17.06" /></svg>
                </div>
                <h3 className="text-lg font-semibold text-white">Reliability</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Building resilient systems that stand the test of time and scale gracefully as requirements grow.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="h-full rounded-2xl border border-neutral-900 bg-neutral-950/40 p-8 space-y-4">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 11-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H7a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 011-1V4z" /></svg>
                </div>
                <h3 className="text-lg font-semibold text-white">Strategy</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Thinking ahead to anticipate needs and building flexible systems that can adapt to change.
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </div>
  );
}
