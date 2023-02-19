import { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';

import * as S from './style';

const SideMenu = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    if (!isVisible) return;

    const onResize = () => {
      const breakPoint = parseFloat(theme.breakpoints.sideMenu);
      if (window.innerWidth > breakPoint) {
        setIsVisible(false);
      }
    };

    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, [isVisible, theme]);

  const openMenu = () => setIsVisible(true);
  const closeMenu = () => setIsVisible(false);

  return (
    <S.Container>
      <S.Button onClick={openMenu}>
        <S.Title>Меню</S.Title>
        <S.ThreeLineIcon />
      </S.Button>

      <S.Wrapper isVisible={isVisible}>
        <S.CloseButton onClick={closeMenu} />

        <S.Header>Меню</S.Header>
        <S.Content>{children}</S.Content>
      </S.Wrapper>
    </S.Container>
  );
};

export default SideMenu;
