import { SET_CURRENT_USER } from '@/store/constants/user';
import UserService from '@/api/UserService';

export const setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    payload: {
      user,
    },
  };
};

export const fetchCurrentUser = () => {
  return (dispatch) => {
    const responsePromise = UserService.getCurrentUser();
    responsePromise
      .then((response) => response.json())
      .then((currentUser) => dispatch(setCurrentUser(currentUser[0]))) //Возвращает массив
      .catch((e) => console.log(e)); 
  };
};
