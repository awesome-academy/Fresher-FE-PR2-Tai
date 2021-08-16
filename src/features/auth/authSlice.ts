import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { IUser, LoginPayload } from '../../typings';
import { Storage } from '../../utils';

export interface AuthState {
  isLoggedIn?: boolean;
  load?: boolean;
  currentUser?: IUser;
}
let currentUser = Storage.getUser();

const initialState: AuthState = currentUser
  ? { load: false, isLoggedIn: true, currentUser }
  : {};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<LoginPayload>) {
      state.load = true;
    },
    loginSuccess(state, action: PayloadAction<IUser>) {
      state.isLoggedIn = true;
      state.load = false;
      state.currentUser = action.payload;
    },
    loginFailed(state, action: PayloadAction<string>) {
      state.load = false;
    },

    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

// Actions
export const authActions = authSlice.actions;

// Selectors
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectIsLogging = (state: RootState) => state.auth.load;
export const selectCurrentUser = (state: RootState) => state.auth.currentUser;
// Reducer
const authReducer = authSlice.reducer;
export default authReducer;
