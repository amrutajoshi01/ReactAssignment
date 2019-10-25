const initState = {
    loading:false,
    products: [],
    pageSize: 4,
    cartItems: [],
    cartCount: 0
}

const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            let addedItem = state.products.find(product => product.id === action.id)

            let existed_item = state.cartItems.find(product => action.id === product.id)
            if (existed_item) {
                existed_item.quantity += 1
                return {
                    ...state,
                    cartItems: state.cartItems,
                    cartCount: state.cartItems.length,
                }
            }
            else {
                let newItem = Object.assign({}, addedItem);
                newItem.quantity = 1;
                return {
                    ...state,
                    cartItems: [...state.cartItems, newItem],
                    cartCount: state.cartItems.length,
                }
            }
        case "GET_PRODUCTS":
            return {
                ...state,
                loading: false,
                products: state.products.concat(action.products)
            }

        case "GET_PRODUCTS_REQUEST":
        console.log("the action data is : ", action)
            return{
                ...state,
                loading: false
            }

        case 'GET_CART_COUNT':
            return {
                ...state,
                cartCount: state.cartItems.length,
            }
        default: return state;
    }
}

export default cartReducer;