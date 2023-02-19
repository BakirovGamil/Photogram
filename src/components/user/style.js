import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin-top: 15px;
  padding: 10px 10px 20px;
  display: flex;
  justify-content: flex-start;
  gap: 15px;

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
`;

export const ImgContainer = styled.div`
  flex-shrink: 0;
  position: relative;
  width: 200px;
  height: 200px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 140px;
    height: 140px;
  }
`;

export const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Name = styled.p`
  font-weight: bold;
  white-space: nowrap;
`;

export const DescriptionContainer = styled.div``;
export const Description = styled.p``;

export const Label = styled.p`
  margin-bottom: 10px;
`;
