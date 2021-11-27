import * as actionTypes from '../types/app.types';

import { FLEVAR_USER } from '../../constants/app.constants';

const user = window && localStorage.getItem(FLEVAR_USER);
const initialState = {
    isLoading: false,
    user: JSON.parse(user) || undefined,
    system: undefined,
    image: undefined,
    error: undefined
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        case actionTypes.GET_USER_PROFILE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: action.payload
            }
        case actionTypes.GET_DASHBOARD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                dashboard: action.payload
            }
        case actionTypes.GET_SYSTEM_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                dashboard: action.payload
            }
        case actionTypes.UPLOAD_IMAGE_SUCCESS:
            return {
                ...state,
                image: action.payload.data.image
            }
        case actionTypes.GET_DASHBOARD_FAILURE:
        case actionTypes.GET_SYSTEM_DATA_FAILURE:
        case actionTypes.GET_USER_PROFILE_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        default:
            return state;
    }
}