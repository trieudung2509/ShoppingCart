import React from 'react';
import HomePage from './pages/HomePage';
import ProductListMngPage from './pages/ProductListMngPage';
const routes = [
  {
    path : "/",
    exact : true,
    main : () => <HomePage />
  },
  {
    path : "/product-list-mng",
    exact : false,
    main : () => <ProductListMngPage />
  }
];

export default routes;
