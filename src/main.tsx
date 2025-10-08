import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { TanStackProvider } from './plugins/TanStackProvider';

import './css/style.css';
import './css/satoshi.css';
import 'jsvectormap/dist/css/jsvectormap.css';
import 'flatpickr/dist/flatpickr.min.css';
import { AlertProvider } from './context/AlertContext';
import ToastProvider from './components/Alerts/ToastProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <TanStackProvider>
        <Router>
          <AlertProvider>
            <ToastProvider />
            <App />
          </AlertProvider>
        </Router>
      </TanStackProvider>
    </Provider>
  </React.StrictMode>,
);
