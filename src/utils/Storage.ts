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

  setUser: (user: any) => {
    localStorage.setItem('user', JSON.stringify(user));
  },
  getUser: () => {
    const user = localStorage.getItem('user');
    return typeof user === 'string' ? JSON.parse(user) : null;
  },
  removeUser: () => {
    localStorage.removeItem('user');
  },
};
