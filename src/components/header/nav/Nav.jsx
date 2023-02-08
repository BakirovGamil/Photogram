import * as S from './style';
import AuthorizationModal from '@c/authorizationModal/AuthorizationModal';
import { useState } from 'react';

const Nav = () => {
  const [isVisibleAuthorization, setIsVisibleAuthorization] = useState(false);
  const openAuthorizationModal = () => setIsVisibleAuthorization(true);

  return (
    <>
      <S.Nav>
        <S.List>
          <S.Item>
            <S.StyledLink to="/">
              <i className="gg-instagram"></i>
              <span>Photogram</span>
            </S.StyledLink>
          </S.Item>
          <S.ItemPlaceholder />
          <S.Item>
            <S.StyledButton onClick={openAuthorizationModal}>Вход</S.StyledButton>
          </S.Item>
          <S.Item>
            <S.StyledButton>Регистрация</S.StyledButton>
          </S.Item>
        </S.List>
      </S.Nav>
      <AuthorizationModal
        isVisible={isVisibleAuthorization}
        setIsVisible={setIsVisibleAuthorization}
      />
    </>
  );
};

export default Nav;
