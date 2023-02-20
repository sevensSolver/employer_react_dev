import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import './styles/main.css';
import { ConfigProvider } from 'antd';

import { store } from './store/index';
import 'antd/dist/reset.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#3ab44d',
            colorLink: 'black',
            colorLinkHover: 'black',
          },
        }}
      >
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </Provider>,
);
