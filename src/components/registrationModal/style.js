import styled from 'styled-components';

export const Title = styled.p`
  font-size: 1.2rem;
  text-align: center;
  position: relative;
  padding-bottom: 8px;
  margin: 0 0 10px 0;
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 10px 15px;
  border-radius: 4px;
  overflow: hidden;
  width: 300px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Button = styled.button`
  border: none;
  font-size: 1rem;
  text-align: center;
  width: 100%;
  padding: 10px 0;
  background-color: #1b1a20;
  transition: background-color 0.2s ease 0s;
  cursor: pointer;
  color: #fff;

  &:hover {
    background: rgb(234, 191, 0);
  }
`;

export const TextArea = styled.textarea`
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
  resize: vertical;
  min-height: 45px;

  &:focus {
    border: 3px solid #555;
  }
`;

export const Label = styled.label`
  margin: 0 0 -10px 0;
`;
