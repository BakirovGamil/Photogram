import { useState } from 'react';
import Photo from '@c/photoList/photo/Photo';
import PhotoPreviewer from '@c/photoList/photoPreviewer/PhotoPreviewer';

import * as S from './style';

const PhotoList = ({ title, photos }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isVisiblePreviewer, setIsVisiblePreviewer] = useState(false);

  const openPhoto = (photo) => {
    setSelectedPhoto(photo);
    setIsVisiblePreviewer(true);
  };

  const selectNextPhoto = () => {
    const currentPhotoIndex = photos.findIndex(p => p.id === selectedPhoto.id);
    // The first photo if there is no next one
    const nextPhotoIndex = photos.length - 1 === currentPhotoIndex ? 0 : currentPhotoIndex + 1;
    setSelectedPhoto(photos[nextPhotoIndex]);
  };

  const selectPrevPhoto = () => {
    const currentPhotoIndex = photos.findIndex(p => p.id === selectedPhoto.id);
    // The last photo if there is no prev one
    const prevPhotoIndex = currentPhotoIndex === 0 ? photos.length - 1 : currentPhotoIndex - 1;
    setSelectedPhoto(photos[prevPhotoIndex]);
  };

  const photoComponents = photos.map((p) => (
    <Photo key={p.id} photo={p} onClick={() => openPhoto(p)} />
  ));

  return (
    <div>
      <S.Title>{title}</S.Title>
      <S.Photos>{photoComponents}</S.Photos>
      {selectedPhoto && (
        <PhotoPreviewer
          photo={selectedPhoto}
          isVisible={isVisiblePreviewer}
          setIsVisible={setIsVisiblePreviewer}
          onPrev={selectPrevPhoto}
          onNext={selectNextPhoto}
        />
      )}
    </div>
  );
};

export default PhotoList;
