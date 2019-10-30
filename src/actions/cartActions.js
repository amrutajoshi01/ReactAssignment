export const addToCart = (product) => {
    return {
        type: "ADD_TO_CART_SUCCESS",
        product
    }
}
export const addToCartRequest = (product) => {
    return {
        type: "ADD_TO_CART_REQUEST",
        payload: { product }
    }
}
export const getCartCount = () => {
    return {
        type: "GET_CART_COUNT",
    }
}

