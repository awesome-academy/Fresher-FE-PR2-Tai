import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { ParamsGetRequest, Response, IOrder } from '../../typings';

export interface OrderState {
  data: IOrder[];
  total: number;
  load: boolean;
  error: null;
  filter: ParamsGetRequest;
}
const initialState: OrderState = {
  data: [],
  total: 0,
  load: false,
  error: null,
  filter: {
    _page: 1,
    _limit: 8,
  },
};

const orderReducer = createSlice({
  name: 'order',
  initialState,
  reducers: {
    fetchProductList: (state, action: PayloadAction<ParamsGetRequest>) => {
      state.load = true;
    },
    fetchProductListSuccess: (state, action: PayloadAction<Response<IOrder>>) => {
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

    addOrder: (state, action: PayloadAction<IOrder>) => {
      state.load = true;
    },
  },
});

//Actions
export const orderActions = orderReducer.actions;
//Selectors
export const selectorProductList = (state: RootState) => state.order.data;
export const selectorProductLoad = (state: RootState) => state.order.load;
export const selectProductFilter = (state: RootState) => state.order.filter;

export default orderReducer.reducer;
