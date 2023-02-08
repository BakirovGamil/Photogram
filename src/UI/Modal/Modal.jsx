import React, { useCallback } from 'react';
import { useEffect } from 'react';

import * as S from './style';

const Modal = React.forwardRef(({ children, isVisible, setIsVisible}, ref) => {
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

  return (
    <S.Container onMouseDown={() => setIsVisible(false)} isVisible={isVisible}>
      <S.Content ref={ref} onMouseDown={(e) => e.stopPropagation()}>{children}</S.Content>
    </S.Container>
  );
});

export default Modal;
