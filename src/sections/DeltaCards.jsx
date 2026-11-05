import { useEffect, useRef, useState } from 'react';
import Button from '../components/ds/Button.jsx';
import CreditCardTile from '../components/ds/CreditCardTile.jsx';
import { useReveal } from '../hooks/useReveal.js';
import './DeltaCards.css';

const COMMON_EXTRA = [
  'Reposición de plástico: $100.00 más IVA por evento',
  'Pago tardío: $500.00 más IVA por evento',
  'Uso nacional e internacional con Mastercard®',
  'Sujeta a aprobación de crédito, para personas de 25 años o más',
];

const CARDS = [
  {
    id: 'clasica',
    name: 'Clásica',
    income: '$5,000',
    image: 'assets/card-clasica.png',
    benefits: [
      '1% de cashback con tope de hasta $2,000 anuales.\n(En Jüsto Súper tus puntos valen el triple al pagar con tu TDC)',
      '2x1 en Cinépolis*',
      '40% descuento con Hertz*',
      'Seguro de Protección de compras',
      'MasterCard Global Service',
    ],
  },
  {
    id: 'platinum',
    name: 'Platinum',
    income: '$50,000',
    image: 'assets/card-platinum.png',
    more: true,
    extra: [
      'CAT promedio de 52.9% sin IVA',
      'Tasa de interés anual de 41.77% (variable TIIE + 35 puntos) sin IVA',
      'Comisión anual de $2,000.00 sin IVA',
      ...COMMON_EXTRA,
    ],
    benefits: [
      '2% de cashback con tope de $4,000 anuales.\n(En Jüsto Súper tus puntos valen el triple al pagar con tu TDC)',
      '2x1 en Cinépolis*',
      '40% descuento con Hertz*',
      'Interrupción de viaje',
      'Travel Assistance',
      'Protección de equipaje',
    ],
  },
  {
    id: 'black',
    name: 'Black',
    income: '$100,000',
    image: 'assets/card-black.png',
    more: true,
    extra: [
      'CAT promedio de 42.1% sin IVA',
      'Tasa de interés anual de 31.77% (variable TIIE + 25 puntos) sin IVA',
      'Comisión anual de $5,000.00 sin IVA',
      ...COMMON_EXTRA,
    ],
    benefits: [
      '5% de cashback con tope de $20,000 anuales.\n(En Jüsto Súper tus puntos valen el triple al pagar con tu TDC)',
      '2x1 en Cinépolis*',
      '40% descuento con Hertz*',
      'Interrupción de viaje',
      'Travel Assistance',
      'Protección de equipaje',
    ],
  },
];

export default function DeltaCards() {
  const ref = useReveal();
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  // Indicador del slider (Tablet / Mobile)
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;
    const onScroll = () => {
      const cards = [...track.children];
      const center = track.scrollLeft + track.clientWidth / 2;
      let best = 0;
      let dist = Infinity;
      cards.forEach((c, i) => {
        const d = Math.abs(c.offsetLeft + c.offsetWidth / 2 - center);
        if (d < dist) { dist = d; best = i; }
      });
      if (track.scrollLeft < 8) best = 0;
      setActive(best);
    };
    track.addEventListener('scroll', onScroll, { passive: true });
    return () => track.removeEventListener('scroll', onScroll);
  }, []);

  const goTo = (i) => {
    const track = trackRef.current;
    const card = track?.children[i];
    if (card) track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: 'smooth' });
  };

  return (
    <section className="delta-section" id="tarjetas" ref={ref}>
      <div className="delta container">
        <div className="delta__bg" aria-hidden="true" />
        <div className="delta__content">
          <h2 className="delta__title reveal">Encuentra la tarjeta ideal para ti</h2>

          <div className="delta__cards" ref={trackRef}>
            {CARDS.map((c, i) => (
              <CreditCardTile
                key={c.id}
                card={c}
                className="reveal"
                style={{ '--delay': `${120 + i * 120}ms` }}
              />
            ))}
          </div>

          <div className="delta__footer">
            <div className="delta__dots" role="tablist" aria-label="Tarjetas">
              {CARDS.map((c, i) => (
                <button
                  key={c.id}
                  type="button"
                  role="tab"
                  aria-selected={active === i}
                  aria-label={`Ver tarjeta ${c.name}`}
                  className={`delta__dot ${active === i ? 'is-active' : ''}`}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>
            <Button href="#pidela" className="reveal" style={{ '--delay': '300ms' }}>
              Pídela en la Super App
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
