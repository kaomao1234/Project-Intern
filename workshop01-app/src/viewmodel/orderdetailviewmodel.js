import { DataBase } from "@/database";
class OrderDetailViewModel {
  constructor() {
    this.db = new DataBase();
    this.observers = [];
  }
  notify() {
    this.observers.forEach((event) => event());
  }
  async getOrderItemFromTable(table) {
    const orderItems = await this.db.read(`orderItems`);
    const order = await this.db.read(`orders/${table}`);
    const menus = await this.readMenu();
    if (order.exists() && orderItems.exists()) {
      const tableId = order.val().id;
      let resultOrderItem = [];
      Object.entries(orderItems.val()).forEach((item, index) => {
        if (item[1].orderId == tableId) {
          resultOrderItem.push({
            id: item[0],
            quantity: item[1].quantity,
            menu: menus[item[1].menuId].name,
            price: menus[item[1].menuId].price,
            totalPrice: parseFloat(
              menus[item[1].menuId].price * item[1].quantity
            ).toFixed(2),
            status: order.val().status,
          });
        }
      });
      return resultOrderItem;
    }
  }

  async getOrderStatus(table) {
    const order = await this.db.read(`orders/${table}`);
    if (order.exists()) {
      return order.val().status;
    }
  }

  async readMenu() {
    const result = await this.db.read("menus");
    if (result.exists()) {
      return result.val();
    }
  }
 async updateStatus(table, value) {
    return await this.db.update(`orders/${table}`, value);
  }
}
export default OrderDetailViewModel;
