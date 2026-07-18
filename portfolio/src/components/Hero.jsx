import Reveal from './Reveal';

const INDEX_ITEMS = [
  { href: '#project-01', num: '01', name: 'Task Manager', tag: 'Productivity App' },
  { href: '#project-02', num: '02', name: 'Expense Tracker', tag: 'Personal Finance' },
  { href: '#project-03', num: '03', name: 'Weather App', tag: 'Weather Dashboard' },
  { href: '#project-04', num: '04', name: 'Blood Donation System', tag: 'Healthcare Platform' },
  { href: '#project-05', num: '05', name: 'Survey Form', tag: 'Responsive Form' },
  { href: '#project-06', num: '06', name: 'Library Management System', tag: 'Library Management' },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink text-paper pt-[120px] sm:pt-[168px] pb-16 sm:pb-24">

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(600px 300px at 88% 8%, rgba(201,161,90,0.16), transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-container mx-auto px-5 sm:px-8 row-span-1">

        <Reveal as="p" delay={50} className="font-mono text-[1.25rem] tracking-wide text-brass mb-7">
          Hi, I’m <strong className="font-medium">Sneha</strong> 
          <p>Frontend Developer | MERN Stack Developer </p>
        </Reveal>

        <Reveal
          as="h1"
          delay={100}
          className="font-display font-normal leading-[1.03] max-w-[16ch] text-[2.6rem] sm:text-[4rem] lg:text-[5.4rem]"
        >
          I build interfaces
          <br />
          that make <em className="font-medium">data</em>
          <br />
          feel <em className="font-medium">obvious.</em>
        </Reveal>

        <Reveal as="p" delay={180} className="text-paper-70 max-w-[46ch] mt-7 text-[1.02rem] sm:text-[1.2rem]">
         Focus on building responsive and user-friendly web applications using React, Node.js, Express, and MySQL. Passionate about creating seamless user experiences and writing clean, maintainable code.
        </Reveal>

{/* buttons */}
        <Reveal as="div" delay={250} className="flex gap-4 mt-10 flex-wrap">
          <a
            href="#work"
            className="font-mono text-[0.85rem] px-6 py-3.5 rounded-full bg-paper text-ink inline-flex items-center gap-2 transition-all duration-300 hover:bg-brass hover:-translate-y-0.5"
          >
            View the work
          </a>
          <a
            href="#contact"
            className="font-mono text-[0.85rem] px-6 py-3.5 rounded-full border border-line-on-ink text-paper inline-flex items-center gap-2 transition-all duration-300 hover:border-brass hover:text-brass hover:-translate-y-0.5"
          >
            Get in touch
          </a>
        </Reveal>

      </div>


{/* project index */}
      <Reveal
        as="div"
        delay={300}
        className="relative z-10 max-w-container mx-auto px-5 sm:px-8 mt-16 sm:mt-24 border-t border-line-on-ink pt-7 "
        aria-label="Featured projects index"
      >
        <p className="font-mono text-[0.72rem] text-slate-light tracking-[0.08em] uppercase mb-3.5">On this page</p>
        {INDEX_ITEMS.map((item) => (
            <a
            key={item.href}
            href={item.href}
            className="group flex items-baseline gap-5 py-4 border-t border-line-on-ink transition-all duration-300 hover:pl-3 hover:text-brass"
          >
            <span className="font-mono text-brass text-[0.85rem] w-6">{item.num}</span>
            <span className="font-display text-[1.1rem] sm:text-[1.4rem] flex-1">{item.name}</span>
            <span className="font-mono text-[0.72rem] text-slate-light hidden sm:inline">{item.tag}</span>
          </a>
        ))}
      </Reveal>

      <div className="hidden sm:flex absolute bottom-7 left-5 sm:left-8 items-center gap-2.5 font-mono text-[0.7rem] text-slate-light tracking-[0.08em] uppercase">
        <span>Scroll</span>
        <div className="w-[30px] h-px bg-slate-light relative overflow-hidden">
          <span className="absolute left-[-100%] top-0 h-full w-full bg-brass animate-scrollline" />
        </div>
      </div>
    </section>
  );
}