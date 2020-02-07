import * as Types from '../constants/ActionTypes';
var data = JSON.parse(localStorage.getItem('CART'));
var initialState = data ? data : [];

const cart = (state = initialState, action) => {
    var { item, product, quantity } = action;
    var index = -1;
    switch (action.type) {
  		case Types.ADD_TO_CART:
  			index = findProductInCart(state, product);
  			if (index === -1) {
  				state.push({
  					product,
  					quantity
  				});
  			} else {
  				state[index].quantity += quantity;
  			}
        localStorage.setItem('CART',JSON.stringify(state));
  			return [...state];
      case Types.DELETE_PRODUCT_IN_CART:
          index = findIndex(state,item.id);
          state.splice(state,1);
          localStorage.setItem('CART',JSON.stringify(state));
          return [...state];
      case Types.UPDATE_PRODUCT_QUANTITY :
          index = findIndex(state,item.id);
          if (index !== -1) {
              state[index].quantity = quantity;
          }
          localStorage.setItem('CART',JSON.stringify(state));
          return [...state];
      default:
        return [...state];
    }
}

var findIndex = (list, id) => {
	var result = -1;
	if(list.length > 0) {
		for (var i = 0; i < list.length; i++) {
			if(list[i].product.id === id) {
				result = i;
				break;
			}
		}
	}
	return result;
};

var findProductInCart = (cart, product) => {
	var index = -1;
	if(cart.length > 0) {
		for (var i = 0; i < cart.length; i++) {
			if(cart[i].product.id === product.id) {
				index = i;
				break;
			}
		}
	}
	return index;
};
export default cart;
