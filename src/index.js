import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Product from './components/Product';
  
// import Main from '1  `./components/img/Main';
import Shiping from './components/Shiping';
// import Shipp from './components/Shipp';
// import Product from './components/product';
import 'bootstrap/dist/css/bootstrap.min.css';
import Api from './components/Api';
// import 'font-awesome/css/font-awesome.min.css';
// import 'font-awesome/css/font-awesome.min.css';
import Card from './components/Card';
import Product from './components/product'
// import Card from './components/Card';

// import Product from './components/Product'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'font-awesome/css/font-awesome.min.css';
// import Product from './components/Product' 
// import Card from './components/Card';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Shiping />
    <Product />
    {/* <Card /> */}
    <App />
    {/* <Api /> */}
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
