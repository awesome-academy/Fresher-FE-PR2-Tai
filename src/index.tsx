import ReactDOM from 'react-dom';
import 'slick-carousel/slick/slick.css';
import 'antd/dist/antd.css';
import './assets/css/index.css';
import Home from './pages/Client/Home';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
