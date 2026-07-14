import { useEffect, useRef, useState } from 'react';

export function useReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(() => {
    // SSR-safe feature detect so we don't call setState synchronously in an effect
    if (typeof window === 'undefined') return false;
    return !('IntersectionObserver' in window);
  });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!('IntersectionObserver' in window)) {
    //   setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}