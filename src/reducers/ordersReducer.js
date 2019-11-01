const initState = {
    orders: [],
    loading: false,
}

const ordersReducer = (state = initState, action) => {
    switch (action.type) {
        case "GET_ORDERS_REQUEST":
            return {
                ...state,
                loading: false
            }
        case "GET_ORDERS_LOADING":
            return {
                ...state,
                loading: true
            }
        case "GET_ORDERS_SUCCESS":
            return {
                ...state,
                loading: false,
                orders: action.orders
            }
        case "GET_ORDERS_FAILURE":
            return {
                ...state,
                loading: false,
            }
        default: return state;
    }
}

export default ordersReducer;