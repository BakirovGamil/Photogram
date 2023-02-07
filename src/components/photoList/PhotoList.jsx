import Photo from '@c/photoList/photo/Photo';
import * as S from './style';

const PhotoList = ({ title, photos }) => {
  const photoComponents = photos.map((p) => <Photo key={p.id} photo={p} />);

  return (
    <div>
      <S.Title>{title}</S.Title>
      <S.Photos>{ photoComponents }</S.Photos>
    </div>
  );
};

export default PhotoList;
