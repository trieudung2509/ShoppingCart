import * as Types from '../constants/ActionTypes';
import callApi from '../utils/apiCaller';

export const actFetchProductsRequest = () => {
    return (dispatch) => {
      return callApi('shopping_cart_01_products','GET',null).then((res) => {
          dispatch(actFetchProducts(res.data));
      });
    }
}

export const actFetchProducts = (products) => {
      return {
          type : Types.FETCH_PRODUCTS,
          products
      }
}

export const actAddProductRequest = (product) => {
    return (dispatch) => {
        document.getElementById('api_loading').classList.add('show');
        return callApi('shopping_cart_01_products','POST',product).then((res) => {
              dispatch(actAddProduct(res.data));
              document.getElementById('api_loading').classList.remove('show');
              console.log(`${res.data.name} => đã thêm vào kho!`);
        })
    }
}
export const actAddProduct = (product) => {
      return {
          type : Types.ADD_PRODUCT,
          product
      }
}
