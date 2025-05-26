export const AppButton = ({
  label,
  disabled = false,
  type = 'primary',
  outlined = false,
  rounded = false,
}) => {
  return (
    <>
      <button
        type="button"
        className={[
          'e-button',
          type,
          disabled ? 'disabled' : '',
          rounded ? 'rounded' : '',
          outlined ? 'outlined' : '',
        ].join(' ')}
        disabled={disabled}
      >
        {label}
      </button>
    </>
  );
};
