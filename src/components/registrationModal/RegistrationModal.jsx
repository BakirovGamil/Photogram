import { useState } from 'react';
import Modal from '@/UI/Modal/Modal';
import TextInput from '@/UI/TextInput/TextInput';
import ImageInput from '@/UI/ImageInput/ImageInput';
import useFeching from '@/hooks/useFetching';

import * as S from './style';

const rawUser = {
  avatar: '',
  name: '',
  about: '',
  login: '',
  password: '',
};

const RegistrationModal = ({ isVisible = true, setIsVisible }) => {
  const [user, setUser] = useState(() => rawUser);
  const [, registration, errorRegistration] = useFeching(async (e) => {
    e.preventDefault();
    e.target.reset();

    //Тут обработка авторизации

    // setUser(rawUser);
  });

  const [imgPath, setImgPath] = useState('');
  const inputValue = (property, value) => setUser({...user, [property]: value}) 

  return (
    <Modal isVisible={isVisible} setIsVisible={setIsVisible}>
      <S.Container>
        <S.Title>Регистрация</S.Title>
        <S.Form onSubmit={registration}>
          <ImageInput value={imgPath} setValue={setImgPath}/>
          <S.Label>Имя:</S.Label>
          <TextInput
            placeholder="Введите имя"
            value={user.name}
            onChange={(e) => inputValue(e.target.value, 'name')}
            required
          />
          <S.Label>О себе:</S.Label>
          <S.TextArea
            placeholder="Напишите о себе"
            value={user.about}
            onChange={(e) => inputValue(e.target.value, 'about')}
          />
          <S.Label>Логин:</S.Label>
          <TextInput
            placeholder="Введите логин"
            value={user.login}
            onChange={(e) => inputValue(e.target.value.trim(), 'login')}
            required
          />
          <S.Label>Пароль:</S.Label>
          <TextInput
            placeholder="Введите пароль"
            value={user.password}
            onChange={(e) => inputValue(e.target.value.trim(), 'password')}
            type="password"
            required
          />
          <S.Button>Зарегистрироваться</S.Button>
        </S.Form>
      </S.Container>
    </Modal>
  );
};

export default RegistrationModal;
