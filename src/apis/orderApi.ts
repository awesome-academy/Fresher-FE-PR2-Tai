import axiosClient from './axiosClient';
import { ParamsGetRequest, IProduct, Response, IOrder } from '../typings';
class OrderApi {
  url: string;
  constructor(url: string) {
    this.url = url;
  }
  add = (body: IOrder): Promise<IOrder> => axiosClient.post(this.url, body);
}
const orderApi = new OrderApi('/orders');
export default orderApi;
