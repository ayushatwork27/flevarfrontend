import * as actionTypes from '../types/app.types';
import { PINCODE } from '../../constants/app.constants';

const pincode = localStorage.getItem(PINCODE);

const initialState = {
    isLoading: false,
    user: {
        id: '',
        name: '',
        email: '',
        mobile: ''
    },
    addressList: [],
    locations: [],
    pincode: pincode || null,
    address: undefined,
    image: undefined,
    error: undefined
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOADING:
            return { ...state, isLoading: action.payload };
        case actionTypes.UPLOAD_IMAGE_SUCCESS:
            return { ...state, image: action.payload.data.image };
        case actionTypes.USER_PROFILE_SUCCESS:
            return { ...state, user: action.payload };
        case actionTypes.GET_ADDRESS_LIST_SUCCESS:
            return { ...state, addressList: action.payload };
        case actionTypes.GET_ADDRESS_SUCCESS:
            return { ...state, address: action.payload };
        case actionTypes.USER_PROFILE_RESET:
            return { ...state, user: action.payload };
        case actionTypes.GET_LOCATION_SUCCESS:
            return { ...state, locations: action.payload };
        case actionTypes.ADD_PINCODE:
            return { ...state, pincode: action.payload };
        default: return state;
    }
}