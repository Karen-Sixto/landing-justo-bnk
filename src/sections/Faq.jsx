import Accordion from '../components/ds/Accordion.jsx';
import { useReveal } from '../hooks/useReveal.js';
import './Faq.css';

const FAQS = [
  {
    q: '¿Quién respalda mi tarjeta de crédito?',
    a: 'La tarjeta de crédito es emitida por SIGNOMI, S.A. de C.V. SOFOM, E.N.R. Para su constitución y operación no requiere autorización de la Secretaría de Hacienda y Crédito Público, y está sujeta a la supervisión de la Comisión Nacional Bancaria y de Valores, únicamente para efectos de lo dispuesto por el artículo 56 de la Ley General de Organizaciones y Actividades Auxiliares de Crédito.',
  },
  {
    q: '¿Qué es y qué relación tiene la Super App con mi tarjeta?',
    a: 'Una Super App reúne distintos servicios en una sola aplicación. Jüsto integra finanzas, supermercado y más para hacer tu día más sencillo.',
  },
  {
    q: '¿Qué es y cómo funciona el cashback que obtengo con mi tarjeta?',
    a: 'El cashback es una recompensa: Cada compra en comercios participantes te devuelve en puntos un porcentaje del monto que gastaste. Con Jüsto Clásica obtienes 1% —hasta $2,000 al año—; con Platinum, 2% —hasta $4,000—; y con Black, 5% —hasta $20,000—. En Jüsto Súper, tus puntos de cashback valen el triple.',
  },
  {
    q: '¿Cuándo puedo comenzar a usar mi tarjeta de crédito?',
    a: 'Cuando aprueben tu solicitud y completes la contratación, podrás activar y usar tu tarjeta digital desde la Super App.',
  },
  {
    q: '¿Cuánto es el pago mínimo?',
    a: 'El pago mínimo será el monto que resulte mayor conforme a los incisos siguientes: La suma de: i) 1.5 por ciento del saldo insoluto de la parte revolvente de la línea de crédito al corte del periodo, sin tomar en cuenta los intereses del periodo ni el impuesto al valor agregado (I.V.A.), más los referidos intereses incluyendo el I.V.A., y ii) El 1.25 por ciento del límite de la línea de crédito.',
  },
  {
    q: '¿Qué hago si pierdo mi tarjeta o me la roban?',
    a: 'Comunícate al teléfono de Atención al Usuario al 55 6943 7040, para reportarla de inmediato y pedir una nueva.',
  },
  {
    q: '¿Qué hago si tengo cargos no reconocidos?',
    a: 'Comunícate al teléfono de Atención al Usuario al 55 6943 7040 para reclamaciones o aclaraciones de compras que no reconozcas.',
  },
];

export default function Faq() {
  const ref = useReveal();
  return (
    <section className="faq-section" id="faq" ref={ref}>
      <div className="faq container">
        <h2 className="faq__title reveal">Preguntas frecuentes</h2>
        {FAQS.map((f, i) => (
          <div key={f.q} className="reveal" style={{ '--delay': `${i * 60}ms` }}>
            <Accordion title={f.q}>
              {f.a}
            </Accordion>
          </div>
        ))}
      </div>
    </section>
  );
}
