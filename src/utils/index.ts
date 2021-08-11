import { ICartItem } from '../typings';

export const setCartValues = (carts: ICartItem[]) => {
  let totalCarts = 0;
  let totalPrice = 0;

  carts.map((item: ICartItem) => {
    totalPrice += parseInt(item.price) * item.amount;
    totalCarts += item.amount;
  });

  return { totalCarts, totalPrice };
};
export * from './Storage';
