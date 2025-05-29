import React from 'react';
import { Link } from 'react-router-dom';

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
  role = 'button',
  children,
  to,
}) => {
  const Wrapper = role.toLowerCase() == 'link' ? Link : React.Fragment;
  const wrapperProps = role.toLowerCase() == 'link' ? { to: to } : {};

  return (
    <Wrapper {...wrapperProps}>
      <button
        type={role}
        onClick={onClick}
        className={[
          'e-app-button',
          type,
          (disabled || loading) && 'disabled',
          rounded && 'rounded',
          outlined && 'outlined',
          !label && 'e-button-icon-only',
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
    </Wrapper>
  );
};
