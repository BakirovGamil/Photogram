import Modal from '@/UI/Modal/Modal';
import { useCallback, useEffect, useRef } from 'react';

import * as S from './style';

const PhotoPreviewer = ({ photo, isVisible, setIsVisible, onPrev, onNext }) => {
  const imgContainerRef = useRef();
  const navButtonsRef = useRef();
  const modalRef = useRef();
  const resizeNavButtons = useCallback(() => {
    const imgContainer = imgContainerRef.current;
    const navButtons = navButtonsRef.current;
    const modal = modalRef.current;

    const rectImgContainer = imgContainer.getBoundingClientRect();
    const rectModal = modal.getBoundingClientRect();

    navButtons.style.top = rectImgContainer.top - rectModal.top + 'px';
    navButtons.style.left = rectImgContainer.left - rectModal.left + 'px';
    navButtons.style.bottom = rectModal.bottom - rectImgContainer.bottom + 'px';
    navButtons.style.right = rectModal.right - rectImgContainer.right + 'px';
  }, []);

  useEffect(() => {
    resizeNavButtons();
    window.addEventListener('resize', resizeNavButtons);

    return () => window.removeEventListener('resize', resizeNavButtons);
  }, [resizeNavButtons, photo]);

  const handleKeyUp = useCallback(
    (e) => {
      if (e.key === 'ArrowRight') {
        onNext();
      }

      if (e.key === 'ArrowLeft') {
        onPrev();
      }
    },
    [onNext, onPrev]
  );
  useEffect(() => {
    document.addEventListener('keyup', handleKeyUp);

    return () => document.removeEventListener('keyup', handleKeyUp);
  }, [handleKeyUp]);

  const author = 'Bakirov Gamil';

  return (
    <Modal isVisible={isVisible} setIsVisible={setIsVisible} ref={modalRef}>
      <S.Container>
        <S.Author>{author}</S.Author>
        <S.ImgContainer ref={imgContainerRef}>
          <S.Img src={photo.url} />
        </S.ImgContainer>
        <S.NavButtons ref={navButtonsRef}>
          <S.PrevButton onClick={onPrev} />
          <S.NextButton onClick={onNext} />
        </S.NavButtons>
        <S.Description>{photo.title}</S.Description>
      </S.Container>
    </Modal>
  );
};

export default PhotoPreviewer;
