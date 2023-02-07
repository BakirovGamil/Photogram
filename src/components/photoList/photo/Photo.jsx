import * as S from './style';

const Photo = ({ photo }) => {
  return (
    <S.Container>
      <S.ImgContainer>
        <S.Img src={photo.url} />
      </S.ImgContainer>
    </S.Container>
  );
};

export default Photo;
