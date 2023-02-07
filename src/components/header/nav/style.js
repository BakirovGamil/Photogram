import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  height: ${({ theme }) => theme.size.header};
`;

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 15px;
  height: 100%;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ItemPlaceholder = styled.li`
  flex: 1 1 auto;
`;

export const StyledLink = styled(Link)`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;

  &:visited {
    color: white;
  }
`;

export const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: white;
  font-size: 1rem;
  font-family: inherit;
  height: 100%;
`;
