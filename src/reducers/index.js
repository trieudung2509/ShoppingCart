import { combineReducers } from 'redux';
import products from './products';
import search from './search';

const appReducers = combineReducers({
    products,
    search
});

export default appReducers;
