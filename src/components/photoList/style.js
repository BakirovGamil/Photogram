import styled from 'styled-components';

export const Title = styled.div`
  font-size: 1.3rem;
  text-align: center;
  padding: 15px 0;
`;

export const Photos = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop }) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet }) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile }) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
