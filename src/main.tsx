import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { store } from './redux/store';
import { router } from './routes/config';
import { Provider } from 'react-redux';
import { RouterProvider } from "react-router-dom"; 

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
