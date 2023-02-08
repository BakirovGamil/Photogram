import * as S from './style';

const Photo = ({ photo, onClick }) => {
  return (
    <S.Container onClick={onClick}>
      <S.ImgContainer>
        <S.Img src={photo.url} />
      </S.ImgContainer>
    </S.Container>
  );
};

export default Photo;
