import { IUser, LoginPayload, Response } from '../typings';
import axiosClient from './axiosClient';
class AuthApi {
  url: string;
  constructor(url: string) {
    this.url = url;
  }
  login = (body: LoginPayload): Promise<Response<IUser>> =>
    axiosClient.post(this.url, body);
}
const authApi = new AuthApi('/login');
export default authApi;
