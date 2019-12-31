import { combineReducers } from 'redux';
import itemEditing from './itemEditing';
import products from './products';

const appReducers = combineReducers({
    itemEditing,
    products
});

export default appReducers;
