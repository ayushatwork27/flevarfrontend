import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CmnButton from "../../components/CmnButton/CmnButton";
import flevar from '../../api/api';
import { PLACE_ORDER_API, VERIFY_ORDER_API } from '../../shared/constants/api-routes.constants';
import { useHistory } from 'react-router';
import { ADDRESS_ID, CAKE_MSG, CAKE_WEIGHT, CART_ID, CART_TOKEN, COUPON_CODE, DELIVERY_DATE, DELIVERY_TIME_RANGE, SHIPMENT_PRICE, SHIPMENT_TYPE } from '../../shared/constants/app.constants';
import { clearCartAction } from '../../shared/store/actions/cart.actions';

function PaymentButton() {
    const history = useHistory();
    const user = useSelector(state => state.app.user);
    const dispatch = useDispatch();
    const { cartItems, cart_id, message, address_id, shipment_type, shipment_price, delivery_date, delivery_time_range, coupon_code } = useSelector(state => state.cart);

    const placeOrder = async () => {
        const payload = {
            cart_id: Number(cart_id),
            address_id: Number(address_id),
            delivery_date,
            delivery_time_range,
            shipment_type,
            shipment_price,
            message,
            special_instruction: "No special Instructions",
            coupon_code,
            total_discount: 50,
            payment_vendor: "razorpay",
            pincode: 700001
        }
        const order_verification = await flevar.post(VERIFY_ORDER_API, payload);
        if (order_verification['data']['success']) payNow(payload);
    }

    const payNow = (payload) => {
        var options = {
            key: "rzp_test_hAVuEDTOKZ8ST0", // Key ID generated from the Dashboard
            amount: (cartItems[0]['total_amout'] + Number(shipment_price) - payload.total_discount) * 100, // Amount is in currency sub units. Hence, 50000 refers to 50000 paise.
            currency: "INR", // Default currency is INR.
            name: "Flevar", // 
            handler: function (response) {
                // setPaymentToken(response.razorpay_payment_id);
                payload['online_payment_id'] = response.razorpay_payment_id;
                payload['cart_items'] = cartItems[0]['cart_items'].map(({ id, product_id, total_mrp, quantity, cake_weight, message }) => ({
                    cart_item_id: id,
                    product_id,
                    quantity,
                    price: total_mrp,
                    weight: cake_weight,
                    message: message || ""
                }));
                flevar.post(PLACE_ORDER_API, payload).then(response => {
                    [CART_TOKEN, CART_ID, CAKE_MSG, CAKE_WEIGHT, COUPON_CODE, ADDRESS_ID, DELIVERY_DATE, DELIVERY_TIME_RANGE, SHIPMENT_TYPE, SHIPMENT_PRICE].forEach(item => localStorage.removeItem(item));
                    dispatch(clearCartAction());
                    if (response['data']['success']) history.push('/orders');
                })
                // console.log(response.razorpay_order_id);
                // console.log(response.razorpay_signature);
            },
            prefill: {
                name: user.name,
                email: user.email,
                contact: user.mobile
            },
            notes: {
                // address: user.address
            }
        };
        var rzp1 = new window.Razorpay(options);
        rzp1.on('payment.failed', response => { });
        rzp1.open();
    }

    return (
        <CmnButton
            btntitle="pay now"
            variant="contained"
            className="theme-contained-btn"
            onClick={() => placeOrder()}
        />
    );
}

export default PaymentButton;