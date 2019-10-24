export const addToCart = (id) => {
    return {
        type: "ADD_TO_CART",
        id
    }
}

export const loadMoreItems = (pageSize) => {
    return {
        type: "LOAD_MORE_ITEMS",
        pageSize
    }
}

export const getCartCount = () => {
    return {
        type: "GET_CART_COUNT",
    }
}
