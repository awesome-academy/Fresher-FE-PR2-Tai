import { IProduct } from './product';
import { IUser } from './user';
export interface ParamsGetRequest {
  _page: number;
  _limit: number;
  [key: string]: any;
}
export interface Response<T> {
  data: T[];
  total?: number;
  status?: number;
}
export interface ICartItem extends IProduct {
  amount: number;
  total: number;
}
export interface LoginPayload {
  email: string;
  password: string;
}
export interface ILogin {
  accessToken: string;
  user: IUser;
}
