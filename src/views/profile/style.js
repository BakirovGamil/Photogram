import styled from 'styled-components';
import Button from '@/UI/Button/Button';

export const ErrorWarning = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fae7ec;
  color: black;
  padding: 10px;
`;

export const Actions = styled.div`
  position: relative;
  padding: 15px 10px;

  &::after {
    content: '';
    display: block;
    width: calc(100% - 20px);
    height: 2px;
    background-color: ${({ theme }) => theme.colors.secondary};
    position: absolute;
    bottom: 0;
    left: 10px;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
    padding: 10px 10px;
  }
`;

export const StyledButton = styled(Button)`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`;
