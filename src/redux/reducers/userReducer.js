import * as actionTypes from '../constants/userConstant';

const initState = {
    user: {},
    mobile: {},
    loading: true
};

export const getUserReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_USER_SUCCESS:
            return { ...state, user: action.payload, loading: false };
        case actionTypes.GET_USER__MOBILE_SUCCESS:
            return { ...state, mobile: action.payload, loading: false };
        default:
            return state;
    }
}