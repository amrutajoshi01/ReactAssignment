import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import productsReducer from './productReducer';

const rootReducer = combineReducers({
    cartReducer,
    productsReducer
})
export default rootReducer;