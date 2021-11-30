import { SEND_OTP_API, VERIFY_OTP_API } from '../../constants/api-routes.constants';
import * as actionTypes from '../types/app.types';
import flevar from '../../../api/api';

export const authenticateLogin = payload => dispatch => {
    dispatch({ type: actionTypes.LOGIN, payload });
    return flevar.post(SEND_OTP_API, payload).then(response => {
        console.log(response);
    });
};

export const verifyOtpOnServer = payload => dispatch => {
    dispatch({ type: actionTypes.VERIFY_OTP, payload });
    return flevar.post(VERIFY_OTP_API, payload).then(response => {});
};