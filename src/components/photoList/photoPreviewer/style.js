import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 80vw;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100vw;
  }
`;

export const Author = styled(Link)`
  display: inline-block;
  padding: 10px 20px 10px 0;
  margin-top: -5px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &:visited {
    color: white;
  }
`;

export const Description = styled.p`
  padding: 5px 0;
`;

export const NavButtons = styled.div`
  position: absolute;
`;

export const Button = styled.button`
  border: none;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 40%;
  background-color: transparent;

  &::before {
    display: block;
    position: absolute;
    top: 50%;
    transform: translate(-50%, 0);
    color: white;
    opacity: 0.2;
    text-shadow: 1px 1px 1px black;
  }

  &:hover::before {
    opacity: 1;
  }
`;

export const NextButton = styled(Button)`
  right: 0;

  &::before {
    content: '>';
    right: 20%;
  }
`;

export const PrevButton = styled(Button)`
  left: 0;

  &::before {
    content: '<';
    left: 20%;
  }
`;

export const ImgContainer = styled.div`
  position: relative;
  max-width: 80vw;
  max-height: 80vh;
  min-width: 600px;
  min-height: 600px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 100vw;
    max-height: 100vh;
    min-width: auto;
    min-height: auto;
  }
`;

export const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
