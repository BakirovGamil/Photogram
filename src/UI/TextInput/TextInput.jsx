import { useId } from 'react';
import cls from './TextInput.module.css';

function TextInput({ placeholder = '', className = '', required = false}) {
  const id = useId();

  return (
    <div className={cls.container}>
      <input
        type='text'
        autoComplete="off"
        className={[cls.input, className].join(' ')}
        placeholder={placeholder}
        id={id}
        required={required}
      />
      <label htmlFor={id} className={cls.label}>
        {placeholder}
      </label>
    </div>
  );
}

export default TextInput;
