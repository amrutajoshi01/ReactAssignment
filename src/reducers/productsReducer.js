const initState = {
    products: [],
    loading: false,
    moreProducts: true,
    searchText: '',
    page: 0,
    limit: 0
}

const productsReducer = (state = initState, action) => {
    switch (action.type) {
        case "GET_PRODUCTS_REQUEST":
            return {
                ...state,
                loading: false,
                moreProducts: true,
                page: action.data.page,
                limit: action.data.limit,
                searchText: action.data.searchText
            }
        case "GET_PRODUCTS_LOADING":
            return {
                ...state,
                loading: true
            }
        case "GET_PRODUCTS_SUCCESS":
            return {
                ...state,
                loading: false,
                products: action.products
            }
        case "GET_PRODUCTS_FAILURE":
            return {
                ...state,
                loading: false,
            }

        case "LOAD_MORE_ITEMS_REQUEST":
            const flag = state.searchText==='' && action.data.searchText !==''
            return {
                ...state,
                loading: false,
                page: flag ? 0 : action.data.page,
                limit: action.data.limit,
                searchText: action.data.searchText
            }
        case "LOAD_MORE_ITEMS_LOADING":
            return {
                ...state,
                loading: true
            }
        case "LOAD_MORE_ITEMS_SUCCESS":
            let moreProducts = true;
            if (action.products.length === 0)
                moreProducts = false;

            return {
                ...state,
                loading: false,
                products: state.products.concat(action.products),
                moreProducts: moreProducts
            }
        case "LOAD_MORE_ITEMS_FAILURE":
            return {
                ...state,
                loading: false,
            }
        default: return state;
    }
}

export default productsReducer;