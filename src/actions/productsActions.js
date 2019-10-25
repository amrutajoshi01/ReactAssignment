export const getProducts = (products) =>{
    return{
        type:"GET_PRODUCTS",
        payload: { products }
    }
}
export const getProductsRequest = (data) =>{
    return{
        type:"GET_PRODUCTS_REQUEST",
        data
    }
}
export const loadMoreItems = (pageSize) => {
    return {
        type: "LOAD_MORE_ITEMS",
        pageSize
    }
}
export const loadMoreItemsRequest = (pageSize) => {
    return {
        type: "LOAD_MORE_ITEMS",
        pageSize
    }
}