import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import productsReducer from './productsReducer';
import ordersReducer from './ordersReducer';

const rootReducer = combineReducers({
    cartReducer,
    productsReducer,
    ordersReducer
})
export default rootReducer;