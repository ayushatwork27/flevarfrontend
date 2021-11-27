import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { getProductReducer, getProductDegtailReducer } from './reducers/product.reducer';
import { cartReducer } from './reducers/cart.reducer';

const reducer = combineReducers({
    products: getProductReducer,
    productDetail: getProductDegtailReducer,
    cart: cartReducer
})


const middleware = [thunk];

const store = createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;