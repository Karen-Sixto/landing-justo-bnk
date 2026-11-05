import { useId, useState } from 'react';
import './Accordion.css';

/** DS · Accordion (State = Open / Closed) */
export default function Accordion({ title, children, defaultOpen = false, style, className = '' }) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();

  return (
    // Toda la card es clickeable (el clic del botón también llega aquí por bubbling)
    <div className={`accordion ${open ? 'is-open' : ''} ${className}`} style={style} onClick={() => setOpen((v) => !v)}>
      <h3>
        <button
          type="button"
          className="accordion__trigger"
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          id={`${id}-trigger`}
        >
          <span className="accordion__title">{title}</span>
          <img className="accordion__chevron" src="assets/icon-chevron.png" alt="" width="32" height="32" />
        </button>
      </h3>
      <div
        className="accordion__panel"
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-trigger`}
      >
        <div className="accordion__inner">
          <p className="accordion__content">{children}</p>
        </div>
      </div>
    </div>
  );
}
