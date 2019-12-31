import React from 'react';
import HomePage from './pages/HomePage';
import ProductListMngPage from './pages/ProductListMngPage';
import ProductActionMngPage from './pages/ProductActionMngPage';
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
  },
  {
    path : "/product-mng/add",
    exact : false,
    main : ({ history }) => <ProductActionMngPage  history = { history }/>
  }
];

export default routes;
