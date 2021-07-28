import { put, takeEvery, all, call } from 'redux-saga/effects'

export function* addToCart(action) {
    const { product } = action.payload;
    yield put({ type: 'ADD_TO_CART_LOADING' })
    try {
        yield put({ type: 'ADD_TO_CART_SUCCESS', product })
    }
    catch (error) {
        yield put({ type: 'ADD_TO_CART_FAILURE', product })
    }

}

export function* watchAddToCart() {
    yield takeEvery('ADD_TO_CART_REQUEST', addToCart)
}

export function* getProducts(request) {
    const { page, limit, searchText } = request.data;
    yield put({ type: 'GET_PRODUCTS_LOADING' });
    try {
        const response = yield call(fetch, 'http://localhost:3001/products?limit=' + limit + '&page=' + page + '&searchText=' + searchText);
        const responseBody = yield response.json();
        yield put({ type: 'GET_PRODUCTS_SUCCESS', products: responseBody });
    }
    catch (error) {
        yield put({ type: 'GET_PRODUCTS_FAILURE' });
    }

}

export function* watchGetProducts() {

    yield takeEvery('GET_PRODUCTS_REQUEST', getProducts)
}

export function* checkOut(request) {

    const { order } = request.data;
    try {
        yield put({ type: 'CHECKOUT_LOADING' });

        const response = yield call(fetch, 'http://localhost:3001/checkout', {
            method: 'POST',
            body: JSON.stringify(order),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'text/html'
            }
        });
        yield put({ type: 'CHECKOUT_SUCCESS' });
    }
    catch (error) {
        console.log(error);
    }
}

export function* watchCheckOut() {
    yield takeEvery('CHECKOUT_REQUEST', checkOut)
}


export function* loadMoreItems(request) {
    const { page, limit, searchText } = request.data;
    yield put({ type: 'LOAD_MORE_ITEMS_LOADING' });
    try {
        const response = yield call(fetch, 'http://localhost:3001/products?limit=' + limit + '&page=' + page + '&searchText=' + searchText);
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

export function* getOrders() {
    yield put({ type: 'GET_ORDERS_LOADING' });
    try {
        const response = yield call(fetch, 'http://localhost:3001/orders');
        const responseBody = yield response.json();
        yield put({ type: 'GET_ORDERS_SUCCESS', orders: responseBody });
    }
    catch (error) {
        yield put({ type: 'GET_ORDERS_FAILURE' });
    }

}

export function* watchGetOrders() {

    yield takeEvery('GET_ORDERS_REQUEST', getOrders)
}

export default function* rootSaga() {
    yield all([
        watchAddToCart(),
        watchGetProducts(),
        watchLoadMoreItems(),
        watchCheckOut(),
        watchGetOrders()
    ])
}