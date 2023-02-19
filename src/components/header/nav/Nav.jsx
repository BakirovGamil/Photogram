import { useState } from 'react';
import AuthorizationModal from '@c/authorizationModal/AuthorizationModal';
import RegistrationModal from '@c/registrationModal/RegistrationModal';
import Button from '@/UI/Button/Button';
import SideMenu from '@c/header/nav/sideMenu/SideMenu';

import * as S from './style';

const Nav = () => {
  const [isVisibleAuthorization, setIsVisibleAuthorization] = useState(false);
  const openAuthorizationModal = () => setIsVisibleAuthorization(true);

  const [isVisibleRegistration, setIsVisibleRegistration] = useState(false);
  const openRegistrationModal = () => setIsVisibleRegistration(true);

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
            <S.StyledButton onClick={openAuthorizationModal}>
              Вход
            </S.StyledButton>
          </S.Item>
          <S.Item>
            <S.StyledButton onClick={openRegistrationModal}>
              Регистрация
            </S.StyledButton>
          </S.Item>
        </S.List>

        <S.ListForMobile>
          <S.Item>
            <S.StyledLink to="/">
              <i className="gg-instagram"></i>
              <span>Photogram</span>
            </S.StyledLink>
          </S.Item>
          <S.ItemPlaceholder />
          <S.Item>
            <SideMenu>
              <Button onClick={openAuthorizationModal}>
                Вход
              </Button>
              <Button onClick={openRegistrationModal}>
                Регистрация
              </Button>
            </SideMenu>
          </S.Item>
        </S.ListForMobile>
      </S.Nav>
      <AuthorizationModal
        isVisible={isVisibleAuthorization}
        setIsVisible={setIsVisibleAuthorization}
      />
      <RegistrationModal
        isVisible={isVisibleRegistration}
        setIsVisible={setIsVisibleRegistration}
      />
    </>
  );
};

export default Nav;
