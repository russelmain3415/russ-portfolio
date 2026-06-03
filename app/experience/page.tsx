import { Reveal } from "@/components/Animations";

const roles = [
  {
    title: "Junior Software Developer",
    company: "Start of Professional Career",
    period: "2026 — Present",
    details: [
      "Collaborating with team members to implement clean, reusable UI components using React and Next.js.",
      "Learning and applying industry-standard coding practices, version control workflows, and code optimization techniques.",
      "Participating in daily stands, code reviews, and collaborating on feature development.",
      "Fixing frontend bugs and database queries to ensure smooth application performance."
    ],
  },
  {
    title: "Student Developer",
    company: "Academic Projects & Studies",
    period: "2022 — 2025",
    details: [
      "Developed a Barangay AI Chatbot integrating CNN models for document/ID verification.",
      "Created a Basic Sales Analytics system using Microsoft SQL Server to track items sold and consumer behavior.",
      "Engineered a Queue System using HTML5, CSS3, and Vanilla JavaScript to manage waiting lines.",
      "Studied computer science fundamentals, data structures, and relational database management."
    ],
  },
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-[#030303] text-neutral-100 font-sans selection:bg-indigo-500 selection:text-white antialiased flex flex-col items-center w-full">
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-12%] left-[-8%] w-[45%] h-[45%] rounded-full bg-indigo-900/10 blur-[120px]" />
        <div className="absolute bottom-[-12%] right-[-8%] w-[45%] h-[45%] rounded-full bg-violet-900/10 blur-[120px]" />
      </div>

      <main className="relative z-10 w-full max-w-5xl px-6 md:px-10 pt-32 pb-24">
        <header className="space-y-6">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.3em] text-indigo-400 uppercase">My Journey</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-[1.05]">Building a foundation.</h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg sm:text-xl text-neutral-400 max-w-3xl leading-relaxed">
              I am at the beginning of my professional career, focused on building clean code, learning from experienced mentors, and applying the skills I developed during my academic projects.
            </p>
          </Reveal>
        </header>

        <section className="mt-20 space-y-12">
          {roles.map((role, index) => (
            <Reveal key={`${role.company}-${role.title}`} delay={index * 0.1}>
              <div className="group relative pl-8 sm:pl-12 border-l border-neutral-900">
                <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)] transition-transform duration-300 group-hover:scale-125" />
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-500 font-mono tracking-wider">
                      <span className="text-indigo-400">{role.period}</span>
                      <span>/</span>
                      <span className="text-neutral-300 uppercase">{role.company}</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-violet-400 transition-all duration-300">
                      {role.title}
                    </h2>
                  </div>
                  
                  <ul className="grid grid-cols-1 gap-4 max-w-4xl">
                    {role.details.map((detail, i) => (
                      <li key={i} className="flex gap-4 text-neutral-400 leading-relaxed text-lg">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[10px] text-neutral-500 mt-1">
                          {i + 1}
                        </span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </section>
      </main>
    </div>
  );
}
