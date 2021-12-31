import { InputHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Component } from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder?: string;
}

function Input({
  name,
  placeholder = 'Enter text here',
  ...rest
}: IInputProps): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Component>
      <input
        ref={inputRef}
        defaultValue={defaultValue}
        type="text"
        placeholder={placeholder}
        {...rest}
      />
    </Component>
  );
}

export { Input };
