import { combineReducers } from 'redux';


import { productReducer } from './product.reducer';
import { cartReducer } from './cart.reducer';
import { FLEVAR_USER } from '../../constants/app.constants';
import { LOGIN_SUCCESS, LOGOUT } from '../types/app.types';
import { orderReducer } from './order.reducer';

const reducers = combineReducers({
    product: productReducer,
    cart: cartReducer,
    order: orderReducer
});

const rootReducers = (state, action) => {
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

export default rootReducers;