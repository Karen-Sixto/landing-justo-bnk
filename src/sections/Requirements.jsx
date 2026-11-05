import ListCard from '../components/ds/ListCard.jsx';
import { useReveal } from '../hooks/useReveal.js';
import './Requirements.css';

const ITEMS = [
  'Ingreso minímo de $5,000.',
  'Edad entre 25 y 65 años.',
  'INE actualizada y vigente.',
  'Contar con un buen historial crediticio.',
];

/** DS · Split List Section */
export default function Requirements() {
  const ref = useReveal();
  return (
    <section className="req-section" id="requisitos" ref={ref}>
      <div className="req container">
        <h2 className="req__title reveal">Requisitos para pedir tu tarjeta de crédito.</h2>
        <ul className="req__list">
          {ITEMS.map((t, i) => (
            <ListCard
              key={t}
              variant="requirement"
              icon="assets/icon-arrow-right.png"
              className="reveal"
              style={{ '--delay': `${150 + i * 110}ms` }}
              data-variant="right"
            >
              {t}
            </ListCard>
          ))}
        </ul>
      </div>
    </section>
  );
}
