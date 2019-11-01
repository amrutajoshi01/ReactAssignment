export const addToCartRequest = (product) => {
    return {
        type: "ADD_TO_CART_REQUEST",
        payload: { product }
    }
}
export const addToCart = (product) => {
    return {
        type: "ADD_TO_CART_SUCCESS",
        product
    }
}

export const checkOutRequest = (data) => {
    return {
        type: "CHECKOUT_REQUEST",
        data
    }
}
export const checkOutPending = () => {
    return {
        type: "CHECKOUT_LOADING",
    }
}
export const checkOutSuccess = () => {
    return {
        type: "CHECKOUT_SUCCESS"
    }
}
export const checkOutFailure = () => {
    return {
        type: "CHECKOUT_FAILURE"
    }
}

export const getCartCount = () => {
    return {
        type: "GET_CART_COUNT",
    }
}

