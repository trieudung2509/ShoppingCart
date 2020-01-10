import React from 'react';
import HomePage from './pages/HomePage';
import ProductListMngPage from './pages/ProductListMngPage';
import ProductActionMngPage from './pages/ProductActionMngPage';
import ProductListPage from './pages/ProductListPage';

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
  },
  {
    path : "/product-mng/:Id/edit",
    exact : false,
    main : ({ match, history }) => <ProductActionMngPage match={match} history = { history }/>
  },
  {
    path : "/product-mng/delete/:Id",
    exact : false,
    main : ({ match, history }) => <ProductActionMngPage match={match} history = { history }/>
  },
  {
    path : "/product-list",
    exact : false,
    main : () => <ProductListPage />
  }
];

export default routes;
