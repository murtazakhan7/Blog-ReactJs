import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router,Routes } from 'react-router-dom';
import { StoreProvider } from 'easy-peasy';
import store from './store.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<StoreProvider store={store}>
 <Router>
    <App/>
 </Router>
 </StoreProvider>
  </React.StrictMode>
);


