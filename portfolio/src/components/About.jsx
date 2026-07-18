import Reveal from './Reveal';

const FACTS = [
  { label: "Focus",
    value: "MERN Stack & Full-Stack Development", },
  { label: "Currently Learning",
    value: "TypeScript, Redux Toolkit, MongoDB", },
  { label: "Availability",
    value: "Open to internships and freelance projects", },
];

export default function About() {
  return (
    <section id="about" className="bg-paper-dim py-20 sm:py-28 lg:py-[140px] border-t border-b border-line">

      <div className="max-w-container mx-auto px-5 sm:px-8 grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 md:gap-16 lg:gap-20">

        <Reveal as="div" className="flex flex-col gap-5 items-start">

          <div className="w-full max-w-[220px] md:max-w-none aspect-[4/5] rounded-xl overflow-hidden border border-line">

          <img
          src="/images/profile.webp"
          alt="Sneha Kulhari"
          className="w-full h-full object-cover"
        />
        </div>
          <p className="font-mono text-[0.78rem] text-slate flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-moss shadow-[0_0_0_4px_rgba(79,156,124,0.18)]" />
            Open to internships & freelance opportunities
          </p>
        </Reveal>

        <div>
          <Reveal as="p" className="font-mono text-[0.78rem] tracking-wide text-rust uppercase mb-4">
            About
          </Reveal>
          <Reveal
            as="h2"
            delay={50}
            className="font-display font-normal leading-[1.35] text-[1.5rem] sm:text-[1.9rem] lg:text-[2.2rem] mb-8 max-w-[24ch]"
          >
            Building modern web applications with — <em className="not-italic italic text-brass">{" "}clean code, scalable architecture, and meaningful user experiences.</em>
          </Reveal>

          <Reveal as="p" delay={100} className="text-slate mb-5 max-w-[60ch]">
            I'm a Computer Science student with a strong interest in full-stack web development. I enjoy transforming ideas into responsive, accessible, and maintainable web applications using modern JavaScript technologies.
          </Reveal>

          <Reveal as="p" delay={150} className="text-slate mb-5 max-w-[60ch]">
            My current focus is the MERN stack, where I'm building projects with React, Node.js, Express.js, and SQL/Firebase databases. Along the way, I emphasize reusable components, RESTful APIs, clean project architecture, and performance optimization.
          </Reveal>

          <Reveal as="p" delay={200} className="text-slate mb-5 max-w-[60ch]">
             Every project I build is an opportunity to improve my problem-solving skills, write cleaner code, and learn industry best practices. I'm actively seeking internship opportunities where I can contribute to real-world products while continuing to grow as a software engineer.
          </Reveal>

          <Reveal as="div" delay={250} className="mt-9 border-t border-line pt-6 flex flex-col gap-3.5">
            {FACTS.map((fact) => (
              <div key={fact.label} className="flex gap-5 flex-wrap">
                <span className="font-mono text-[0.72rem] text-rust uppercase tracking-wide w-[180px] shrink-0">
                  {fact.label}
                </span>
                <span className="text-[0.92rem] text-ink">{fact.value}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}