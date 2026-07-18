import Reveal from './Reveal';
import { skillGroups } from '../data/skills';

function LevelDots({ level }) {
  return (
    <span className="inline-flex gap-1 shrink-0" aria-label={`Proficiency: ${level} of 3`}>
      {[1, 2, 3].map((i) => (
      <span key={i} className={`w-1.5 h-1.5 rounded-full ${i <= level ? 'bg-brass' : 'bg-line'}`} />
      ))}
    </span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="bg-paper py-20 sm:py-28 lg:py-[140px]"> <div className="max-w-container mx-auto px-5 sm:px-8">
        <Reveal as="p" className="font-display font-normal text-[2rem] tracking-wide text-rust uppercase mb-4">
          Skills
        </Reveal>
      

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {skillGroups.map((group, gi) => (
            <Reveal as="div" delay={100 + gi * 50} key={group.category}>
              <p className="font-mono text-[0.72rem] text-slate uppercase tracking-wide mb-5 pb-3 border-b border-line">
                {group.category}
              </p>
              <ul className="flex flex-col gap-3.5">
                {group.items.map((item) => (
                  <li key={item.name} className="flex items-center justify-between gap-4">
                    <span className="text-[0.95rem] text-ink">{item.name}</span>
                    <LevelDots level={item.level} />
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal as="p" delay={300} className="font-mono text-[0.7rem] text-slate-light mt-14 flex items-center gap-2 flex-wrap">
          <LevelDots level={3} /> Daily driver &nbsp;·&nbsp; <LevelDots level={2} /> Solid &nbsp;·&nbsp; <LevelDots level={1} /> Working knowledge
        </Reveal>
      </div>
    </section>
  );
}
