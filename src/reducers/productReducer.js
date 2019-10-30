const initState = {
    products: [],
    pageSize: 0,
    loading: false
}

const productsReducer = (state = initState, action) => {
    switch (action.type) {
        case "GET_PRODUCTS_REQUEST":
            
            return {
                ...state,
                loading: false
            }
        case "GET_PRODUCTS":
            return {
                ...state,
                products: action.products
            }
        case 'LOAD_MORE_ITEMS':
            return {
                ...state,
                pageSize: state.pageSize + action.pageSize,
            }

        default: return state;
    }
}

export default productsReducer;