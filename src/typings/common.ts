import { IProduct } from './product';
export interface ParamsGetRequest {
  _page: number;
  _limit: number;
  [key: string]: any;
}
export interface Response<T> {
  data: T[];
  total: number;
}
export interface ICartItem extends IProduct {
  amount: number;
  total?: number;
}
