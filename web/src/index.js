import React from 'react';
import ReactDOM from 'react-dom';
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import './index.css';
import App from './components/App.js';
import * as serviceWorker from './serviceWorker';

const options = {
  timeout: 3000,
  position: positions.TOP_RIGHT
};

ReactDOM.render(
  <React.StrictMode>
    <Provider template={AlertTemplate} {...options}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();