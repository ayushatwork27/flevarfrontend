import * as actionTypes from '../constants/addressConstant';

const initState = {
    addresses: [],
    address: {},
    loading: true
};

export const getAddressReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_ADDRESSES_SUCCESS:
            return { ...state, addresses: action.payload, loading: false };
        case actionTypes.GET_ADDRESS_SUCCESS:
            return { ...state, address: action.payload, loading: false };
        default:
            return state;
    }
}