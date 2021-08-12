import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import qs from 'qs';

const axiosClient = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: (params) => {
    return qs.stringify(params);
  },
});

axiosClient.interceptors.request.use(async (config: AxiosRequestConfig) => {
  // Handle token here ...
  return config;
});

axiosClient.interceptors.response.use(
  (response: AxiosResponse | any) => {
    if (response && response.data && response.config.method === 'get') {
      return {
        total: Number(response.headers['x-total-count']),
        data: response.data,
      };
    }
    if (response && response.data && response.config.method === 'post') {
      return response.data;
    }
    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  }
);

export default axiosClient;
