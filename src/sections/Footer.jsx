import { useReveal } from '../hooks/useReveal.js';
import './Footer.css';

const COLUMNS = [
  {
    title: 'Legales',
    links: [
      'Consulta los Costos y Comisiones de Nuestros Productos.',
      'Aviso de Privacidad.',
      'Aviso de Privacidad Simplificado.',
      'Términos y Condiciones.',
    ],
  },
  {
    title: 'Ayuda',
    links: [
      { label: 'Buró de entidades financieras', icon: 'buro-v2', w: 24.3, h: 24 },
      'Cobranza',
      'Robo o Extravío',
      'Preguntas Frecuentes',
      'Aclaraciones y Reclamaciones',
      'UNE',
      { label: 'CONDUSEF', icon: 'condusef-v2', w: 40, h: 24 },
    ],
  },
  { title: 'Sobre nosotros', links: ['¿Quiénes somos?', 'Datos Corporativos/Gobierno'] },
];

const CARDS_LEGAL = [
  { name: 'Clásica', cat: '120.6%', rate: '81.77% (variable TIIE+75 puntos)', fee: '$0.00' },
  { name: 'Platinum', cat: '52.9%', rate: '41.77% (variable TIIE+35 puntos)', fee: '$2,000.00' },
  { name: 'Black', cat: '42.1%', rate: '31.77% (variable TIIE+25 puntos)', fee: '$5,000.00' },
];

/** DS · Footer (v2) */
export default function Footer() {
  const ref = useReveal();
  return (
    <footer className="footer" ref={ref}>
      <div className="footer__inner container">
        <div className="footer__legal reveal" id="legales">
          {CARDS_LEGAL.map((c) => (
            <div className="footer__legal-block" key={c.name}>
              <p><strong>Tarjeta de Crédito {c.name}</strong></p>
              <p>
                <strong>CAT PROMEDIO {c.cat} Sin IVA.</strong> Tasa de interés promedio ponderada por saldo anual{' '}
                <strong>{c.rate} Sin IVA. Comisión anual {c.fee} Sin IVA.</strong>
              </p>
              <p>
                Para fines informativos y de comparación. Fecha de cálculo: <strong>21/10/2026.</strong> Vigencia:{' '}
                <strong>20/04/2027.</strong>
              </p>
            </div>
          ))}
          <div className="footer__legal-block">
            <p>Reposición de plástico de: $100.00 más IVA, por evento para cualquiera de las tarjetas de crédito.</p>
            <p>Pago tardío: $500.00 más IVA, por evento para cualquiera de las tarjetas de crédito.</p>
            <p>
              Contratación en moneda nacional (MXN), uso nacional e internacional, MasterCard® . Sujeto a aprobación de
              crédito. Para personas de 25 años o más. Consulta requisitos en Términos y Condiciones.
            </p>
            <p>*El asistente de compras y las entregas a domicilio son operados por Justo.mx.</p>
            <p>** Cofres, inversiones y pago de servicios es operado por Bankaool, S.A., Institución de Banca Múltiple.</p>
          </div>
        </div>

        <div className="footer__links">
          {COLUMNS.map((col, ci) => (
            <nav className="footer__col reveal" key={col.title} aria-label={col.title} style={{ '--delay': `${ci * 80}ms` }}>
              <h3 className="footer__heading">{col.title}</h3>
              <ul>
                {col.links.map((l) => {
                  const item = typeof l === 'string' ? { label: l } : l;
                  return (
                    <li key={item.label}>
                      <a href="#top" className="footer__link" onClick={(e) => e.preventDefault()}>
                        {item.icon && (
                          <img
                            className="footer__link-icon"
                            src={`assets/${item.icon}.png`}
                            alt=""
                            style={{ width: item.w, height: item.h }}
                          />
                        )}
                        <span className="footer__link-label">{item.label}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          ))}

          <div className="footer__col footer__col--contact reveal" style={{ '--delay': '240ms' }}>
            <h3 className="footer__heading">Contáctanos</h3>
            <a className="whatsapp-card" href="https://wa.me/525639526422" target="_blank" rel="noreferrer">
              <img src="assets/icon-whatsapp.png" alt="" width="24" height="24" />
              <span className="whatsapp-card__text">
                <strong>¿Aún tienes dudas?</strong>
                <span>Da clic aquí para contactarnos</span>
              </span>
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>SIGNOMI, S.A. de C.V., SOFOM, E.N.R. Página web: www.signomi.mx. Teléfonos de Contacto:</p>
          <p><strong>Call Center: 55 6943 7040 Llamadas internacionales: 855 284 1476 WhatsApp: +52 56 3952 6422</strong></p>
        </div>
      </div>
    </footer>
  );
}
