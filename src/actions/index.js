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

export const actGetProductRequest = (id) => {
    return (dispatch) => {
      return callApi(`shopping_cart_01_products/${id}`,'GET', null).then((res) => {
          dispatch(actGetProduct(res.data));
      });
    }
}

export const actGetProduct = (product) => {
  return {
    type : Types.EDIT_PRODUCT,
    product
  }
}

export const actUpdateProductRequest = (product) => {
  return (dispatch) => {
    document.getElementById('api_loading').classList.add('show');
    return callApi(`shopping_cart_01_products/${product.id}`,'PUT', product).then((res) => {
        dispatch(actUpdateProduct(res.data));
        document.getElementById('api_loading').classList.remove('show');
		  	console.log(`${res.data.name} => đã cập nhật thành công!`);
    })
  }
}

export const actUpdateProduct = (product) => {
    return {
        type : Types.UPDATE_PRODUCT,
        product
    }
}

export const actDeleteProductRequest = (product) => {
    return (dispatch) => {
      return callApi(`shopping_cart_01_products/${product.id}`,'DELETE', product).then((res) => {
          dispatch(actDeleteProduct(res.data));
      })
    }
}

export const actDeleteProduct = (product) => {
    return {
      type : Types.DELETE_PRODUCT,
      product
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

export const actSearchProduct  = (keyword) => {
    return {
      type : Types.SEARCH_PRODUCT,
      keyword
    }
}
