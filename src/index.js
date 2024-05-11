import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
// import Main from './components/img/Main';
import Shiping from './components/Shiping';

=======
import Product from './components/Product'
import 'bootstrap/dist/css/bootstrap.min.css';
>>>>>>> 744c926838569ffed91eee4ad58cd5110ba4fb0c

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
<<<<<<< HEAD
    <Shiping />
=======
    <Product />
>>>>>>> 744c926838569ffed91eee4ad58cd5110ba4fb0c
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
