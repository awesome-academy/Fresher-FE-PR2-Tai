import { ICartItem } from '../typings';
export const Storage = {
  saveCart: (carts: ICartItem) => {
    localStorage.setItem('carts', JSON.stringify(carts));
  },
  getCart: () => {
    const carts = localStorage.getItem('carts');
    return typeof carts === 'string' ? JSON.parse(carts) : [];
  },
  removeCart: () => {
    localStorage.removeItem('carts');
  },
};
