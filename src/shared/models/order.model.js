export class OrderModel {
    order_items = [];
    constructor({ address_id, cart_id, coupon_code, created_at, customer_id, current_status, delivery_date, delivery_time_range,
        final_price, message, order_id, order_items, order_number, reason, shipment_price, special_instruction, shipment_type,
        tax_amount, total_discount, total_product_price, vendor_id, workflow_state_id
    }) {
        this.address_id = address_id;
        this.cart_id = cart_id;
        this.coupon_code = coupon_code;
        this.created_at = created_at;
        this.current_status = current_status;
        this.customer_id = customer_id;
        this.delivery_date = delivery_date;
        this.delivery_time_range = delivery_time_range;
        this.final_price = final_price;
        this.message = message;
        this.order_id = order_id;
        this.order_items = order_items;
        this.order_number = order_number;
        this.reason = reason;
        this.shipment_price = shipment_price;
        this.shipment_type = shipment_type;
        this.special_instruction = special_instruction;
        this.tax_amount = tax_amount;
        this.total_discount = total_discount;
        this.total_product_price = total_product_price;
        this.vendor_id = vendor_id
        this.workflow_state_id = workflow_state_id
    }
}