import Reveal from './Reveal';

const FACTS = [
  { label: 'Focus', value: 'React · Vue · TypeScript · Design systems' },
  { label: 'Also comfortable with', value: 'Accessibility audits · Performance tuning · Motion' },
  { label: 'Currently', value: 'Open to freelance and full-time roles' },
];

export default function About() {
  return (
    <section id="about" className="bg-paper-dim py-20 sm:py-28 lg:py-[140px] border-t border-b border-line">
      <div className="max-w-container mx-auto px-5 sm:px-8 grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 md:gap-16 lg:gap-20">
        <Reveal as="div" className="flex flex-col gap-5 items-start">
          <div className="w-full max-w-[220px] md:max-w-none aspect-[4/5] rounded-xl overflow-hidden border border-line">
            <div className="w-full h-full bg-ink text-paper flex items-center justify-center font-display italic text-6xl">
              AR
            </div>
          </div>
          <p className="font-mono text-[0.78rem] text-slate flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-moss shadow-[0_0_0_4px_rgba(79,156,124,0.18)]" />
            Available for freelance work
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
            I got into this because I liked that a browser refresh could
            prove me wrong immediately — <em className="not-italic italic text-brass">no waiting, no guessing.</em>
          </Reveal>

          <Reveal as="p" delay={100} className="text-slate mb-5 max-w-[60ch]">
            That's still what I like about the job. Frontend work gives you
            instant, honest feedback: either the layout holds up at 375px or
            it doesn't, either the table stays fast at ten thousand rows or it
            chugs. I've spent the last four years getting comfortable with
            that kind of feedback, mostly on products where the interface
            has to carry a lot of information without confusing anyone —
            dashboards, storefronts, internal tools.
          </Reveal>

          <Reveal as="p" delay={150} className="text-slate mb-5 max-w-[60ch]">
            I care more about the boring parts than I probably should — load
            states, error messages, what happens when a list is empty, what
            happens when someone's internet is bad. Most of what separates a
            good product from a great one lives in those unglamorous
            corners, and most teams don't have time to get to them. I do.
          </Reveal>

          <Reveal as="p" delay={200} className="text-slate mb-5 max-w-[60ch]">
            Outside of work I'm usually reading about type design, taking
            apart other people's CSS to see how they solved something, or
            losing an evening to a side project that will never ship. I'm
            based in Punjab, India, and work with teams across time zones —
            mornings for calls, the rest of the day for heads-down building.
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