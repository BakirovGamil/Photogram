import React, { useCallback, useEffect } from 'react';
import { disableDocumentScroll, enableDocumentScroll } from '@/utils/scroll';

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

  useEffect(() => {
    if(isVisible) {
      disableDocumentScroll();
    } else {
      enableDocumentScroll();
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
