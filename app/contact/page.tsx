"use client";

import Image from "next/image";
import { useState } from "react";
import { Reveal } from "@/components/Animations";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#030303] text-neutral-100 font-sans selection:bg-indigo-500 selection:text-white antialiased flex flex-col items-center w-full">
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-12%] left-[-8%] w-[45%] h-[45%] rounded-full bg-indigo-900/10 blur-[120px]" />
        <div className="absolute bottom-[-12%] right-[-8%] w-[45%] h-[45%] rounded-full bg-violet-900/10 blur-[120px]" />
      </div>

      <main className="relative z-10 w-full max-w-6xl px-6 md:px-10 pt-28 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 items-start">
          <Reveal direction="right">
            <div className="flex flex-col gap-6">
              <div className="border border-neutral-900 bg-neutral-950/40 p-4">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
                  <Image
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072"
                    alt="Contact portrait"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
              <p className="text-sm text-neutral-400 font-medium">
                Based in Quezon City, Philippines. Available for product builds and long-term partnerships.
              </p>
            </div>
          </Reveal>

          <div className="space-y-8">
            <header className="space-y-3">
              <Reveal>
                <p className="text-xs font-semibold tracking-[0.3em] uppercase text-indigo-400">Contact</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">Let&apos;s build something <br/>exceptional together.</h1>
              </Reveal>
            </header>

            <Reveal delay={0.2}>
              <div className="border border-neutral-900 bg-neutral-950/10">
                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="p-6 sm:p-10">
                    {submitted ? (
                      <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-10 animate-in fade-in zoom-in duration-500">
                        <div className="w-16 h-16 rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                          <svg className="w-8 h-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <h2 className="text-xl font-bold text-white">Message Sent!</h2>
                        <p className="text-sm text-neutral-400">I&apos;ll get back to you within 24 hours.</p>
                        <button 
                          onClick={() => setSubmitted(false)}
                          className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 underline underline-offset-4 pt-2"
                        >
                          Send another message
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="space-y-2 group">
                          <label className="text-xs font-bold uppercase tracking-widest text-neutral-500 group-focus-within:text-indigo-400 transition-colors">Full Name</label>
                          <input 
                            required
                            type="text"
                            placeholder="What's your name?"
                            className="w-full bg-transparent border-0 border-b border-neutral-800 py-2 focus:ring-0 focus:border-indigo-500 placeholder:text-neutral-700 text-neutral-100 transition-all outline-none"
                          />
                        </div>
                        <div className="space-y-2 group">
                          <label className="text-xs font-bold uppercase tracking-widest text-neutral-500 group-focus-within:text-indigo-400 transition-colors">E-mail Address</label>
                          <input 
                            required
                            type="email"
                            placeholder="Where can I reach you?"
                            className="w-full bg-transparent border-0 border-b border-neutral-800 py-2 focus:ring-0 focus:border-indigo-500 placeholder:text-neutral-700 text-neutral-100 transition-all outline-none"
                          />
                        </div>
                        <div className="space-y-2 group">
                          <label className="text-xs font-bold uppercase tracking-widest text-neutral-500 group-focus-within:text-indigo-400 transition-colors">Message</label>
                          <textarea 
                            required
                            rows={4}
                            placeholder="Tell me about your project..."
                            className="w-full bg-transparent border-0 border-b border-neutral-800 py-2 focus:ring-0 focus:border-indigo-500 placeholder:text-neutral-700 text-neutral-100 transition-all outline-none resize-none"
                          />
                        </div>
                        <button 
                          disabled={isSubmitting}
                          type="submit"
                          className="group relative w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-indigo-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-indigo-500/20 hover:bg-indigo-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                        >
                          <span className="relative z-10">{isSubmitting ? "Sending..." : "Send Message"}</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </button>
                      </form>
                    )}
                  </div>

                  <div className="border-t lg:border-t-0 lg:border-l border-neutral-900 p-8 sm:p-10 space-y-10 bg-neutral-950/20">
                    <div className="space-y-3">
                      <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-[0.3em]">Direct Contact</p>
                      <a href="mailto:mirandilla.russel.dejose@gmail.com" className="text-lg font-bold text-white hover:text-indigo-400 transition-colors block underline-offset-8 decoration-neutral-800 hover:decoration-indigo-500 decoration-2 underline">
                        mirandilla.russel.dejose@gmail.com
                      </a>
                    </div>
                    <div className="space-y-3">
                      <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-[0.3em]">Social Networks</p>
                      <div className="flex flex-col gap-3">
                        <a href="https://www.linkedin.com/in/russel-m-1ba806369/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-indigo-500" />
                          LinkedIn
                        </a>
                        <a href="https://github.com/russelmain3415" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-indigo-500" />
                          GitHub
                        </a>
                        <a href="https://www.facebook.com/russel.mirandilla.9/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-indigo-500" />
                          Facebook
                        </a>
                      </div>
                    </div>
                    <div className="pt-4">
                      <div className="p-4 rounded-2xl bg-indigo-500/5 border border-indigo-500/10">
                        <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-1">Response Time</p>
                        <p className="text-xs text-neutral-400 leading-relaxed">Usually within 24 hours depending on timezone.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </main>
    </div>
  );
}
