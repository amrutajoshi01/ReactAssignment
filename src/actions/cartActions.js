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

export const checkOutRequest = () => {
    return {
        type: "CHECKOUT_REQUEST",
    }
}

export const checkOutSuccess = () => {
    return {
        type: "CHECKOUT_SUCCESS",
    }
}

export const getCartCount = () => {
    return {
        type: "GET_CART_COUNT",
    }
}

