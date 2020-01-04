import { takeLatest, put, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';
import { signinSuccess, signinFailure } from './actions'
function* signin({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(api.post, 'sessions', {
      email,
      password
    });

    const { token, user } = response.data;
    console.tron.log(user.provider);
    if (!token) {
      toast.error('Usuário inválido');
      return;
    }
    if (!user.provider) {
      toast.error('Usuário não encontrado');
    }
    api.defaults.headers.Authorization = `Bearer ${token}`

    yield put(signinSuccess(token, user));
    history.push('/dashboard');

  } catch (error) {
    toast.error('Usuário ou senha inválidos');
    yield put(signinFailure());
  }

}

function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;
    yield call(api.post, '/users', {
      name,
      email,
      password,
      provider: true
    })

    history.push('/');
  } catch (error) {
    toast.error('Usuário ou senha inválidos');
    yield put(signinFailure());
  }
}
function setToken({payload}) {
  if (!payload) return;
  
  const { token } = payload.auth;
  api.defaults.headers.Authorization = `Bearer ${token}`
}
export default all(
  [
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest('@auth/SIGNIN_REQUEST', signin),
    takeLatest('@auth/SIGNUP_REQUEST', signUp)
  ]);