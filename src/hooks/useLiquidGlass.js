import { useEffect, useState } from 'react';

/**
 * Detecta si lo que pasa por detrás del navbar es claro u oscuro,
 * para cambiar el color de logo y links y que siempre se lean.
 */
export function useBackdropTone(navRef) {
  const [tone, setTone] = useState('dark');

  useEffect(() => {
    let raf = 0;
    const luminance = (rgb) => {
      const [r, g, b] = rgb.map((v) => {
        const c = v / 255;
        return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
      });
      return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    };
    const bgAt = (x, y) => {
      const nav = navRef.current;
      // Pila de pintado en ese punto (de arriba hacia abajo): incluye capas de fondo hermanas, no solo ancestros
      const stack = document.elementsFromPoint(x, y).filter((e) => !nav?.contains(e));
      for (const node of stack) {
        if (/^(IMG|VIDEO|PICTURE|CANVAS)$/.test(node.tagName)) return 0.2; // fotos: se tratan como fondo oscuro
        const m = getComputedStyle(node).backgroundColor.match(/[\d.]+/g);
        if (m && (m[3] === undefined || Number(m[3]) >= 0.5)) return luminance(m.slice(0, 3).map(Number));
      }
      return 1; // fondo de la página (blanco)
    };
    const check = () => {
      const nav = navRef.current;
      if (!nav) return;
      const y = nav.getBoundingClientRect().height / 2;
      const xs = [0.15, 0.5, 0.85].map((f) => window.innerWidth * f);
      const light = xs.map((x) => bgAt(x, y)).filter((l) => l > 0.45).length >= 2;
      setTone(light ? 'light' : 'dark');
    };
    const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(check); };
    check();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, [navRef]);

  return tone;
}
