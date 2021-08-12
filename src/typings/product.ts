export interface Image {
  url: string;
}
export interface IProduct {
  id: number;
  name: string;
  image: Image[];
  desc: string;
  price: string;
  priceDiscount: string;
  type: string;
  cateId: number;
  cateName: string;
  createAt: number;
}
