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
