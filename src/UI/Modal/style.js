import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 99999;
  background: rgba(0, 0, 0, 0.5);
  visibility: hidden;
  ${({isVisible}) => isVisible && `
  visibility: visible;
  `} 
`;

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgb(51, 51, 54);
`;
