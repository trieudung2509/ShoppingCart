import * as Types from '../constants/ActionTypes';

var initialState = [];

const products = (state = initialState, action) => {
      var { product } = action;
      var index = -1;
      switch(action.type) {
        case Types.FETCH_PRODUCTS:
            state = action.products;
            return [...state];
        case Types.ADD_PRODUCT :
            state.push(product);
            return [...state];
        case Types.EDIT_PRODUCT:
            return action.product;
        case Types.UPDATE_PRODUCT:
            console.log(action);
            index = findIndex(state,product.id);
            state[index] = product;
            return [...state];
        case Types.DELETE_PRODUCT:
            index = findIndex(state,product.id);
            state.splice(index,1);
            return [...state];
        default :
            return [...state];
      }
}

var findIndex = (products,id) => {
  var result = -1;
  if (products.length > 0) {
      for (let i = 0; i< products.length; i++) {
          if (products[i].id == id ) {
              result = i;
              break;
          }
      }
  }
  return result;
}
export default products;
