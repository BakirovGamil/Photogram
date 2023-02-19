import styled from 'styled-components';
import crossIcon from '@/assets/icons/cross-small-svgrepo-com.svg';

export const Overlay = styled.div`
  text-align: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
  overflow-y: auto;

  visibility: hidden;
  ${({ isVisible }) =>
    isVisible &&
    `
  visibility: visible;
  `}

  &::after {
    content: '';
    display: inline-block;
    vertical-align: middle;
    height: 100%;
  }
`;

export const CloseButton = styled.button`
  border: none;
  display: inline-block;
  width: 40px;
  height: 40px;
  background: url(${crossIcon}) center/contain no-repeat;
  position: fixed;
  top: 12px;
  right: 12px;
  opacity: 0.9;
  cursor: pointer;
`;

export const Container = styled.div`
  position: relative;
  text-align: start;
  display: inline-block;
  vertical-align: middle;
  cursor: auto;
  margin: 30px 10px;
`;

export const Content = styled.div`
  background-color: rgb(51, 51, 54);
`;
