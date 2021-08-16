import { Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
import Home from './pages/Client/Home';
import Cart from './pages/Client/Cart';
import Checkout from './pages/Client/Checkout';
import { selectAlert } from './features/alert/alertSlice';
import { useAppSelector } from './app/hooks';
import Alert from './components/Alert';

function App() {
  const alert = useAppSelector(selectAlert);
  return (
    <>
      {alert.message && Alert({ type: alert.type, message: alert.message })}
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
        <Route path='/checkout'>
          <Checkout />
        </Route>
        <PrivateRoute path='/admin'>
          <div>Admin</div>
        </PrivateRoute>
        <Route>
          <div>NotFound</div>
        </Route>
      </Switch>
    </>
  );
}

export default App;
