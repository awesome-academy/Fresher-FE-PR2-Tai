import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import 'slick-carousel/slick/slick.css';
import 'antd/dist/antd.css';
import './assets/css/index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { history } from './utils';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
