import Reveal from './Reveal';

export default function Contact() {
  const year = new Date().getFullYear();

  return (
    <section id="contact" className="bg-ink text-paper pt-24 sm:pt-32 lg:pt-[150px]">
      <div className="max-w-container mx-auto px-5 sm:px-8">
        <Reveal as="p" className="font-mono text-[0.78rem] tracking-wide text-brass uppercase mb-4">
          Contact
        </Reveal>
        <Reveal
          as="h2"
          delay={50}
          className="font-display font-normal leading-[1.08] text-[2.2rem] sm:text-[3rem] lg:text-[3.8rem] mb-10"
        >
           Let's build something
          <br />
           <em className="font-normal">great together.</em>
        </Reveal>

        <Reveal as="div" delay={100}>
          <a
            href="mailto:s43673049@gmail.com"
            className="inline-block font-display italic text-[1.5rem] sm:text-[2rem] lg:text-[2.4rem] text-brass border-b border-brass-soft pb-1.5 mb-8 transition-opacity duration-300 hover:opacity-75"
          >
            snehakulhari.dev
          </a>
        </Reveal>

        <Reveal as="p" delay={150} className="text-paper-70 max-w-[52ch] mb-10">
        I'm currently seeking internship opportunities and entry-level software development roles where I can contribute to real-world products while continuing to learn and grow. If you'd like to discuss a project, collaboration, or potential opportunity, I'd be happy to hear from you.
        </Reveal>

        <Reveal
          as="div"
          delay={200}
          className="flex gap-7 flex-wrap pb-14 sm:pb-16 border-b border-line-on-ink"
        >
          <a href="#" target="_blank" rel="noopener" className="font-mono text-[0.85rem] text-paper-70 transition-colors duration-300 hover:text-brass">
            GitHub ↗
          </a>
          <a href="#" target="_blank" rel="noopener" className="font-mono text-[0.85rem] text-paper-70 transition-colors duration-300 hover:text-brass">
            LinkedIn ↗
          </a>
          <a href="#" target="_blank" rel="noopener" className="font-mono text-[0.85rem] text-paper-70 transition-colors duration-300 hover:text-brass">
            Resume (PDF) ↗
          </a>
        </Reveal>
      </div>

      <footer className="max-w-container mx-auto px-5 sm:px-8 py-6 sm:py-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <p className="font-mono text-[0.72rem] text-slate-light">
          © {year} Sneha Kulhari. Built with React, Tailwind CSS, and a focus on accessibility, performance, and clean user experiences.
        </p>
        <a href="#top" className="font-mono text-[0.72rem] text-paper-70 hover:text-brass transition-colors duration-300">
          Back to top ↑
        </a>
      </footer>
    </section>
  );
}