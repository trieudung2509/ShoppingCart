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

export const actAddToCartRequest = (product,quantity) => {
    return (dispatch) => {
      document.getElementById('api_loading').classList.add('show');
      callApi('shopping_cart_01_cart','GET',null).then((res) => {
          if (res.data.length == 0) { // thực hiện thêm mới khi chưa có sản phẩm nào trong giỏ hàng.
              return callApi('shopping_cart_01_cart','POST',{product,quantity}).then((res) => {
                dispatch(actAddToCart(res.data.product,res.data.quantity));
                document.getElementById('api_loading').classList.remove('show');
              });
          } else {
              //tìm kiếm xem sản phẩm đã có trong giỏ hàng chưa
              var index = -1;
              var cart_item_id = 0;
              var new_quantity = 0;
              for (let i = 0; i< res.data.length; i++) {
                  if (res.data[i].product.id == product.id) { // đã tìm thấy 1 sản phẩm trong giỏ hàng.
                      index = i;
                      cart_item_id = res.data[i].id;
						          new_quantity = res.data[i].quantity + quantity;
                      break;
                  }
              }

              if (index != -1) { //tăng số lượng sản phẩm lên thêm 1 vì id của một sản phẩm được tìm thấy trong giỏ hàng
                  if (new_quantity > product.inventory) {
                    document.getElementById('api_loading').classList.remove('show');
        						alert('Số lượng hàng trong kho không đủ. Chúng tôi sẽ cập nhật sớm!');
        						return false;
                  } else {
                    return callApi(`shopping_cart_01_cart/${cart_item_id}`, 'PUT', {product: product, quantity: new_quantity}).then((res) => {
        							dispatch(actAddToCart(res.data.product, res.data.quantity));
        							document.getElementById('api_loading').classList.remove('show');
        						});
                  }
              } else { //thêm mới vì không tìm thấy id của sản phẩm nào trong giỏ hàng
                return callApi('shopping_cart_01_cart', 'POST', {product, quantity}).then((res) => {
      						dispatch(actAddToCart(res.data.product, res.data.quantity));
      						document.getElementById('api_loading').classList.remove('show');
      					});
              }

          }
      })
    }
}

export const actAddToCart = (product,quantity) => {
    return {
      type : Types.ADD_TO_CART,
      product,
      quantity
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

export const actSortProduct = (sort) => {
    return {
      type : Types.SORT_PRODUCT,
      sort
    }
}

export const actFilterTrademark = (filterTrademark) => {
      return {
        type : Types.FILTER_TRADEMARK,
        filterTrademark
      }
}

export const actClearFilter = () => {
      return {
          type : Types.CLEAR_FILTER
      }
}

export const actFilterPrice  = (filterPrice) => {
      return {
          type : Types.FILTER_PRICE,
          filterPrice
      }
}

export const actFilterRating = (filterRating) => {
	return {
		type: Types.FILTER_RATING,
		filterRating
	}
}
export const actFetchCartRequest = () => {
      return (dispatch) => {
          return callApi('shopping_cart_01_cart','GET',null).then((res) => {
              dispatch(actFetchCart(res.data));
          })
      }
}
export const actFetchCart = (cart) => {
	return {
		type: Types.FETCH_CART,
		cart
	}
}

export const actDeleteProductInCart = (item) => {
    return {
        type : Types.DELETE_PRODUCT_IN_CART,
        item
    }
}

export const actUpdateQuantity = (item, quantity) => {
    return {
      type: Types.UPDATE_PRODUCT_QUANTITY,
      item,
      quantity
    }
}

//Cập nhật số lượng sản phẩm trong kho
export const actPaymentCartRequest = (cart) => {
	return (dispatch) => {
		var duration = 1000;
		var delay = 0;
		var count = 0;
		document.getElementById('api_loading').classList.add('show');
		callApi('shopping_cart_01_products', 'GET', null).then((res) => {
			var products = res.data;
      console.log(cart);
			cart.forEach((itemC) => { //Tìm id của sản phẩm trong giỏ hàng (cart) trùng với trong kho (products)
				products.forEach((itemP) => {
					if(itemC.product.id === itemP.id) {
						itemP.inventory -= itemC.quantity;
						setTimeout(function() {
							callApi(`shopping_cart_01_products/${itemP.id}`, 'PUT', itemP).then((res) => {
								dispatch(actUpdateProduct(res.data));
								count++;
								console.log(`${res.data.name} => Số lượng cập nhật lại thành ${res.data.inventory}!`);
								if(count === cart.length) {
									count = 0;
									delay = 0;
									cart.forEach((itemC2) => {
                        console.log(res);
												dispatch(actDeleteProductInCart(itemC2.product));
												count++;
												console.log(`${itemC2.product.name} => đã xóa khỏi giỏ hàng!`);
												if(count === cart.length) {
													document.getElementById('api_loading').classList.remove('show');
													dispatch(actPaymentSuccess(true));
													console.log('THANH TOÁN THÀNH CÔNG!');
												}
										delay += duration;
									});
								}
							});
						}, delay);
						delay += duration;
					}
				});
			});
		});
	};
}


export const actPaymentSuccess = (paymentStatus) => {
	return {
		type: Types.PAYMENT_SUCCESS,
		paymentStatus
	}
}
