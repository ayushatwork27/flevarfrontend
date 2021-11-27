import { combineReducers } from 'redux';

import { LOGIN_SUCCESS, LOGOUT } from '../types/auth.types';

import { productReducer, productDetailReducer } from './product.reducer';
import { cartReducer } from './cart.reducer';
import { FLEVAR_USER } from '../../constants/app.constants';

const reducers = combineReducers({
    products: productReducer,
    productDetail: productDetailReducer,
    cart: cartReducer
});

export default (state, action) => {
    if (action.type === LOGOUT) {
        localStorage.removeItem(FLEVAR_USER);
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