import { all } from '@redux-saga/core/effects';
import productSaga from '../features/product/productSaga';
import orderSaga from '../features/order/orderSaga';
import authSaga from '../features/auth/authSaga';

export default function* rootSaga() {
  yield all([productSaga(), authSaga(), orderSaga()]);
}
