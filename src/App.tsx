import { Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
import Home from './pages/Client/Home';
import Cart from './pages/Client/Cart';

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/cart'>
        <Cart />
      </Route>
      <PrivateRoute path='/admin'>
        <div>Admin</div>
      </PrivateRoute>
      <Route>
        <div>NotFound</div>
      </Route>
    </Switch>
  );
}

export default App;
