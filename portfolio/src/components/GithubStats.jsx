import { useMemo } from 'react';
import Reveal from './Reveal';

const STATS = [
  { value: '620+', label: 'contributions this year' },
  { value: '38', label: 'public repositories' },
  { value: '1.1k', label: 'stars earned' },
  { value: '92%', label: 'issues closed within a week' },
];

export default function GithubStats() {
  // Decorative contribution heatmap — swap for a real GitHub API call if you want live data.
  const heat = useMemo(() => Array.from({ length: 182 }, () => Math.floor(Math.random() * 5)), []);

  return (
    <section id="github" className="bg-paper-dim py-20 sm:py-28 lg:py-[140px] border-t border-b border-line">
      <div className="max-w-container mx-auto px-5 sm:px-8">
        <Reveal as="p" className="font-mono text-[0.78rem] tracking-wide text-rust uppercase mb-4">
          Open source
        </Reveal>
        <Reveal
          as="h2"
          delay={50}
          className="font-display font-normal leading-tight text-[2rem] sm:text-[2.6rem] lg:text-[3rem] mb-6 max-w-[20ch]"
        >
          Most of it happens in public.
        </Reveal>
        <Reveal as="p" delay={100} className="font-mono text-[0.85rem] text-slate max-w-[50ch] mb-14">
          A rough snapshot of the last twelve months — commits, reviews, and
          the occasional 2am bug fix.
        </Reveal>

        <Reveal as="div" delay={150} className="flex flex-wrap gap-8 sm:gap-14 mb-14 pb-14 border-b border-line">
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col gap-1">
              <span className="font-display font-semibold text-[1.8rem] sm:text-[2.2rem] text-ink">{s.value}</span>
              <span className="font-mono text-[0.68rem] text-slate max-w-[16ch]">{s.label}</span>
            </div>
          ))}
        </Reveal>

        <Reveal as="div" delay={200}>
          <p className="font-mono text-[0.72rem] text-slate uppercase tracking-wide mb-4">Contribution activity</p>
          <div className="flex flex-wrap gap-[3px] max-w-[600px]">
            {heat.map((v, i) => (
              <span
                key={i}
                className={`w-2.5 h-2.5 rounded-[2px] ${
                  v === 0
                    ? 'bg-line/50'
                    : v === 1
                    ? 'bg-brass/25'
                    : v === 2
                    ? 'bg-brass/50'
                    : v === 3
                    ? 'bg-brass/75'
                    : 'bg-brass'
                }`}
              />
            ))}
          </div>
          <a
            href="#"
            target="_blank"
            rel="noopener"
            className="inline-block mt-6 font-mono text-[0.85rem] border-b border-ink pb-1 transition-colors duration-300 hover:text-rust hover:border-rust"
          >
            View GitHub profile ↗
          </a>
        </Reveal>
      </div>
    </section>
  );
}