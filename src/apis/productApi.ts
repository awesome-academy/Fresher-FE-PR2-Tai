import axiosClient from './axiosClient';
import { ParamsGetRequest, IProduct, Response } from '../typings';
class ProductApi {
  url: string;

  constructor(url: string) {
    this.url = url;
  }
  get = (params: ParamsGetRequest): Promise<Response<IProduct>> => {
    return axiosClient.get(this.url, { params });
  };

  getById = (id: string): Promise<IProduct> => axiosClient.get(`${this.url}/${id}`);

  add = (body: IProduct): Promise<IProduct> =>
    axiosClient.post(this.url, { params: body });

  update = (body: IProduct): Promise<IProduct> =>
    axiosClient.put(this.url, { params: body });

  remove = (id: string): Promise<any> => axiosClient.delete(`${this.url}/${id}`);
}
const productApi = new ProductApi('/products');
export default productApi;
