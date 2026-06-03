import { Reveal } from "@/components/Animations";

const skillGroups = [
  {
    title: "Frontend Development",
    description: "Building responsive, modern, and clean user interfaces.",
    items: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
      { name: "JavaScript", level: 85 }
    ],
  },
  {
    title: "Backend & Database",
    description: "Structuring server-side logic, applications, and managing database systems.",
    items: [
      { name: "Java", level: 80 },
      { name: "PHP", level: 75 },
      { name: "Python", level: 80 },
      { name: "SQL", level: 85 }
    ],
  },
];

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-[#030303] text-neutral-100 font-sans selection:bg-indigo-500 selection:text-white antialiased flex flex-col items-center w-full">
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-12%] left-[-8%] w-[45%] h-[45%] rounded-full bg-indigo-900/10 blur-[120px]" />
        <div className="absolute bottom-[-12%] right-[-8%] w-[45%] h-[45%] rounded-full bg-violet-900/10 blur-[120px]" />
      </div>

      <main className="relative z-10 w-full max-w-6xl px-6 md:px-10 pt-32 pb-24">
        <header className="space-y-6">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.3em] text-indigo-400 uppercase">My Toolkit</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-[1.05]">Mastering the stack.</h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg sm:text-xl text-neutral-400 max-w-3xl leading-relaxed">
              I continuously evolve my skill set to stay at the forefront of the industry. This is a snapshot of the core technologies and methodologies I use to bring ideas to life.
            </p>
          </Reveal>
        </header>

        <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.1}>
              <div className="rounded-3xl border border-neutral-900 bg-neutral-950/40 p-8 sm:p-10 space-y-8 h-full">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-white">{group.title}</h2>
                  <p className="text-neutral-400 leading-relaxed font-medium">
                    {group.description}
                  </p>
                </div>
                
                <div className="space-y-6">
                  {group.items.map((item) => (
                    <div key={item.name} className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-neutral-200 font-semibold tracking-wide">{item.name}</span>
                        <span className="text-neutral-500 font-mono">{item.level}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-neutral-900 rounded-full overflow-hidden border border-neutral-800">
                        <div 
                          className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full"
                          style={{ width: `${item.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </section>
      </main>
    </div>
  );
}
