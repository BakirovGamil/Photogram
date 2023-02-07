import { useEffect, useState } from 'react';
import PhotoList from '@c/photoList/PhotoList';

const Main = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetchPhotos();
  }, []);
  
  const fetchPhotos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=30');
    const fetchedPhotos = await response.json();

    setPhotos(fetchedPhotos);
  };

  return (
    <main>
      <div className="container">
        <PhotoList title="Рекомендации" photos={photos}/>
      </div>
    </main>
  );
};

export default Main;
