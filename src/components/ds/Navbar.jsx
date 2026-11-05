import { useEffect, useState } from 'react';
import './Navbar.css';

const LINKS = [
  { label: 'Tarjetas', href: '#tarjetas' },
  { label: '¿Cómo pedirla?', href: '#pasos' },
  { label: 'Requisitos', href: '#requisitos' },
  { label: 'Jüsto', href: '#super-app' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Pídela', href: '#pidela' },
];

/**
 * DS · Navbar (Device = Web / Tablet / Mobile)
 * Header fijo con efecto "liquid glass": transparente sobre el hero y
 * vidrio esmerilado con tinte forest al hacer scroll.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Sección activa para el indicador del menú
  useEffect(() => {
    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(`#${e.target.id}`); });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="navbar__glass" aria-hidden="true" />
      <div className="navbar__inner">
        <button
          type="button"
          className="navbar__menu-btn"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="navbar__burger" aria-hidden="true">
            <span /><span /><span />
          </span>
        </button>

        <a href="#top" className="navbar__logo" aria-label="Jüsto, ir al inicio">
          <img src="assets/logo-white.png" alt="Jüsto" width="144" height="40" />
        </a>

        <nav className="navbar__nav" aria-label="Principal">
          <ul className="navbar__links">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a className={`navbar__link ${active === l.href ? 'is-active' : ''}`} href={l.href}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div id="mobile-menu" className="navbar__drawer" hidden={!open}>
        <ul>
          {LINKS.map((l, i) => (
            <li key={l.href} style={{ '--i': i }}>
              <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
