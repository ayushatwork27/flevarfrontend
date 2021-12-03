import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CmnButton from "../../components/CmnButton/CmnButton";
import flevar from '../../api/api';
import { PLACE_ORDER_API, VERIFY_ORDER_API } from '../../shared/constants/api-routes.constants';
import { useHistory } from 'react-router';

function PaymentButton() {
    const history = useHistory();
    const user = useSelector(state => state.app.user);
    const { cartItems, cart_id, message } = useSelector(state => state.cart);

    const placeOrder = async () => {
        const payload = {
            cart_id: Number(cart_id),
            address_id: Number(2),
            delivery_date: "2021/12/12",
            delivery_time_range: "3PM-6PM",
            shipment_type: "standard",
            shipment_price: "230",
            message,
            special_instruction: "No special Instructions",
            coupon_code: "Valentine",
            total_discount: 100,
            payment_vendor: "razorpay",
            pincode: 700001
        }
        const order_verification = await flevar.post(VERIFY_ORDER_API, payload);
        if (order_verification['data']['success']) payNow(payload);
    }

    const payNow = (payload) => {
        var options = {
            key: "rzp_test_hAVuEDTOKZ8ST0", // Key ID generated from the Dashboard
            amount: (payload.shipment_price - payload.total_discount) * 100, // Amount is in currency sub units. Hence, 50000 refers to 50000 paise.
            currency: "INR", // Default currency is INR.
            name: "Flevar", // 
            handler: function (response) {
                // setPaymentToken(response.razorpay_payment_id);
                payload['online_payment_id'] = response.razorpay_payment_id;
                payload['cart_items'] = cartItems[0]['cart_items'].map(item => ({
                    cart_item_id: item.id,
                    product_id: item.product_id,
                    price: item.total_mrp,
                    quantity: item.quantity,
                    weight: item.cake_weight,
                    message: item.message || ""
                }));
                flevar.post(PLACE_ORDER_API, payload).then(response => {
                    if(response['data']['success']) history.push('/order');
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