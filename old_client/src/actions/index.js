import axios from 'axios';

import { FETCH_USER } from './types';

// a quantidade absurda de arrow functions aqui é pra
// poder usar promises como actions para o redux

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/auth/current');
  dispatch({ type: FETCH_USER, payload: res.data });
};
