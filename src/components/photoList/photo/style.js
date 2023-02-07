import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  min-height: 150px;
  min-width: 150px;

  &:hover {
    background-color: #333336;
  }
`;

export const ImgContainer = styled.div`
  position: relative;
  padding-bottom: 100%;
`;

export const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
