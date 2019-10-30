const initState = {
    products: [],
    loading: false
}

const productsReducer = (state = initState, action) => {
    switch (action.type) {
        case "GET_PRODUCTS_REQUEST":
            return {
                ...state,
                loading: false
            }
        case "GET_PRODUCTS_LOADING":
            return {
                ...state,
                loading: true
            }
        case "GET_PRODUCTS_SUCCESS":
            return {
                ...state,
                loading: false,
                products: action.products
            }
        case "GET_PRODUCTS_FAILURE":
            return {
                ...state,
                loading: false,
            }

        case "LOAD_MORE_ITEMS_REQUEST":
            return {
                ...state,
                loading: false
            }
        case "LOAD_MORE_ITEMS_LOADING":
            return {
                ...state,
                loading: true
            }
        case "LOAD_MORE_ITEMS_SUCCESS":
            return {
                ...state,
                loading: false,
                products: state.products.concat(action.products)
            }
        case "LOAD_MORE_ITEMS_FAILURE":
            return {
                ...state,
                loading: false,
            }
        default: return state;
    }
}

export default productsReducer;