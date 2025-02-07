import React from 'react';
import ReactDOM from 'react-dom';
import { StyleProvider, ThemePicker } from 'vcc-ui';

import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <StyleProvider>
      <ThemePicker variant="light">
        <App />
      </ThemePicker>
    </StyleProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
