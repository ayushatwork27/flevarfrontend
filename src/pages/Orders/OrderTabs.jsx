import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrdersListAction } from "../../shared/store/actions/order.actions";
import OrderItemDetail from "../../components/Order/OrderItemDetail";

function OrderTabs() {
    const dispatch = useDispatch();
    const { orderList } = useSelector(state => state.order);

    useEffect(() => {
        dispatch(getOrdersListAction());
    }, [dispatch]);
    return (
        orderList && orderList.map((order, index) => order['order_items'].length ? <OrderItemDetail isOrder={true} order={order} key={index} /> : null)
    );
}

export default OrderTabs;
