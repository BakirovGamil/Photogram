import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

import Loader from '@/UI/Loader/Loader';
import PhotoList from '@c/photoList/PhotoList';
import useFetching from '@/hooks/useFetching';

import * as S from './style';

const Main = () => {
  const [photos, setPhotos] = useState([]);
  const [isLoadingPhotos, fetchPhotos, errorPhotos] = useFetching(async () => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/photos?_limit=30'
    );
    const fetchedPhotos = await response.json();
    setPhotos(fetchedPhotos);
  });

  useEffect(() => {
    fetchPhotos();
  }, []);

  const isError = Boolean(errorPhotos);
  const renderedPhotoList = isError ? (
    <S.ErrorWarning>Произошла ошбика при загрузке рекомендаций</S.ErrorWarning>
  ) : (
    <PhotoList title="Рекомендации" photos={photos} />
  );

  return (
    <main>
      <Helmet>
        <title>Лента</title>
      </Helmet>
      <div className="container">
        {isLoadingPhotos ? <Loader /> : <>{renderedPhotoList}</>}
      </div>
    </main>
  );
};

export default Main;
