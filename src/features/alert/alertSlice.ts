import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface AlertState {
  type: 'success' | 'error' | 'warning';
  message?: string;
}

const initialState: AlertState = {
  type: 'success',
};
const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    success(state, action: PayloadAction<AlertState>) {
      state.type = action.payload.type;
      state.message = action.payload.message;
    },
    error(state, action: PayloadAction<AlertState>) {
      state.type = action.payload.type;
      state.message = action.payload.message;
    },
    warning(state, action: PayloadAction<AlertState>) {
      state.type = action.payload.type;
      state.message = action.payload.message;
    },
  },
});

// Actions
export const alertActions = alertSlice.actions;

// Selectors
export const selectAlert = (state: RootState) => state.alert;
// Reducer
const alertReducer = alertSlice.reducer;
export default alertReducer;
