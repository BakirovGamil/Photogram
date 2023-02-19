import React, { useState, useId } from 'react';

import * as S from './style';

const filesExt = ['png', 'jpg', 'jpeg'];

const ImageInput = ({ value, setValue }) => {
  const [uploaded, setUploaded] = useState(false);
  const id = useId();

  function uploadFile(e) {
    const newPath = e.target.value;
    setValue(newPath);

    if (filesExt.some((ext) => newPath.endsWith(ext))) {
      setUploaded(true);
    } else {
      setUploaded(false);
      setValue('');
    }
  }

  return (
    <S.Container>
      <S.FileInput
        onChange={uploadFile}
        value={value}
        accept={filesExt.map((ext) => `.${ext}`).join(',')}
        id={id}
      />
      <S.Label htmlFor={id} uploaded={uploaded}>
        Выбрать фотографию
      </S.Label>
    </S.Container>
  );
};

export default ImageInput;
