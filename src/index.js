import React from 'react';
import ProductData from './ProductData';
import CartAPI from './utils/CartAPI';
import App from './App';

ProductData.init();

CartAPI.getProductData();

React.render(<App />, document.getElementById('root'));
