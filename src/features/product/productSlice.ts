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
let carts = Storage.getCart();
const initialState: ProductState = {
  data: [],
  total: 0,
  load: false,
  error: null,
  filter: {
    _page: 1,
    _limit: 8,
  },
  carts: carts,
  totalCarts: setCartValues(carts).totalCarts,
  totalPrice: setCartValues(carts).totalPrice,
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
      state.total = action.payload.total;
    },
    fetchProductListFailed: (state, action: PayloadAction<ParamsGetRequest>) => {
      state.load = false;
      state.error = action.payload.message;
    },
    setFilter(state, action: PayloadAction<ParamsGetRequest>) {
      state.filter = action.payload;
    },
    addToCart(state, action: PayloadAction<any>) {
      let carts = Storage.getCart();
      const cartItem = { ...action.payload.product, amount: 1 };
      const foundIndex = carts.findIndex((item: ICartItem) => item.id === cartItem.id);

      if (foundIndex === -1) {
        carts = [...carts, cartItem];
      } else {
        carts[foundIndex].amount = carts[foundIndex].amount + action.payload.quality;
        carts[foundIndex].total =
          carts[foundIndex].price * carts[foundIndex].amount * 1000;
      }

      state.carts = carts;
      state.totalCarts = setCartValues(carts).totalCarts;
      state.totalPrice = setCartValues(carts).totalPrice;
      Storage.saveCart(carts);
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
// export const selectStudentPagination = (state: RootState) => state.product.pagination;

export default productReducer.reducer;
