
import { Database } from "../database";
import { generateUid, deepEqual, OrderStatus } from "../utils";
import { FoodMenuItem, Order, OrderItem } from "../interface";
class HomeViewModel {
    db;
    menus: { [key: string]: FoodMenuItem };
    options: Intl.DateTimeFormatOptions;
    orderItems: { [key: string]: OrderItem };
    constructor() {
        this.db = new Database();
        this.menus = {}
        this.orderItems = {}

        this.options = {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric",
        };
    }

    getTotalPrice() {
        let sum: number = 0;
        Object.entries(this.orderItems).forEach((item, index) => {
            sum += (parseInt(this.menus[item[1].menuId].price) * parseInt(item[1].quantity))
        })
        return sum;
    }

    async deleteOrderItem(orderItemId: string) {
        await this.db.delete(`orderItems/${orderItemId}`);
    }
    async updateOrderItem(orderItem: OrderItem) {
        const entiredOrderItem = Object.entries(orderItem);
        await this.db.update(`orderItems/${entiredOrderItem[0]}`, entiredOrderItem[1]);
    }

    async readMenu(): Promise<{ [key: string]: FoodMenuItem }> {
        let result: { [key: string]: FoodMenuItem } = {};
        if (Object.keys(this.menus).length == 0) {
            const snapshot = await this.db.read("menus");
            if (snapshot.exists()) {
                result = snapshot.val();
            }
        }
        return result;
    }
    async createOrder(table: string) {
        let orderId: string = generateUid();
        const date = Date.now();
        let formattedDate = Intl.DateTimeFormat("en-US", this.options).format(date);
        const order = await this.db.read(`orders/${table}`);
        console.log(order.exists());
        if (order.exists() == false) {
            if (order.val() == null) {
                this.db.create(`orders/${table}`, {
                    id: orderId,
                    date: formattedDate,
                    status: OrderStatus.PENDING,
                });
            }
        }
    }

    async readOrderItem(tableNumber: string): Promise<{ [key: string]: OrderItem }> {
        let result: { [key: string]: OrderItem } = {};
        const orderSnapshot = await this.db.read(`orders/${tableNumber}`);
        if (orderSnapshot.exists()) {
            const orderItemSnapshot = await this.db.read("orderItems");
            const orderVal: Order = orderSnapshot.val();

            if (orderItemSnapshot.exists()) {
                const orderItemVal: { [key: string]: OrderItem } = orderItemSnapshot.val();
                Object.entries(orderItemVal).forEach((value, index) => {
                    if (value[1].orderId == orderVal.id) {
                        result[value[0]] = value[1];
                    }

                })
            }
            if (deepEqual(result, this.orderItems) == false) {
                this.orderItems = result;
            }
        }
        console.log(result);
        return this.orderItems;
    }
}
export default HomeViewModel;
