import { combineReducers } from 'redux';

import { productReducer } from './product.reducer';
import { cartReducer } from './cart.reducer';
import { appReducer } from './app.reducer';
import { addressReducer } from './address.reducer';

import { LOGIN_SUCCESS, LOGOUT } from '../types/app.types';
import { orderReducer } from './order.reducer';

const reducers = combineReducers({
    app: appReducer,
    product: productReducer,
    cart: cartReducer,
    order: orderReducer,
    address: addressReducer
});

const rootReducers = (state, action) => {
    if (action.type === LOGOUT) {
        state = undefined;
    } else if (action.type === LOGIN_SUCCESS) {
        state = {
            ...state,
            app: {
                ...state.app,
                user: action.payload.data
            }
        };
    }
    return reducers(state, action);
};

export default rootReducers;