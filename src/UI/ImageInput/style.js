import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: inline-block;
  position: relative;
`;

export const FileInput = styled.input.attrs({ type: 'file' })`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

export const Label = styled.label`
  cursor: pointer;
  display: inline-block;
  width: 100%;
  font-size: 1rem;
  color: white;
  background-color: transparent;
  padding: 6px;
  border-radius: 3px;
  border: 1px dashed white;
  text-align: center;

  &:hover {
    background-color: ${({theme}) => theme.colors.secondary};
  }

  ${({uploaded}) => uploaded && css`
    background-color: rgb(125,201,150)!important;
  `}
`;
