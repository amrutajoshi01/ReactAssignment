import { put, takeEvery, all, call, delay } from 'redux-saga/effects'

export function* addToCart(action) {
    const { id } = action.payload;
    yield put({ type: 'ADD_TO_CART', id })
}

export function* watchAddToCart() {
    yield takeEvery('ADD_TO_CART_REQUEST', addToCart)
}

export function* getProducts(request) {
    const {page, limit} = request.data;
    const response = yield call(fetch, 'http://localhost:3001/products?limit='+limit+'&page='+page);
    const responseBody = yield response.json();
    yield put({ type: 'GET_PRODUCTS', products: responseBody })
}

export function* watchGetProducts() {
    
    yield takeEvery('GET_PRODUCTS_REQUEST', getProducts)
}

export default function* rootSaga() {
    yield all([
        watchAddToCart(),
        watchGetProducts()
    ])
}