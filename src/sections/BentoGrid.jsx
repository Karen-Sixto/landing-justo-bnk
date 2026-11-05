import { useReveal } from '../hooks/useReveal.js';
import './BentoGrid.css';

function BentoCard({ tone, title, text, className = '', delay = 0 }) {
  return (
    <article
      className={`bento-card bento-card--${tone} ${className} reveal`}
      data-variant="scale"
      style={{ '--delay': `${delay}ms` }}
    >
      <h3 className="bento-card__title">{title}</h3>
      {text && <p className="bento-card__text">{text}</p>}
    </article>
  );
}

/** DS · Bento Grid (v2) */
export default function BentoGrid() {
  const ref = useReveal();
  return (
    <section className="bento-section" id="super-app" ref={ref}>
      <h2 className="bento-section__title container reveal">Tu vida digital en una sola SuperApp</h2>

      <div className="bento container">
        <div className="bento__main">
          <div className="bento__col">
            <article
              className="bento-card bento-card--brand bento-card--tall reveal"
              data-variant="scale"
              style={{ '--delay': '0ms' }}
            >
              <img className="bento-card__logo" src="assets/logo-green.png" alt="Jüsto" width="144" height="40" />
              <p className="bento-card__statement">Todo lo que necesitas para tu día a día en la Super App</p>
            </article>
            <BentoCard
              tone="forest"
              className="bento-card--fill"
              title="Asistente de Compras"
              text="Cuéntanos qué quieres cocinar y te ayudamos a preparar tu carrito de súper."
              delay={160}
            />
            <BentoCard
              tone="lime"
              className="bento-card--fill"
              title="Entregas a domicilio"
              text="Llevamos el desayuno, el vino de última hora, los medicamentos y mucho más hasta tu casa."
              delay={320}
            />
          </div>

          <div className="bento__col">
            <BentoCard
              tone="green"
              className="bento-card--fill"
              title="Vincula con tu cuenta Bankaool y suma más beneficios"
              delay={80}
            />
            <BentoCard
              tone="orange"
              className="bento-card--tall bento-card--orange-tall"
              title="Cofres e inversiones**"
              text="Ahorra, organiza y pon tu dinero a trabajar para cumplir tus metas financieras de forma fácil y con rendimientos."
              delay={240}
            />
            <BentoCard
              tone="bone"
              className="bento-card--fill"
              title="Pago de servicios"
              text="Sin colas, paga todos tus servicios desde tu teléfono."
              delay={400}
            />
          </div>
        </div>

        <article className="bento-photo reveal" data-variant="scale" style={{ '--delay': '200ms' }}>
          <img
            className="bento-photo__img"
            src="assets/super-app-photo.jpg"
            alt="Mujer sonriendo con la tarjeta Jüsto en un mercado"
          />
          <div className="bento-photo__content">
            <h3 className="bento-photo__title">Todo esto y más en la Super App</h3>
            <p className="bento-photo__text">Descárgala y accede de forma fácil<br />y rápida.</p>
            <div className="bento-photo__qr">
              <img src="assets/qr.png" alt="Código QR para descargar la Super App Jüsto" width="76" height="76" />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
