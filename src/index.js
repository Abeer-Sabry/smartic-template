import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'popper.js/dist/umd/popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import "@fortawesome/fontawesome-free/css/all.min.css"
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import {Provider} from 'react-redux'
import stroe from './Redux/store';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={stroe}>
      <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


