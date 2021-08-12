import { Redirect, RouteProps, Route } from 'react-router-dom';
import { Storage } from '../../utils';

export function PrivateRoute(props: RouteProps) {
  const isLoggedIn = Boolean(Storage.getToken());
  if (!isLoggedIn) return <Redirect to='/login' />;

  return <Route {...props} />;
}
