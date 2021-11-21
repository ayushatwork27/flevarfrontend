import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { getProductReducer, getProductDegtailReducer } from './reducers/productReducer';
import { getCartReducer } from './reducers/cartReducer';

const reducer = combineReducers({
    getProducts: getProductReducer,
    getProductDetail: getProductDegtailReducer,
    getCart: getCartReducer
})


const middleware = [thunk];

const store = createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;