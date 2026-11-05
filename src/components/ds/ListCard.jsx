import './ListCard.css';

/**
 * DS · List Card
 * variant: "benefit" (icono star-circle, card compacta)  ·  "requirement" (flecha, card con padding 20/32)
 */
export default function ListCard({ variant = 'benefit', icon, children, className = '', ...rest }) {
  return (
    <li className={`list-card list-card--${variant} ${className}`} {...rest}>
      {icon && <img className="list-card__icon" src={icon} alt="" width="24" height="24" />}
      <div className="list-card__text">{children}</div>
    </li>
  );
}
