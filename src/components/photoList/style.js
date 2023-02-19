import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Title = styled.div`
  font-size: 1.3rem;
  text-align: center;
  padding: 15px 0;
`;

export const Photos = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto;
  min-height: 250px;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const EmptyWarning = styled.p`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
`;
