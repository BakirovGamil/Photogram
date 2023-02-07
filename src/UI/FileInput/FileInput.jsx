import React, { createRef, useEffect, useState } from 'react';
import { useId } from 'react';
import './inp.css';

const fileAccept = {
  backgroundColor: 'rgb(125,201,150)',
};

var filesExt = ['png', 'jpg', 'jpeg'];

function InputFile({ cb, className }) {
  const [uploaded, setUploaded] = useState(false);
  const refInput = createRef();
  const id = useId();
  const classes = `inputfile__label ${className}`;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const e = refInput.current;

    if (e.files) {
      const countFile = e.files.length;
      const fileName = countFile ? e.files[0].name : '';
      const splitedName = fileName.split('.');
      const ext = countFile ? splitedName[splitedName.length - 1] : '';
      if (countFile > 0 && filesExt.includes(ext)) {
        setUploaded(true);
      } else {
        setUploaded(false);
      }
    }
  });

  function handleUpload(e) {
    const countFile = e.target.files.length;
    const fileName = countFile ? e.target.files[0].name : '';
    const splitedName = fileName.split('.');
    const ext = countFile ? splitedName[splitedName.length - 1] : '';

    if (countFile > 0 && filesExt.includes(ext)) {
      setUploaded(true);
      cb();
    } else {
      setUploaded(false);
    }
  }

  const style = {
    ...(uploaded ? fileAccept : {}),
  };

  return (
    <div className="inputfile-container">
      <input
        ref={refInput}
        onChange={handleUpload}
        type="file"
        name="photo"
        id={id}
        className="inputfile"
        accept=".jpg, .jpeg, .png"
      />
      <label htmlFor={id} style={style} className={classes}>
        Загрузить фотку
      </label>
    </div>
  );
}

export default InputFile;
