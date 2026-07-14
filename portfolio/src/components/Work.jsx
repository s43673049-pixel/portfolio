import Reveal from './Reveal';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

export default function Work() {
  return (
    <section id="work" className="bg-paper py-20 sm:py-28 lg:py-[140px]">
      <div className="max-w-container mx-auto px-5 sm:px-8 mb-20">
        <Reveal as="p" className="font-mono text-[0.78rem] tracking-wide text-rust uppercase mb-4">
          Selected work
        </Reveal>
        <Reveal as="h2" delay={50} className="font-display font-normal leading-tight text-[2rem] sm:text-[2.6rem] lg:text-[3rem]">
          Three problems worth
          <br />
          solving properly.
        </Reveal>
        <Reveal as="p" delay={100} className="font-mono text-[0.85rem] text-slate max-w-[46ch] mt-5">
          Each of these shipped to real users. Metrics below are what
          changed after launch, not projections.
        </Reveal>
      </div>

      {projects.map((project, i) => (
        <ProjectCard key={project.id} project={project} isLast={i === projects.length - 1} />
      ))}
    </section>
  );
}