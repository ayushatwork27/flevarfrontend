import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { getProductReducer, getProductDegtailReducer } from './reducers/product.reducer';
import { cartReducer } from './reducers/cart.reducer';
import { getAddressReducer } from './reducers/addressReducer';
import { getUserReducer } from './reducers/userReducer';
import { orderReducer } from './reducers/order.reducer';

const reducer = combineReducers({
    products: getProductReducer,
    productDetail: getProductDegtailReducer,
    cart: cartReducer,
    order: orderReducer,
    getAddress: getAddressReducer,
    getUser: getUserReducer
})


const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;