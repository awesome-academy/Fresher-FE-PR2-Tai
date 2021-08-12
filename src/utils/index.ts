import { ICartItem } from '../typings';

export const setCartValues = (carts: ICartItem[]) => {
  let totalCarts = 0;
  let totalPrice = 0;
  let totalPriceCart = 0;

  carts.map((item: ICartItem) => {
    totalPrice += parseInt(item.price) * item.amount;
    totalCarts += item.amount;
    totalPriceCart += item.total;
  });

  let totalPriceCartShiped = totalPriceCart + 15 * 100;
  return { totalCarts, totalPrice, totalPriceCart, totalPriceCartShiped };
};
export * from './Storage';
export * from './history';
export * from './validate';
