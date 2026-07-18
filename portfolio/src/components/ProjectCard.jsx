import Reveal from './Reveal';
import BrowserWindow from './BrowserMockups';

export default function ProjectCard({ project, isLast }) {
  const { id, eyebrow, title, tagline, paragraphs, tags, metrics, links, url, mockup, reverse } = project;

  return (
    <article
      id={id}
      className={`max-w-container mx-auto px-5 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center ${
        isLast ? '' : 'pb-16 sm:pb-24 lg:pb-36 mb-16 sm:mb-24 lg:mb-36 border-b border-line'
      }`}
    >
      <div className={reverse ? 'md:order-2' : ''}>
        <Reveal as="p" className="font-mono text-[0.78rem] text-rust tracking-wide mb-3.5">
          {eyebrow}
        </Reveal>
        <Reveal as="h3" className="font-display font-medium text-[2.2rem] sm:text-[2.8rem] lg:text-[3.2rem] mb-3">
          {title}
        </Reveal>
        <Reveal as="p" delay={50} className="font-display italic text-[1.15rem] mb-6 max-w-[42ch]">
          {tagline}
        </Reveal>

        {paragraphs.map((p, i) => (
          <Reveal key={i} as="p" delay={100 + i * 50} className="text-slate mb-4.5 max-w-[52ch] text-[0.98rem]">
            {p}
          </Reveal>
        ))}

        <Reveal as="ul" delay={200} className="flex flex-wrap gap-2 mb-8 mt-3">
          {tags.map((tag) => (
            <li
              key={tag}
              className="font-mono text-[0.72rem] text-ink border border-line px-3 py-1.5 rounded-full bg-paper-dim"
            >
              {tag}
            </li>
          ))}
        </Reveal>

        {/* <Reveal as="div" delay={250} className="flex gap-6 sm:gap-10 mb-8 pt-6 border-t border-line flex-wrap">
          {metrics.map((m) => (
            <div key={m.label} className="flex flex-col gap-1">
              <span className="font-display font-semibold text-[1.8rem] text-ink">{m.value}</span>
              <span className="font-mono text-[0.68rem] text-slate max-w-[14ch]">{m.label}</span>
            </div>
          ))}
        </Reveal> */}

        <Reveal as="div" delay={300} className="flex gap-7">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group font-mono text-[0.85rem] border-b border-ink pb-1 transition-colors duration-300 hover:text-rust hover:border-rust"
            >
              {link.label}{' '}
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </a>
          ))}
        </Reveal>
      </div>

      <Reveal as="div" className={reverse ? 'md:order-1' : ''}>
        <BrowserWindow url={url} mockup={mockup} />
      </Reveal>
    </article>
  );
}