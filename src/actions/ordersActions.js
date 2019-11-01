export const getOrdersRequest = () => {
    return {
        type: "GET_ORDERS_REQUEST",
    }
}
export const getOrdersLoading = () => {
    return {
        type: "GET_ORDERS_LOADING",
    }
}
export const getOrdersSuccess = (orders) => {
    return {
        type: "GET_ORDERS_SUCCESS",
        payload: { orders }
    }
}
export const getOrdersFailure = () => {
    return {
        type: "GET_ORDERS_FAILURE",
    }
}