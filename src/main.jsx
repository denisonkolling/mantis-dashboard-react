import { store } from './store';
import reportWebVitals from './reportWebVitals';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

import 'simplebar/src/simplebar.css';
import { Provider as ReduxProvider } from 'react-redux';
import './assets/third-party/apex-chart.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ReduxProvider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ReduxProvider>
);
reportWebVitals();
