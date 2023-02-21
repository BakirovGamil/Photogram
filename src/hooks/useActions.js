import { useMemo } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import * as userActions from '@/store/actionCreators/user.js';

export const useUserActions = () => {
  const dispatch = useDispatch();
  return useMemo(() => bindActionCreators(userActions, dispatch), [dispatch]);
};