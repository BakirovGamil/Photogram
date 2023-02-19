import React, { useCallback, useEffect } from 'react';
import * as S from './style';

const Modal = React.forwardRef(({ isVisible, setIsVisible, children }, ref) => {
  const handleKeyUp = useCallback((e) => {
    if (e.code === 'Escape' && isVisible) {
      console.log(1);
      setIsVisible(false);
    }
  }, [isVisible, setIsVisible])

  useEffect(() => {
    document.addEventListener('keyup', handleKeyUp);

    return () => document.removeEventListener('keyup', handleKeyUp);
  }, [handleKeyUp]);

  const disableScroll = () => {
    const body  = document.body;
    body.style.position = 'fixed';
    body.style.width = '100%';
    
    if(body.scrollHeight > window.innerHeight) {
      body.style.overflowY = 'scroll';
    }
  };

  const enableScroll = () => {
    const body  = document.body;
    body.style.position = 'static';
    body.style.overflowY = '';
  };

  useEffect(() => {
    if(isVisible) {
      disableScroll();
    } else {
      enableScroll();
    }
  }, [isVisible]);

  const hideModal = (e) => {
    const leftMouse = 0;

    if(e.button === leftMouse) {
      setIsVisible(false);
    }
  }

  return (
    <S.Overlay onMouseDown={hideModal} isVisible={isVisible}>
      <S.CloseButton title="Закрыть" />
      <S.Container ref={ref} onMouseDown={(e) => e.stopPropagation()}>
        <S.Content>{children}</S.Content>
      </S.Container>
    </S.Overlay>
  );
});

export default Modal;
