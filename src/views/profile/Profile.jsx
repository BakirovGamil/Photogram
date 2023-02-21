import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import UserService from '@/api/UserService';
import PhotoService from '@/api/PhotoService';
import useFetching from '@/hooks/useFetching';
import Loader from '@/UI/Loader/Loader';
import User from '@c/user/User';
import PhotoList from '@c/photoList/PhotoList';
import ImageUploaderModal from '@c/imageUploaderModal/ImageUploaderModal';

import * as S from './style.js';

const Profile = ({ userId }) => {
  const [user, setUser] = useState({});
  const [photos, setPhotos] = useState([]);
  const [isLoadingUser, fetchUser, errorUser] = useFetching(async () => {
    const response = await UserService.getBy('id', userId); //Возвращает массив с пользователем
    const recievedUser = await response.json();
    
    if(recievedUser.length) {
      setUser(recievedUser[0]);
    }
  });
  const [isLoadingPhotos, fetchPhotos, errorPhotos] = useFetching(async () => {
    const response = await PhotoService.getBy('userId', userId);
    const recievedPhotos = await response.json();
    setPhotos(recievedPhotos.reverse());
  });

  useEffect(() => {
    fetchUser();
    fetchPhotos();
  }, []);

  const isLoading = isLoadingUser || isLoadingPhotos;
  const isError = Boolean(errorUser || errorPhotos);

  const [isVisibleImgUploaderModal, setIsVisibleImgUploaderModal] = useState(false);
  const openImageUploader = () => setIsVisibleImgUploaderModal(true);

  return (
    <main>
      <Helmet>
        <title>Профиль</title>
      </Helmet>
      {isLoading 
        ?  <Loader />
        : (
        <div className="container">
          {!isError && (
            <>
              <User user={user} />
              <S.Actions>
                <S.StyledButton onClick={openImageUploader}>
                  Загрузить фотографию
                </S.StyledButton>
                <ImageUploaderModal isVisible={isVisibleImgUploaderModal} setIsVisible={setIsVisibleImgUploaderModal}></ImageUploaderModal>
              </S.Actions>
              <PhotoList title="Фотографии" photos={photos} />
            </>
          )}

          {isError && (
            <S.ErrorWarning>Произошла ошибка при загрузке профиля или фотографий</S.ErrorWarning>
          )}
        </div>
      )}
    </main>
  );
};

export default Profile;
