import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";  //aligns cols evenly on homescreen
 import "./_base.scss"
 import { HashRouter,BrowserRouter } from 'react-router-dom'
import HomeRoutes from './Components/AllRoutes/AllRoutes';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Provider } from 'react-redux';
import store from './Redux/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
    <Provider store ={store} >
    <App />
    </Provider>
       
    </HashRouter>
  </React.StrictMode>
);


