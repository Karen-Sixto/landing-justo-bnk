import { useReveal } from '../hooks/useReveal.js';
import './Stepper.css';

const STEPS = [
  { n: 1, title: 'Completa tus datos', text: 'Te guiamos para registrar tus datos y tomarle foto a tu INE vigente.' },
  { n: 2, title: 'Conoce tu tarjeta', text: 'Revisa sus detalles y firma tu contrato en la Super App.' },
  { n: 3, title: 'Estrénala y disfrútala', text: 'Activa tu tarjeta de crédito digital de inmediato y recibe la tarjeta física en 7 días hábiles.' },
];

/** DS · Stepper (Type = Grid) con Cards */
export default function Stepper() {
  const ref = useReveal();
  return (
    <section className="stepper" id="pasos" ref={ref}>
      <div className="stepper__inner container">
        <h2 className="stepper__title reveal">Pide tu tarjeta de crédito en 3 pasos:</h2>
        <ol className="stepper__cards">
          {STEPS.map((s, i) => (
            <li
              key={s.n}
              className="step-card reveal"
              data-variant="scale"
              style={{ '--delay': `${100 + i * 120}ms` }}
            >
              <div className="step-card__head">
                <span className="step-card__n">{s.n}</span>
                <h3 className="step-card__title">{s.title}</h3>
              </div>
              <p className="step-card__text">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
