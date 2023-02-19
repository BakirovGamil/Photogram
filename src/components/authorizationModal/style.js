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
