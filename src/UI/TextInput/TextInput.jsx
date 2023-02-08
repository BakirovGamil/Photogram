import { useId } from 'react';

import styled from 'styled-components';

const StyledInput = styled.input`
  appearance: none;
  background-image: none;
  box-shadow: none;
  font-size: 1rem;
  display: inline-block;
  width: 100%;
  padding: 8px 10px;
  border: 3px solid #ccc;
  transition: border 0.3s;
  outline: none;
  background-color: white;
  border-radius: 0;

  &:focus {
    border: 3px solid #555;
  }
`;

function TextInput({ placeholder = '', required = false, type = 'text' }) {
  const id = useId();

  return (
    <StyledInput
      type={type}
      autoComplete="off"
      placeholder={placeholder}
      id={id}
      required={required}
    />
  );
}

export default TextInput;
