import styled, { css } from 'styled-components';
import threeLinesIcon from '@/assets/icons/three-vertical-lines-svgrepo-com.svg';
import crossIcon from '@/assets/icons/cross-small-svgrepo-com.svg';

export const Container = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.sideMenu}) {
    display: block;
  }
`;

const visibleStyles = css`
  visibility: visible;
  transform: translate(0, 0);
`;

export const Wrapper = styled.div`
  transition: transform 0.2s;
  transform: translate(100%, 0);
  visibility: hidden;
  ${({ isVisible }) => isVisible && visibleStyles}
  background-color: ${({ theme }) => theme.colors.sideMenu};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
`;

export const Button = styled.button`
  font-size: 1rem;
  color: inherit;
  font-family: inherit;
  background-color: transparent;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
`;

export const Title = styled.span`
  vertical-align: middle;
  margin: 0 5px 0 0;
`;

export const ThreeLineIcon = styled.div`
  display: inline-block;
  width: 25px;
  height: 25px;
  background: url(${threeLinesIcon}) center/contain no-repeat;
  vertical-align: middle;
`;

export const Header = styled.h2`
  padding: 40px 0;
  text-align: center;
  font-size: 1.2rem;
  position: relative;

  &::before {
    content: '';
    width: 90%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    position: absolute;
    bottom: 0px;
    left: 5%;
  }
`;

export const Content = styled.div`
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  text-align: start;
  gap: 10px;
`;

export const CloseButton = styled.button`
  border: none;
  display: inline-block;
  width: 40px;
  height: 40px;
  background: url(${crossIcon}) center/contain no-repeat;
  position: fixed;
  z-index: 101;
  top: 12px;
  right: 12px;
  opacity: 0.9;
  cursor: pointer;
`;
