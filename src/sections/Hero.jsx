import { useRef } from 'react';
import Button from '../components/ds/Button.jsx';
import './Hero.css';

// Desktop (v2 de Figma)
const BENEFITS_DESKTOP = [
  { icon: '0', text: 'Sin comisiones ni montos mínimos de apertura', highlight: true },
  { icon: 'assets/icon-smartphone.png', text: '100% digital, muy fácil y segura' },
  { icon: 'assets/icon-bank.png', text: 'Hacé tus gestiones sin pasar por una sucursal' },
  { icon: 'assets/icon-bank.png', text: 'Hacé tus gestiones sin pasar por una sucursal' },
];

// Tablet y mobile (sus frames en Figma no cambiaron)
const BENEFITS_COMPACT = [
  { icon: '%', text: 'Hasta 5% de cashback anual.', highlight: true },
  { icon: 'assets/icon-smartphone.png', text: 'Solicitud 100% digital.' },
  { icon: 'assets/icon-money.png', text: 'CVV dinámico para tus compras en línea.' },
  { icon: 'assets/icon-wallet.png', text: 'Tarjeta física y virtual en una misma cuenta.' },
];

function BenefitList({ items, className }) {
  return (
    <ul className={`hero__benefits hero__fade ${className}`} style={{ '--d': '560ms' }} aria-label="Beneficios">
      {items.map((b, i) => (
        <li className="benefit" key={`${b.text}-${i}`}>
          <span className={`benefit__icon ${b.highlight ? 'benefit__icon--brand' : ''}`} aria-hidden="true">
            {b.highlight ? <span className="benefit__glyph">{b.icon}</span> : <img src={b.icon} alt="" width="28" height="28" />}
          </span>
          <span className="benefit__text">{b.text}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Hero() {
  const artRef = useRef(null);

  // Parallax suave de la ilustración siguiendo el cursor
  const onMove = (e) => {
    const el = artRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) / r.width;
    const y = (e.clientY - (r.top + r.height / 2)) / r.height;
    el.style.setProperty('--rx', `${(-y * 8).toFixed(2)}deg`);
    el.style.setProperty('--ry', `${(x * 10).toFixed(2)}deg`);
    el.style.setProperty('--tx', `${(x * 14).toFixed(1)}px`);
    el.style.setProperty('--ty', `${(y * 14).toFixed(1)}px`);
  };
  const onLeave = () => {
    const el = artRef.current;
    if (!el) return;
    ['--rx', '--ry', '--tx', '--ty'].forEach((p) => el.style.setProperty(p, '0'));
  };

  return (
    <section className="hero-section" id="top">
      <div className="hero" onMouseMove={onMove} onMouseLeave={onLeave}>
        <div className="hero__main container">
          <div className="hero__text">
            <h1 className="hero__title">
              <span className="hero__line" style={{ '--d': '80ms' }}>Más que una tarjeta </span>
              <span className="hero__line" style={{ '--d': '180ms' }}>
                de crédito, <span className="hero__brand">Jüsto</span> lo que buscabas
              </span>
            </h1>
            <p className="hero__subtitle hero__fade" style={{ '--d': '320ms' }}>
              La llave a todo lo que necesitas en tu día a día{' '}
              <strong>te devuelve dinero en todas tus compras, sin letra pequeña.</strong>
            </p>
            <div className="hero__fade" style={{ '--d': '440ms' }}>
              <Button href="#pidela">Pídela en la Super App</Button>
            </div>
          </div>

          <div className="hero__art" ref={artRef}>
            <div className="hero__art-glow" aria-hidden="true" />
            <img
              className="hero__art-img"
              src="assets/hero-card-3d.webp"
              alt="Tarjeta de crédito Jüsto verde rodeada de cojines"
              width="566"
              height="566"
              fetchpriority="high"
            />
          </div>
        </div>

        <BenefitList items={BENEFITS_DESKTOP} className="hero__benefits--desktop" />
        <BenefitList items={BENEFITS_COMPACT} className="hero__benefits--compact" />
      </div>
    </section>
  );
}
