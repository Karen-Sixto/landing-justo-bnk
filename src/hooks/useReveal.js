import { useEffect, useRef } from 'react';

/**
 * Añade el atributo `data-revealed` (React no lo sobrescribe al re-renderizar) a los elementos `.reveal` dentro del contenedor
 * cuando entran en el viewport (una sola vez).
 */
export function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return undefined;
    const items = root.matches('.reveal') ? [root] : [...root.querySelectorAll('.reveal')];

    if (!('IntersectionObserver' in window)) {
      items.forEach((el) => el.setAttribute('data-revealed', ''));
      return undefined;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-revealed', '');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return ref;
}
