import { ADD_TO_CART} from './actionTypes/cart-actions';

export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
        id
    }
}