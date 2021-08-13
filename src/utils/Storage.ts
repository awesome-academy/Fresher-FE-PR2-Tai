export const Storage = {
  saveCart: (carts: any) => {
    localStorage.setItem('carts', JSON.stringify(carts));
  },
  getCart: () => {
    const carts = localStorage.getItem('carts');
    return typeof carts === 'string' ? JSON.parse(carts) : [];
  },
  removeCart: () => {
    localStorage.removeItem('carts');
  },

  setToken: (token: string) => {
    localStorage.setItem('access_token', token);
  },
  getToken: () => {
    return localStorage.getItem('access_token');
  },
  removeToken: () => {
    localStorage.removeItem('access_token');
  },
};
