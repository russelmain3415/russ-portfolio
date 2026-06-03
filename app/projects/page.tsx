import Image from "next/image";

const projects = [
  {
    title: "Barangay AI Chatbot",
    type: "Computer Vision & NLP",
    summary:
      "A community assistance bot featuring a Convolutional Neural Network (CNN) classifier to detect valid vs. fake IDs during registration, alongside an inquiry response model trained to answer local neighborhood FAQs.",
    tech: ["Python", "CNN", "TensorFlow", "NLP", "Chatbot Development"],
    image: "/Barangay_CNN_Chatbot.png",
    link: "https://drive.google.com/drive/folders/1Kb6LDHtpRNn9NJBWfDqPccsdb98DDrVH?usp=sharing"
  },
  {
    title: "Basic Sales Analytics",
    type: "Database / Analytics",
    summary:
      "A database analytics solution implemented entirely in Microsoft SQL Server. Utilizes structured SQL queries to analyze product metrics, identify top customers, track quantities sold, and evaluate overall business performance.",
    tech: ["Microsoft SQL Server", "T-SQL", "Data Analysis", "SQL Queries"],
    image: "/Sales_Analytics.png",
    link: "https://github.com/russelmain3415/SalesAnalytics.git"
  },
  {
    title: "Queue System",
    type: "Frontend Utility",
    summary:
      "A customer queuing and ticketing solution built purely with standard web technologies. Manages ticket sequences, wait queues, and counter displays cleanly and efficiently.",
    tech: ["HTML5", "CSS3", "Vanilla JavaScript"],
    image: "/Queue_System.png",
    link: "https://github.com/russelmain3415/Local-Network-Queue-System.git"
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#030303] text-neutral-100 font-sans selection:bg-indigo-500 selection:text-white antialiased flex flex-col items-center w-full">
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-12%] left-[-8%] w-[45%] h-[45%] rounded-full bg-indigo-900/10 blur-[120px]" />
        <div className="absolute bottom-[-12%] right-[-8%] w-[45%] h-[45%] rounded-full bg-violet-900/10 blur-[120px]" />
      </div>

      <main className="relative z-10 w-full max-w-6xl px-6 md:px-10 pt-32 pb-24">
        <header className="space-y-6">
          <p className="text-xs font-semibold tracking-[0.3em] text-indigo-400 uppercase">My Work</p>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">Recent Projects.</h1>
          <p className="text-lg sm:text-xl text-neutral-400 max-w-3xl leading-relaxed">
            A selection of my favorite projects, ranging from large-scale enterprise platforms to experimental AI tools. Each one represents a unique challenge and a commitment to quality.
          </p>
        </header>

        <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div key={project.title} className="group relative rounded-3xl border border-neutral-900 bg-neutral-950/40 overflow-hidden transition-all duration-500 hover:border-neutral-800 hover:-translate-y-1">
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-neutral-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 rounded-full bg-white text-black font-semibold text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-500 hover:bg-neutral-200"
                  >
                    Access Project
                  </a>
                </div>
              </div>
              
              <div className="p-8 space-y-4">
                <div className="space-y-2">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">{project.type}</div>
                  <h2 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">{project.title}</h2>
                </div>
                
                <p className="text-neutral-400 leading-relaxed">
                  {project.summary}
                </p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-xs font-medium text-neutral-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
