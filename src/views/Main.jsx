import { useEffect, useState } from 'react';

import Loader from '@/UI/Loader/Loader';
import PhotoList from '@c/photoList/PhotoList';
import useFetching from '../hooks/useFetching';

const Main = () => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, fetchPhotos, error] = useFetching(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=30');
    const fetchedPhotos = await response.json();
    setPhotos(fetchedPhotos);
  });

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <main>
      <div className="container">
        {
          isLoading && !error
          ? <Loader />
          : <PhotoList title="Рекомендации" photos={photos}/>
        }
      </div>
    </main>
  );
};

export default Main;
