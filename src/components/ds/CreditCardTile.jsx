import { useId, useRef, useState } from 'react';
import ListCard from './ListCard.jsx';
import './CreditCardTile.css';

/**
 * DS · Card (Delta Cards) — Clásica / Platinum / Black
 */
export default function CreditCardTile({ card, style, className = '' }) {
  const artRef = useRef(null);
  const [open, setOpen] = useState(false);
  const panelId = useId();

  const onMove = (e) => {
    const el = artRef.current;
    if (!el || window.matchMedia('(hover: none)').matches) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty('--rx', `${(-y * 14).toFixed(2)}deg`);
    el.style.setProperty('--ry', `${(x * 16).toFixed(2)}deg`);
    el.style.setProperty('--gx', `${((x + 0.5) * 100).toFixed(1)}%`);
    el.style.setProperty('--gy', `${((y + 0.5) * 100).toFixed(1)}%`);
  };
  const onLeave = () => {
    const el = artRef.current;
    if (!el) return;
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
  };

  return (
    <article className={`cc-tile cc-tile--${card.id} ${open ? 'is-open' : ''} ${className}`} style={style} onMouseMove={onMove} onMouseLeave={onLeave}>
      <div className="cc-tile__preview">
        <div className="cc-tile__art" ref={artRef}>
          <img src={card.image} alt={`Tarjeta ${card.name}`} width="320" height="512" />
          <span className="cc-tile__shine" aria-hidden="true" />
        </div>
      </div>

      <div className="cc-tile__body">
        <img className="cc-tile__network" src="assets/mastercard.png" alt="Mastercard" width="66" height="44" />

        <div className="cc-tile__heading">
          <h3 className="cc-tile__title">Tarjeta {card.name}</h3>
          <p className="cc-tile__income">Ingreso mínimo {card.income}</p>
        </div>

        <ul className="cc-tile__list">
          {card.benefits.map((b) => (
            <ListCard key={b} icon="assets/icon-star.png">
              {b.split('\n').map((line) => <span key={line} className="cc-tile__line">{line}</span>)}
            </ListCard>
          ))}

          {/* Beneficios adicionales: se despliegan con "Conocer más" dentro del mismo listado */}
          {card.more && (
            <li className="cc-tile__extra" id={panelId} aria-hidden={!open}>
              <ul className="cc-tile__extra-list">
                {card.extra?.map((b, i) => (
                  <ListCard key={b} icon="assets/icon-star.png" style={{ '--i': i }}>
                    {b}
                  </ListCard>
                ))}
              </ul>
            </li>
          )}

          <li className="list-card list-card--note">* Ver términos y condiciones</li>
        </ul>

        {card.more && (
          <>
            <button
              type="button"
              className="cc-tile__more"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? 'Ver menos' : 'Conocer más'}
              <img src="assets/icon-caret-down.png" alt="" width="24" height="24" />
            </button>
          </>
        )}
      </div>
    </article>
  );
}
