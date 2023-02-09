import React, { useState, useId } from 'react';

import * as S from './style';

const filesExt = ['png', 'jpg', 'jpeg'];

function ImageInput({ cb }) {
  const [uploaded, setUploaded] = useState(false);
  const [filePath, setFilePath] = useState('');
  const id = useId();

  function uploadFile(e) {
    const newPath = e.target.value;
    setFilePath(newPath);

    if (filesExt.some((ext) => newPath.endsWith(ext))) {
      setUploaded(true);
      if (typeof cb === 'function') {
        cb();
      }
    } else {
      setUploaded(false);
      setFilePath('');
    }
  }

  return (
    <S.Container>
      <S.FileInput
        onChange={uploadFile}
        value={filePath}
        accept={filesExt.map((ext) => `.${ext}`).join(',')}
        id={id}
      />
      <S.Label htmlFor={id} uploaded={uploaded}>
        Загрузить фотку
      </S.Label>
    </S.Container>
  );
}

export default ImageInput;
