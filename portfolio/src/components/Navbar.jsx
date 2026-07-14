import { useState } from 'react'

const NavLinks = [
    { href: '#top', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#contact', label: 'Contact' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setOpen(false);
    const target = document.querySelector(href);
    if (!target) return;
    const masthead = document.getElementById('masthead');
    const offset = masthead ? masthead.offsetHeight : 0;
    const top = target.getBoundingClientRect().top + window.scrollY - offset + 1;
    window.scrollTo({ top, behavior: 'smooth' });
  };

    return (
        <header id="masthead"
            className="fixed top-0 left-0 right-0 z-[100] bg-ink/[0.82] backdrop-blur-md backdrop-saturate-150 border-b border-line-on-ink"
        >
            <div className="max-w-container mx-auto px-5 sm:px-8 py-[18px] flex items-center justify-between gap-6">

                <a href="#top" onClick={(e) => handleNavClick(e, '#top')}
                    className="font-display font-semibold text-lg tracking-wide text-paper"
                >SK<span className="text-brass">.</span>
                </a>

                <nav aria-label="Primary" className="hidden md:flex gap-8 flex-1 justify-center">
                    {NavLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="font-mono text-[0.78rem] tracking-wide text-paper-70 flex items-center gap-1.5 pb-1 border-b border-transparent transition-colors duration-300 hover:text-paper hover:border-brass"
                        >
                    <span className="text-brass text-[0.72rem]">{link.index}</span> {link.label}
                </a>
                ))}
            </nav>

         <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="hidden md:inline-flex font-mono text-[0.78rem] text-ink bg-paper px-4 py-2.5 rounded-full whitespace-nowrap transition-all duration-300 hover:bg-brass hover:-translate-y-0.5"
            >
            Let's talk →
        </a>
        <button
            className="md:hidden w-34px h-34px flex flex-col items-center justify-center gap-1.5"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
        >
                <span className="w-5 h-[1.5px] bg-paper block" />
                <span className="w-5 h-[1.5px] bg-paper block" />
            </button>
      </div>

      {open && (
        <nav aria-label="Mobile" className="md:hidden flex flex-col px-5 sm:px-8 pb-5 pt-2 border-t border-line-on-ink">
          {NavLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-mono text-[0.85rem] text-paper-70 py-3 border-b border-line-on-ink"
            >
              {link.index} — {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>

);     
}