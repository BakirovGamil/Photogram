import { useState } from 'react';
import Modal from '@/UI/Modal/Modal';
import TextInput from '@/UI/TextInput/TextInput';
import useFeching from '@/hooks/useFetching';

import * as S from './style';

const AuthorizationModal = ({ isVisible, setIsVisible }) => {
  const [user, setUser] = useState({ login: '', password: '' });
  const [, authorization, errorAuthorization] = useFeching(async (e) => {
    e.preventDefault();

    //Тут обработка авторизации

    setUser({ login: '', password: '' });
  });

  const inputLogin = (e) => {
    setUser({ ...user, login: e.target.value.trim() });
  };

  const inputPassword = (e) => {
    setUser({ ...user, password: e.target.value.trim() });
  };

  return (
    <Modal isVisible={isVisible} setIsVisible={setIsVisible}>
      <S.Container>
        <S.Title>Авторизация</S.Title>
        <S.Form onSubmit={authorization}>
          <TextInput
            placeholder="Введите логин"
            value={user.login}
            onChange={inputLogin}
            required
          />
          <TextInput
            placeholder="Введите пароль"
            value={user.password}
            onChange={inputPassword}
            type="password"
            required
          />
          <S.Button>Вход</S.Button>
        </S.Form>
      </S.Container>
    </Modal>
  );
};

export default AuthorizationModal;
