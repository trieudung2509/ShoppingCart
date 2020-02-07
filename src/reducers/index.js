import { combineReducers } from 'redux';
import products from './products';
import itemEditing from './itemEditing';
import search from './search';
import sort from './sort';
import filterTrademark from './filterTrademark';
import filterPrice from './filterPrice';
import filterRating from './filterRating';
import cart from './cart';
import paymentSuccess from './paymentSuccess';

const appReducers = combineReducers({
    products,
    itemEditing,
    search,
    sort,
    filterTrademark,
    filterPrice,
    filterRating,
    cart,
    paymentSuccess
});

export default appReducers;
