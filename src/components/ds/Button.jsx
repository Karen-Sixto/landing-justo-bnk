import './Button.css';

/**
 * DS · Button
 * Type: primary | secondary | text   ·   Size: default (64) | medium (56)
 * Estados Hover / Disabled replicados del componente "Button" en Figma.
 */
export default function Button({
  as: Tag = 'a',
  type = 'primary',
  size = 'default',
  icon,
  iconPosition = 'end',
  className = '',
  children,
  ...props
}) {
  return (
    <Tag className={`btn btn--${type} btn--${size} ${className}`} {...props}>
      {icon && iconPosition === 'start' && <span className="btn__icon">{icon}</span>}
      <span className="btn__label">{children}</span>
      {icon && iconPosition === 'end' && <span className="btn__icon">{icon}</span>}
    </Tag>
  );
}
