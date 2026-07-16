import Reveal from './Reveal';

const STEPS = [
  {
    num: '01',
    title: 'Discover',
    body: 'Half of good frontend work happens before any code — understanding what the data actually needs to communicate, who is reading it, and under what constraints.',
  },
  {
    num: '02',
    title: 'Prototype',
    body: 'Rough, fast, disposable. I mock up the riskiest interactions first — the dense table, the checkout step, the bulk action — before touching final visual design.',
  },
  {
    num: '03',
    title: 'Build',
    body: 'Component-first, typed, tested as I go. I\u2019d rather ship a smaller feature set that holds up than a large one that\u2019s quietly fragile.',
  },
  {
    num: '04',
    title: 'Ship & iterate',
    body: 'Launch is a checkpoint, not a finish line. I stay close to real usage data and come back to fix what the mockups couldn\u2019t predict.',
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-ink text-paper py-20 sm:py-28 lg:py-[140px]">
      <div className="max-w-container mx-auto px-5 sm:px-8">
        <Reveal as="p" className="font-mono text-[0.78rem] tracking-wide text-brass uppercase mb-4">
          Process
        </Reveal>
        <Reveal
          as="h2"
          delay={50}
          className="font-display font-normal leading-tight text-[2rem] sm:text-[2.6rem] lg:text-[3rem] mb-6 max-w-[20ch]"
        >
          How a project actually moves.
        </Reveal>
        <Reveal as="p" delay={100} className="font-mono text-[0.85rem] text-paper-70 max-w-[46ch] mb-16">
          Not a rigid methodology — just the order things tend to happen in
          when a project goes well.
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
          {STEPS.map((step, i) => (
            <Reveal
              as="div"
              delay={150 + i * 60}
              key={step.num}
              className="border-t border-line-on-ink pt-6"
            >
              <span className="font-mono text-brass text-[0.85rem]">{step.num}</span>
              <h3 className="font-display text-[1.4rem] mt-3 mb-3">{step.title}</h3>
              <p className="text-paper-70 text-[0.92rem] leading-relaxed">{step.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}