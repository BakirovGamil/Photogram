import { useState } from 'react';
import useFetching from '@/hooks/useFetching';
import Modal from '@/UI/Modal/Modal';
import Button from '@/UI/Button/Button';
import ImageInput from '@/UI/ImageInput/ImageInput';

import * as S from './style';

const ImageUploaderModal = ({ isVisible, setIsVisible }) => {
  const [imgPath, setImgPath] = useState('');
  const [description, setDecription] = useState('');
  const descriptionInput = (e) => {
    if (e.target.value.slice() === '') return;

    setDecription(e.target.value);
  };
  const [, upload, errorUpload] = useFetching(async (e) => {
    e.preventDefault();
  });

  return (
    <Modal isVisible={isVisible} setIsVisible={setIsVisible}>
      <S.Container>
        <S.Title>Загрузка фотографии</S.Title>
        <S.Form onSubmit={upload}>
          <ImageInput value={imgPath} setValue={setImgPath} />
          <S.Label>Описание:</S.Label>
          <S.TextArea
            placeholder="Напишите описание"
            value={description}
            onChange={descriptionInput}
          />
          <Button>Загрузить фотографию</Button>
        </S.Form>
      </S.Container>
    </Modal>
  );
};

export default ImageUploaderModal;
