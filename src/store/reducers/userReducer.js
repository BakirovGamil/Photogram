import { SET_CURRENT_USER } from '@/store/constants/user';

const initialState = {
  currentUser: null,
};

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        user: action.payload.user
      }
    default:
      return state;
  }
};

export default userReducer;
