export interface IUser {
  id: number | string;
  firstname: string;
  lastname: string;
  company?: string;
  street: string;
  city: string;
  country: string;
  phone: string;
  email: string;
  createdAt: number;
  role: 'user' | 'admin';
}
