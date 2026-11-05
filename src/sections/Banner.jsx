import Button from '../components/ds/Button.jsx';
import { useReveal } from '../hooks/useReveal.js';
import './Banner.css';

/** DS · Banner */
export default function Banner() {
  const ref = useReveal();
  return (
    <section className="banner-section" id="pidela" ref={ref}>
      <div className="banner container reveal" data-variant="scale">
        <div className="banner__content">
          <h2 className="banner__title">Tu tarjeta de crédito Jüsto comienza aquí</h2>
          <p className="banner__text">Hazlo desde tu celular, en pocos pasos y de forma digital.</p>
          <Button type="secondary" size="medium" href="#top">Pídela en la Super App</Button>
        </div>
        <div className="banner__media">
          <img src="assets/banner-card.jpg" alt="Tarjeta Jüsto flotando entre esferas verdes" />
        </div>
      </div>
    </section>
  );
}
