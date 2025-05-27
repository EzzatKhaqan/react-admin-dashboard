import { i, span } from 'motion/react-client';

export const AppButton = ({
  label,
  disabled = false,
  type = 'primary',
  outlined = false,
  rounded = false,
  icon,
  raised,
  direction = 'ltr',
  loading = false,
  onClick,
}) => {
  return (
    <>
      <button
        type="button"
        onClick={onClick}
        className={[
          'e-app-button',
          type,
          (disabled || loading) && 'disabled',
          rounded && 'rounded',
          outlined && 'outlined',
          !label && 'e-button-icon-only',
          raised && 'e-app-button-raised',
        ]
          .filter(Boolean)
          .join(' ')}
        disabled={disabled}
      >
        <div dir={direction}>
          {label && <span className="e-app-button-text">{label}</span>}
          {loading ? (
            <i className="pi pi-spin pi-spinner"></i>
          ) : (
            icon && <i className={[icon, 'e-app-button-icon'].filter(Boolean).join(' ')}></i>
          )}
        </div>
      </button>
    </>
  );
};
