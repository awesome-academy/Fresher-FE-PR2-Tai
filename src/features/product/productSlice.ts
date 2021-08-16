import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { ParamsGetRequest, IProduct, Response, ICartItem } from '../../typings';
import { Storage, setCartValues } from '../../utils';

export interface ProductState {
  data: IProduct[];
  total: number;
  load: boolean;
  error: null;
  filter: ParamsGetRequest;
  carts: ICartItem[];
  totalCarts: number;
  totalPrice: number;
}
const initialState: ProductState = {
  data: [],
  total: 0,
  load: false,
  error: null,
  filter: {
    _page: 1,
    _limit: 8,
  },
  carts: Storage.getCart(),
  totalCarts: setCartValues(Storage.getCart()).totalCarts,
  totalPrice: setCartValues(Storage.getCart()).totalPrice,
};

const productReducer = createSlice({
  name: 'product',
  initialState,
  reducers: {
    fetchProductList: (state, action: PayloadAction<ParamsGetRequest>) => {
      state.load = true;
    },
    fetchProductListSuccess: (state, action: PayloadAction<Response<IProduct>>) => {
      state.load = false;
      state.data = action.payload.data;
      state.total = action.payload.total || 0;
    },
    fetchProductListFailed: (state, action: PayloadAction<ParamsGetRequest>) => {
      state.load = false;
      state.error = action.payload.message;
    },
    setFilter(state, action: PayloadAction<ParamsGetRequest>) {
      state.filter = action.payload;
    },
    addToCart(state, action: PayloadAction<any>) {
      const cartItem = {
        ...action.payload.product,
        amount: 1,
        total: parseInt(action.payload.product.price) * 100,
      };
      const foundIndex = state.carts.findIndex(
        (item: ICartItem) => item.id === cartItem.id
      );

      if (foundIndex === -1) {
        state.carts.push(cartItem);
      } else {
        state.carts[foundIndex].amount =
          action.payload.type === 'UPDATE_CART'
            ? action.payload.amount
            : state.carts[foundIndex].amount + action.payload.amount;
        state.carts[foundIndex].total =
          parseInt(state.carts[foundIndex].price) * state.carts[foundIndex].amount * 100;
      }

      state.totalCarts = setCartValues(state.carts).totalCarts;
      state.totalPrice = setCartValues(state.carts).totalPrice;
      Storage.saveCart(state.carts);
    },
    removeCartItem(state, action: PayloadAction<any>) {
      state.carts = state.carts.filter((item) => item.id !== action.payload);

      state.totalCarts = setCartValues(state.carts).totalCarts;
      state.totalPrice = setCartValues(state.carts).totalPrice;
      Storage.saveCart(state.carts);
    },
    clearCart(state) {
      Storage.removeCart();
      setCartValues([]);
      state.totalCarts = 0;
      state.totalPrice = 0;
      state.carts = [];
    },
  },
});

//Actions
export const productActions = productReducer.actions;
//Selectors
export const selectorProductList = (state: RootState) => state.product.data;
export const selectorProductLoad = (state: RootState) => state.product.load;
export const selectProductFilter = (state: RootState) => state.product.filter;
export const selectProductCarts = (state: RootState) => state.product.carts;
export const selectProductTotalCarts = (state: RootState) => state.product.totalCarts;
export const selectProductTotalPrice = (state: RootState) => state.product.totalPrice;

export default productReducer.reducer;
