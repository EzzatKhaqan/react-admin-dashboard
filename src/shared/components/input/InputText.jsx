import { useEffect, useState } from 'react';

export const InputText = ({
  id,
  placeholder,
  className,
  disabled = false,
  invalid = false,
  value,
  rules = [],
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
      <div className="e-input-text-wrapper">
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
        />
        {error && <span className="e-input-text-error">{error}</span>}
      </div>
    </>
  );
};
