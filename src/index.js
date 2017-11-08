import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducers from './reducers'
import './index.css';
import App from './containers/App'
import Home from './routes/Home';
import Todos from './routes/Todos';
import Error from './routes/Error';
import registerServiceWorker from './registerServiceWorker';

// 路由
const routes = [
  {
    path: '/',
    exact: true,
    content: Home
  },
  {
    path: '/todos',
    content: Todos
  },
  {
    path: '/error',
    content: Error
  }
]

const store = createStore(reducers);

// Provider 在根组件外面包了一层，这样一来，App的所有子组件就默认都可以拿到state了
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App routes={routes} />
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
