import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";  //aligns cols evenly on homescreen
 import "./_base.scss"
 import { BrowserRouter } from 'react-router-dom'
import HomeRoutes from './Components/AllRoutes/AllRoutes';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </React.StrictMode>
);


