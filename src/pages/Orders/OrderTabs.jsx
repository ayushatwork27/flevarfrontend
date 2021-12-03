import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrdersListAction } from "../../shared/store/actions/order.actions";
import OrderItemDetail from "../../components/Order/OrderItemDetail";

function OrderTabs() {
  const dispatch = useDispatch();
  const { orderList } = useSelector(state => state.order);

  useEffect(() => {
    dispatch(getOrdersListAction());
  }, []);
  return (
    orderList && orderList.map(order => <OrderItemDetail order={order} />)
  );
}

export default OrderTabs;
