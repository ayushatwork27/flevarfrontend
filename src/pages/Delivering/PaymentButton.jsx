import React from 'react';
import { useSelector } from 'react-redux';
import CmnButton from "../../components/CmnButton/CmnButton";
import { verifyOrderAction } from '../../shared/store/actions/order.actions';

function PaymentButton() {
    const user = useSelector(state => state.user);
    const { cart_items, cart_id, cart_token } = useSelector(state => state.cart);

    const placeOrder = async () => {
        const payload = {
            cart_id,
            address_id: "",
            delivery_date: "",
            delivery_time_range: "",
            shipment_type: "",
            shipment_price: "",
            message: "",
            special_instruction: "",
            coupon_code: "",
            total_discount: "",
            payment_vendor: "razorpay",
            pincode: "700959"
        };
        const order_verification = await verifyOrderAction(payload);
        console.log(order_verification);

        payload['online_payment_id'] = "";
        payload['cart_items'] = [];
    }

    const payNow = () => {
        var options = {
            key: "rzp_test_hAVuEDTOKZ8ST0", // Key ID generated from the Dashboard
            amount: "10000", // Amount is in currency sub units. Hence, 50000 refers to 50000 paise.
            currency: "INR", // Default currency is INR.
            name: "Flevar", // 
            // "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            handler: function (response) {
                // console.log(response.razorpay_payment_id);
                // console.log(response.razorpay_order_id);
                // console.log(response.razorpay_signature);
            },
            prefill: user,
            notes: {
                address: user.address
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