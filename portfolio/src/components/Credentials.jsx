import Reveal from './Reveal';
import { education, certifications } from '../data/credentials';

export default function Credentials() {
  return (
    <section id="credentials" className="bg-paper-dim py-20 sm:py-28 lg:py-[140px] border-t border-b border-line">
      <div className="max-w-container mx-auto px-5 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20">
        <div>
          <Reveal as="p" className="font-mono text-[0.78rem] tracking-wide text-rust uppercase mb-4">
            Education
          </Reveal>
          <Reveal as="h2" delay={50} className="font-display font-normal text-[1.6rem] sm:text-[1.9rem] mb-8 max-w-[18ch]">
            Where the fundamentals came from.
          </Reveal>
          <div className="flex flex-col gap-8">
            {education.map((ed) => (
              <Reveal as="div" delay={100} key={ed.degree} className="border-t border-line pt-5">
                <div className="flex justify-between items-baseline gap-4 mb-2 flex-wrap">
                  <p className="font-display text-[1.1rem]">{ed.degree}</p>
                  <span className="font-mono text-[0.72rem] text-slate whitespace-nowrap">{ed.period}</span>
                </div>
                <p className="font-mono text-[0.78rem] text-rust mb-2">{ed.institution}</p>
                <p className="text-slate text-[0.92rem]">{ed.note}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <Reveal as="p" delay={50} className="font-mono text-[0.78rem] tracking-wide text-rust uppercase mb-4">
            Certifications
          </Reveal>
          <Reveal as="h2" delay={100} className="font-display font-normal text-[1.6rem] sm:text-[1.9rem] mb-8 max-w-[18ch]">
            Things I went out of my way to learn properly.
          </Reveal>
          <ul className="flex flex-col">
            {certifications.map((cert, i) => (
              <Reveal
                as="li"
                delay={150 + i * 50}
                key={cert.name}
                className="flex justify-between items-baseline gap-4 py-4 border-t border-line flex-wrap"
              >
                <div>
                  <p className="text-ink text-[0.95rem]">{cert.name}</p>
                  <p className="font-mono text-[0.72rem] text-slate mt-1">{cert.issuer}</p>
                </div>
                <span className="font-mono text-[0.72rem] text-slate-light whitespace-nowrap">{cert.year}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}