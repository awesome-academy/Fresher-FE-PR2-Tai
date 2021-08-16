import { ICartItem } from './common';
export interface IOrder {
  id: number;
  lastname: string;
  company: string;
  street: string;
  city: string;
  country: string;
  phone: string;
  email: string;
  order_note: number;
  order_items: ICartItem[];
}
