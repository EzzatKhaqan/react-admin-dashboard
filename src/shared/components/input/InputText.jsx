import { useEffect, useState } from 'react';

export const InputText = ({
  id,
  placeholder = ' ',
  className,
  disabled = false,
  invalid = false,
  value,
  rules = [],
  required = false,
}) => {
  const [modelValue, setModelValue] = useState();

  const [error, setError] = useState();

  function validate(value) {
    if (rules) {
      for (let rule of rules) {
        const validation = rule(value);
        if (validation !== true) {
          setError(validation);
          return;
        } else {
          setError(null);
        }
      }
    }
  }

  useEffect(() => {
    if (value && modelValue != undefined) {
      value(modelValue);
      validate(modelValue);
    }
  }, [modelValue]);

  return (
    <>
      <input
        id={id}
        type="text"
        className={[
          className,
          'e-input-text',
          disabled && 'e-input-text-disabeld',
          (invalid || error) && 'invalid-input',
        ]
          .filter(Boolean)
          .join(' ')}
        placeholder={placeholder}
        onChange={(e) => setModelValue(e.target.value)}
        disabled={disabled}
        required={required}
      />
    </>
  );
};
