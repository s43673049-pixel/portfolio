import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setPct(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] z-[200]" aria-hidden="true">
      <div className="h-full bg-brass transition-[width] duration-100 ease-linear" style={{ width: `${pct}%` }} />
    </div>
  );
}