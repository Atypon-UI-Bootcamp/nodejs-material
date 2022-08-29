import { Order } from "./order";

export default class Broker {
    private _orders: Array<Order> = [];

    takeOrder(...order: Order[]) {
        this._orders.push(...order);
    }

    placeOrders() {
        this._orders.forEach(order => { order.execute(); });
        this._orders = [];
    }
}