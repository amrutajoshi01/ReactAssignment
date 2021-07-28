const initState = {
    loading: false,
    cartItems: [],
    cartCount: 0,
}

const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD_TO_CART_REQUEST":
            return {
                ...state,
                loading: false
            }
        case "ADD_TO_CART_LOADING":
            return {
                ...state,
                loading: true
            }
        case 'ADD_TO_CART_SUCCESS':
            let existed_item = state.cartItems.find(product => action.product.id === product.id)
            if (existed_item) {
                existed_item.quantity += 1
                return {
                    ...state,
                    cartItems: state.cartItems,
                    cartCount: state.cartItems.length,
                    loading: false
                }
            }
            else {
                let newItem = Object.assign({}, action.product);
                newItem.quantity = 1;
                return {
                    ...state,
                    cartItems: [...state.cartItems, newItem],
                    cartCount: state.cartItems.length,
                    loading: false
                }
            }
        case "ADD_TO_CART_FAILURE":
            return {
                ...state,
                loading: false,
            }
        case "CHECKOUT_REQUEST":
            return {
                ...state,
                loading: false,
            }
        case "CHECKOUT_LOADING":

            return {
                ...state,
                loading: true,
            }
        case "CHECKOUT_SUCCESS":
            return {
                ...state,
                cartItems: [],
                cartCount: 0,
                loading: false,
            }
        case "CHECKOUT_FAILURE":
            return {
                ...state,
                loading: false,
            }
        case 'GET_CART_COUNT':
            return {
                ...state,
                cartCount: state.cartItems.length,

            }
        case 'CHANGE_QUANTITY':
            const type = action.payload.type;
            const name = action.payload.name;
            const itemIndex = state.cartItems.findIndex(item => item.name === name);
            switch(type) {
                case '+': state.cartItems[itemIndex].quantity++;
                        break;
                case '-': state.cartItems[itemIndex].quantity--;
                        break;
            }
            if(state.cartItems[itemIndex].quantity < 1) {
                state.cartItems.splice(itemIndex , 1)
            }
            return {
                ...state,
                cartCount: state.cartItems.length
            }
        default: return state;
    }
}

export default cartReducer;