import { combineReducers, configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/product/productSlice';
import orderReducer from '../features/order/orderSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { history } from '../utils';
import authReducer from '../features/auth/authSlice';
import alertReducer from '../features/alert/alertSlice';
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  router: connectRouter(history),
  product: productReducer,
  order: orderReducer,
  auth: authReducer,
  alert: alertReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware, routerMiddleware(history)),
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
