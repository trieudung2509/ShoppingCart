import * as Types from '../constants/ActionTypes';

var initialState = [];

const products = (state = initialState, action) => {
      var { product } = action;
      switch(action.type) {
        case Types.FETCH_PRODUCTS:
            state = action.products;
            return [...state];
        case Types.ADD_PRODUCT :
            state.push(product);
            return [...state];
        default :
            return [...state];
      }
}

export default products;
