import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";  //aligns cols evenly on homescreen
 import "./_base.scss"
 import { HashRouter,BrowserRouter } from 'react-router-dom'
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Provider } from 'react-redux';
import store from './Redux/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store ={store} >
    <App />
    </Provider>
       
    </BrowserRouter>
  </React.StrictMode>
);


// "homepage": "https://rutu-11.github.io/You-Tube-Clone",

// "predeploy": "npm run build",
// "deploy": "gh-pages -d build",