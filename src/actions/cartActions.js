export const addToCart = (id) => {
    return {
        type: "ADD_TO_CART",
        id
    }
}
export const addToCartRequest = (id) => {
    return {
        type: "ADD_TO_CART_REQUEST",
        payload: { id }
    }
}
export const getCartCount = () => {
    return {
        type: "GET_CART_COUNT",
    }
}

