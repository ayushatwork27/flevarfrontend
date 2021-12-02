import * as actionTypes from '../types/address.types';

const initState = {
    addressList: []
};

export const addressReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_ADDRESS_LIST_SUCCESS:
            return { ...state, addressList: action.payload };
        default:
            return state;
    }
}