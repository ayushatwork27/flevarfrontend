import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { getProductReducer } from './reducers/productReducer';
import { getCartReducer } from './reducers/cartReducer';
import { getAddressReducer } from './reducers/addressReducer';
import { getUserReducer } from './reducers/userReducer';

const reducer = combineReducers({
    getProducts: getProductReducer,
    getCart: getCartReducer,
    getAddress: getAddressReducer,
    getUser: getUserReducer
})


const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;