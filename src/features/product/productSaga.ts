import { PayloadAction } from '@reduxjs/toolkit';
import { takeLatest, put, call } from 'redux-saga/effects';
import productApi from '../../apis/productApi';
import { ParamsGetRequest, Response, IProduct } from '../../typings';
import { productActions } from './productSlice';
function* fetchProductList(action: PayloadAction<ParamsGetRequest>) {
  try {
    const res: Response<IProduct> = yield call(productApi.get, action.payload);
    yield put(productActions.fetchProductListSuccess(res));
  } catch (error) {
    yield put(productActions.fetchProductListFailed(error));
  }
}

export default function* productSaga() {
  yield takeLatest(productActions.fetchProductList, fetchProductList);
}
