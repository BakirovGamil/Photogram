import styled from 'styled-components';

const setWidth = ({width}) => ({
  style: {
    width
  }
});
export const Container = styled.div.attrs(setWidth)``;

export const Header = styled.header`
  position: fixed;
  z-index: 100;
  width: 100%;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.secondary};
  height: ${({ theme }) => theme.size.header};
`;

export const FakeHeader = styled.div`
  height: ${({ theme }) => theme.size.header};
`;
