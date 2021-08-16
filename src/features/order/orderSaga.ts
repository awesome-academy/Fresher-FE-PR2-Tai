import { PayloadAction } from '@reduxjs/toolkit';
import { push } from 'connected-react-router';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import orderApi from '../../apis/orderApi';
import { IOrder, Response } from '../../typings';
import { alertActions } from '../alert/alertSlice';
import { productActions } from '../product/productSlice';
import { Storage } from './../../utils';
import { orderActions } from './orderSlice';
function* addOrder(action: PayloadAction<IOrder>) {
  try {
    let carts = Storage.getCart();
    const body = { ...action.payload, order_items: carts };
    yield call(orderApi.add, body);
    yield all([
      put(productActions.clearCart()),
      put(alertActions.success({ type: 'success', message: 'Your order has been paid' })),
      put(push('/')),
    ]);
  } catch (errors) {
    console.log(errors);
  }
}

export default function* orderSaga() {
  yield takeLatest(orderActions.addOrder, addOrder);
}
