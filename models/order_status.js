const OrdersStatus = Object.freeze({
    NEW:'NEW',
    ACCEPTED:'ACCEPTED',
    REJECTED:'REJECTED',
    CANCELED:'CANCELED',
    REFUNDED:'REFUNDED',
    PAID:'PAID',
    BEING_PREPARED:'BEING PREPARED',
    READY_TO_SHIP:'READY TO SHIP',
    DELIVERED:'DELIVERED',
})

module.exports = OrdersStatus;