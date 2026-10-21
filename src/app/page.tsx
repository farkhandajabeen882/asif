"use client";

import { useState, type FormEvent } from "react";

const profile = {
  name: "Farkhanda Jabeen",
  // Save your picture in the public folder with the name images.png.
  photo: "/images.png",
};

const skills = [
  "Academic Research",
  "MS Excel",
  "Communication",
  "Canva",
  "HTML & CSS · Learning",
  "Next.js · Learning",
  "Tailwind CSS · Learning",
  "AI-Assisted Learning",
];

const projects = [
  {
    icon: "📚",
    title: "Research Knowledge Hub",
    description:
      "A proposed resource hub for organising academic readings, research notes and useful study materials.",
    tags: ["Research", "Knowledge Sharing"],
    status: "Project idea",
    gradient: "from-blue-500/25 to-cyan-400/10",
  },
  {
    icon: "🌐",
    title: "Personal Portfolio",
    description:
      "This responsive portfolio presents my academic interests, developing digital skills and project ideas.",
    tags: ["Next.js", "Tailwind CSS"],
    status: "Current project",
    gradient: "from-indigo-500/25 to-blue-400/10",
  },
  {
    icon: "🤖",
    title: "AI Learning Companion",
    description:
      "A planned tool to help students organise questions, explore difficult concepts and reflect on their learning.",
    tags: ["AI", "Education"],
    status: "Planned project",
    gradient: "from-cyan-500/20 to-teal-400/10",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [photoError, setPhotoError] = useState(false);
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(
      "This is a preview form. Your message has not been sent or stored. Contact details will be added later."
    );
  }

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10";

  return (
    <main
      id="top"
      className="min-h-screen overflow-x-clip bg-[#070d1b] text-slate-100 selection:bg-blue-400/30"
    >
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#070d1b]/95 backdrop-blur-xl">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8"
        >
          <a
            href="#top"
            className="flex items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/25 bg-blue-400/10 text-sm font-bold text-blue-300">
              FJ
            </span>
            <span className="text-lg font-bold tracking-tight">
              Farkhanda<span className="text-blue-400">.</span>
            </span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-slate-400 transition hover:text-blue-300"
              >
                {item}
              </a>
            ))}

            <a
              href="#contact"
              className="rounded-full border border-blue-400/30 bg-blue-400/10 px-5 py-2.5 text-sm font-semibold text-blue-300 transition hover:bg-blue-400/20"
            >
              Say hello ↗
            </a>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-xl transition hover:bg-white/5 md:hidden"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </nav>

        {menuOpen && (
          <nav
            id="mobile-menu"
            aria-label="Mobile navigation"
            className="border-t border-white/5 px-5 py-3 md:hidden"
          >
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-blue-300"
              >
                {item}
              </a>
            ))}
          </nav>
        )}
      </header>

      <section className="relative isolate">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute -right-40 top-0 h-[550px] w-[550px] rounded-full bg-blue-600/15 blur-[110px]" />
          <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-cyan-500/5 blur-[90px]" />
        </div>

        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-16 sm:px-8 sm:py-24 lg:min-h-[720px] lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div>
            <p className="inline-flex items-center gap-2.5 rounded-full border border-blue-400/20 bg-blue-400/[0.07] px-4 py-2 text-xs font-medium text-blue-200">
              <span className="h-2 w-2 shrink-0 rounded-full bg-cyan-400" />
              Research · Education · Digital innovation
            </p>

            <p className="mt-8 text-lg font-medium text-slate-400">
              Hello, I’m Farkhanda 👋
            </p>

            <h1 className="mt-3 text-5xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Farkhanda
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Jabeen.
              </span>
            </h1>

            <h2 className="mt-6 text-xl font-medium text-slate-200 sm:text-2xl">
              Exploring ideas. Inspiring learning.
            </h2>

            <p className="mt-5 max-w-lg text-base leading-8 text-slate-400">
              I’m an MPhil scholar at the University of Sargodha, exploring
              educational research, digital innovation and the thoughtful use of
              artificial intelligence in learning.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-3 rounded-xl bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-400"
              >
                Explore my projects <span aria-hidden="true">↗</span>
              </a>

              <a
                href="#about"
                className="inline-flex items-center gap-3 rounded-xl border border-white/15 bg-white/[0.02] px-6 py-3.5 text-sm font-semibold transition duration-300 hover:-translate-y-1 hover:border-blue-400/60 hover:bg-white/5"
              >
                More about me <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="mt-9 flex items-center gap-3 text-xs leading-6 text-slate-500">
              <span className="h-px w-8 shrink-0 bg-slate-700" />
              Curious about people, learning and technology.
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div
              aria-hidden="true"
              className="absolute -inset-5 rounded-[40px] bg-gradient-to-br from-blue-500/15 to-cyan-500/10 blur-2xl"
            />

            <div className="relative rounded-[28px] border border-white/10 bg-gradient-to-br from-slate-800/90 to-slate-900 p-4 shadow-2xl shadow-black/30">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900/60 to-slate-800">
                {!photoError ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={profile.photo}
                    alt="Portrait of Farkhanda Jabeen"
                    width={640}
                    height={800}
                    onError={() => setPhotoError(true)}
                    className="h-full w-full object-cover object-top transition duration-700 hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center gap-4 px-6 text-center">
                    <span aria-hidden="true" className="text-7xl">
                      👩‍🎓
                    </span>
                    <span className="text-2xl font-bold text-blue-200">
                      Farkhanda Jabeen
                    </span>
                    <span className="text-sm text-slate-400">
                      Research · Education · AI
                    </span>
                  </div>
                )}

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent"
                />

                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-xl font-bold">{profile.name}</p>
                  <p className="mt-1 text-sm text-blue-200">MPhil Scholar</p>
                </div>

                <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-slate-950/65 px-3 py-1.5 text-[11px] font-medium text-slate-200 backdrop-blur-md">
                  ✦ Always learning
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 px-2 pb-1 pt-5">
                <div>
                  <p className="text-xs font-semibold text-slate-200">
                    University of Sargodha
                  </p>
                  <p className="mt-1 text-[11px] text-slate-500">
                    Research & lifelong learning
                  </p>
                </div>

                <a
                  href="#about"
                  aria-label="Read more about Farkhanda"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-blue-400/20 bg-blue-400/10 text-blue-300 transition hover:bg-blue-400/20"
                >
                  ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-y border-white/5 bg-white/[0.015]">
        <div className="mx-auto grid max-w-6xl gap-5 px-5 py-6 text-sm sm:grid-cols-3 sm:px-8">
          {[
            ["📚", "Research with purpose"],
            ["✨", "Ideas with possibility"],
            ["🌱", "Learning without limits"],
          ].map(([icon, text]) => (
            <div
              key={text}
              className="flex items-center justify-center gap-3 text-slate-400"
            >
              <span aria-hidden="true">{icon}</span>
              {text}
            </div>
          ))}
        </div>
      </div>

      <section
        id="about"
        className="mx-auto max-w-6xl scroll-mt-28 px-5 py-20 sm:px-8 sm:py-24"
      >
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
              01 / About me
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              A curious mind.
              <br />
              A meaningful journey.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-slate-400">
              As an MPhil scholar at the University of Sargodha, I’m interested
              in how education can help people think critically, develop
              confidence and engage with new ideas. Research gives me a way to
              ask thoughtful questions and explore issues that matter.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-400">
              My interests also extend to digital tools and artificial
              intelligence. I’m developing my technical skills through practical
              projects and exploring how technology can support learning while
              encouraging independent thinking.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: "🎓",
                  title: "Academic focus",
                  text: "Education, research and critical thinking.",
                },
                {
                  icon: "💡",
                  title: "Digital interests",
                  text: "Creative tools, AI and useful digital experiences.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/[0.07] bg-slate-900/50 p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30"
                >
                  <span aria-hidden="true" className="text-2xl">
                    {item.icon}
                  </span>

                  <h3 className="mt-3 text-sm font-semibold">{item.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="scroll-mt-24 border-y border-white/5 bg-slate-900/30"
      >
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
            02 / Skills & interests
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Learning across disciplines.
          </h2>

          <p className="mt-4 max-w-xl leading-7 text-slate-400">
            Academic skills, creative tools and technologies I’m continuing to
            develop through study and practice.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-slate-950/60 px-5 py-3.5 text-sm font-medium text-slate-200 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-blue-200"
              >
                <span aria-hidden="true" className="text-blue-400">
                  ✦
                </span>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24"
      >
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
              03 / Projects & ideas
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              From curiosity to creation.
            </h2>
          </div>

          <p className="max-w-xs text-sm leading-7 text-slate-400">
            My current portfolio and ideas for future education-focused
            projects.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-slate-900/50 shadow-xl shadow-black/10 transition duration-300 hover:-translate-y-2 hover:border-blue-400/40"
            >
              <div
                className={`relative m-3 flex h-44 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br ${project.gradient}`}
              >
                <span className="absolute left-4 top-4 font-mono text-xs text-white/30">
                  /0{index + 1}
                </span>

                <div
                  aria-hidden="true"
                  className="absolute h-28 w-28 rounded-full border border-white/10"
                />

                <div
                  aria-hidden="true"
                  className="absolute h-40 w-40 rounded-full border border-white/5"
                />

                <span
                  aria-hidden="true"
                  className="relative text-6xl transition duration-500 group-hover:scale-110 group-hover:-rotate-6"
                >
                  {project.icon}
                </span>
              </div>

              <div className="p-6 pt-4">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-blue-400">
                  {project.status}
                </p>

                <h3 className="mt-3 text-xl font-bold">{project.title}</h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/5 bg-white/[0.04] px-2.5 py-1 text-[11px] text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-24 border-t border-white/5 bg-gradient-to-b from-slate-900/40 to-[#070d1b]"
      >
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
              04 / Get in touch
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Let’s exchange
              <br />
              <span className="text-blue-400">ideas.</span>
            </h2>

            <p className="mt-6 max-w-md leading-8 text-slate-400">
              I’m interested in conversations about education, research and
              digital innovation.
            </p>

            <div className="mt-8 rounded-2xl border border-blue-400/15 bg-blue-400/5 p-5">
              <p className="text-sm font-semibold text-blue-200">
                Contact details coming soon
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-400">
                The form is currently a preview. Messages are not sent or
                stored.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            aria-describedby="form-description"
            className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-black/10 sm:p-8"
          >
            <h3 className="text-xl font-semibold">Contact form preview</h3>

            <p
              id="form-description"
              className="mt-2 text-sm leading-6 text-slate-400"
            >
              This demonstration form does not send or save messages.
            </p>

            <div className="mt-6 space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Your name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Enter your name"
                  maxLength={100}
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Share your idea or question..."
                  maxLength={2000}
                  required
                  className={`${inputClass} resize-y`}
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/15 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
              >
                Try form preview <span aria-hidden="true">↗</span>
              </button>

              <p
                role="status"
                aria-live="polite"
                className="text-sm leading-6 text-blue-300"
              >
                {status}
              </p>
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-7 text-center sm:flex-row sm:px-8">
          <a href="#top" className="text-sm font-bold text-slate-300">
            Farkhanda<span className="text-blue-400">.</span>
          </a>

          <p className="text-xs leading-6 text-slate-500">
            © {new Date().getFullYear()} {profile.name}. Built with curiosity.
          </p>

          <a
            href="#top"
            className="text-xs text-slate-400 transition hover:text-blue-300"
          >
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}