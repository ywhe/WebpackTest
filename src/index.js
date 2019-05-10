import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import LoginForm from './page/newLoginPage'
import ProductTableWithFilter from './page/productTable'

// ReactDOM.render(
//     <HashRouter>
//         <App />
//     </HashRouter>
//     , document.getElementById('root'));

ReactDOM.render(
    <ProductTableWithFilter />
    , document.getElementById('login'));
