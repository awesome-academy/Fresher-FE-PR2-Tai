import { PayloadAction } from '@reduxjs/toolkit';
import { push } from 'connected-react-router';
import { all, call, fork, put, take } from 'redux-saga/effects';
import authApi from '../../apis/authApi';
import { ILogin, LoginPayload } from '../../typings';
import { Storage } from './../../utils';
import { authActions } from './authSlice';
import { alertActions } from '../alert/alertSlice';

function* handleLogin(action: PayloadAction<LoginPayload>) {
  try {
    const res: ILogin = yield call(authApi.login, action.payload);

    Storage.setToken(res.accessToken);
    Storage.setUser(res.user);
    yield all([
      put(authActions.loginSuccess(res.user)),
      put(alertActions.success({ type: 'success', message: 'Login Success' })),
      put(push('/checkout')),
    ]);
  } catch (error) {
    yield put(authActions.loginFailed(error.message));
  }
}

function* handleLogout() {
  Storage.removeToken();
  Storage.removeUser();
  yield put(push('/login'));
}

function* watchLoginFlow() {
  while (true) {
    const isLoggedIn = Boolean(Storage.getToken());
    if (!isLoggedIn) {
      const action: PayloadAction<LoginPayload> = yield take(authActions.login.type);
      yield fork(handleLogin, action);
    }
    yield take(authActions.logout.type);
    yield call(handleLogout);
  }
}

export default function* authSaga() {
  yield fork(watchLoginFlow);
}
