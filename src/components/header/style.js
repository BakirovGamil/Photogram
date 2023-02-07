import styled from 'styled-components';

export const container = styled.div`
  position: relative;
`

export const header = styled.div`
  position: fixed;
  z-index: 100;
  width: 100%;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.secondary};
  height: ${({ theme }) => theme.size.header};
`;

export const fakeHeader = styled.div`
  height: ${({ theme }) => theme.size.header};
`;
