import { put, takeEvery, all, call } from 'redux-saga/effects'

export function* addToCart(action) {
    const { product } = action.payload;
    yield put({ type: 'ADD_TO_CART_LOADING' })
    try{
        yield put({ type: 'ADD_TO_CART_SUCCESS', product })
    }
    catch(error){
        yield put({ type: 'ADD_TO_CART_FAILURE', product })
    }
    
}

export function* watchAddToCart() {
    yield takeEvery('ADD_TO_CART_REQUEST', addToCart)
}

export function* getProducts(request) {
    const { page, limit } = request.data;
    yield put({ type: 'GET_PRODUCTS_LOADING' });
    try {
        const response = yield call(fetch, 'http://localhost:3001/products?limit=' + limit + '&page=' + page);
        const responseBody = yield response.json();
        yield put({ type: 'GET_PRODUCTS_SUCCESS', products: responseBody });
    }
    catch (error) {
        console.log(error);
        yield put({ type: 'GET_PRODUCTS_FAILURE' });
    }

}

export function* checkOut() {
    yield put({ type: 'CHECKOUT_SUCCESS' });
}

export function* watchCheckOut() {
    yield takeEvery('CHECKOUT_REQUEST', checkOut)
}

export function* watchGetProducts() {

    yield takeEvery('GET_PRODUCTS_REQUEST', getProducts)
}

export function* loadMoreItems(request) {
    const { page, limit } = request.data;
    yield put({ type: 'LOAD_MORE_ITEMS_LOADING' });
    try {
        const response = yield call(fetch, 'http://localhost:3001/products?limit=' + limit + '&page=' + page);
        const responseBody = yield response.json();
        yield put({ type: 'LOAD_MORE_ITEMS_SUCCESS', products: responseBody })
    }
    catch (error) {
        yield put({ type: 'LOAD_MORE_ITEMS_FAILURE' })
    }

}

export function* watchLoadMoreItems() {

    yield takeEvery('LOAD_MORE_ITEMS_REQUEST', loadMoreItems)
}

export default function* rootSaga() {
    yield all([
        watchAddToCart(),
        watchGetProducts(),
        watchLoadMoreItems()
    ])
}