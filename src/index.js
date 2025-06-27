import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router,Routes } from 'react-router-dom';
import {Route} from 'react-router'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <Router>
    <App/>
 </Router>
  </React.StrictMode>
);


