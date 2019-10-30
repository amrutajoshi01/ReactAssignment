export const getProductsRequest = (data) => {
    return {
        type: "GET_PRODUCTS_REQUEST",
        data
    }
}
export const getProductsLoading = () => {
    return {
        type: "GET_PRODUCTS_LOADING",
    }
}
export const getProductsSuccess = (products) => {
    return {
        type: "GET_PRODUCTS_SUCCESS",
        payload: { products }
    }
}
export const getProductsFailure = (products) => {
    return {
        type: "GET_PRODUCTS_FAILURE",
    }
}

export const loadMoreItemsRequest = (data) => {
    return {
        type: "LOAD_MORE_ITEMS_REQUEST",
        data
    }
}
export const loadMoreItemsLoading = () => {
    return {
        type: "LOAD_MORE_ITEMS_LOADING",
    }
}
export const loadMoreItemsSuccess = (products) => {
    return {
        type: "LOAD_MORE_ITEMS_SUCCESS",
        payload: { products }
    }
}
export const loadMoreItemsFailure = () => {
    return {
        type: "LOAD_MORE_ITEMS_FAILURE",
    }
}