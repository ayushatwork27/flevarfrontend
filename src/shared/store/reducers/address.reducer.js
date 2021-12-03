import * as actionTypes from '../types/address.types';

const initState = {
    addressList: [],
    address: {}
};

export const addressReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_ADDRESS_LIST_SUCCESS:
            return { ...state, addressList: action.payload };
        case actionTypes.GET_ADDRESS_SUCCESS:
            return { ...state, address: action.payload };
        default:
            return state;
    }
}