import { DataBase } from "../database";

class ManageOrderViewModel {
  constructor() {
    this.db = new DataBase();
    this.menus = {};
    this.orders = {};
    this.orderItems = [];
    this.observers = [];
  }

  notifyObservers() {
    this.observers.map((event, index) => event());
  }

  async readMenu() {
    if (Object.keys(this.menus).length == 0) {
      const snapshot = await this.db.read("menus");
      if (snapshot.exists()) {
        this.menus = snapshot.val();
      }
    }

    return this.menus;
  }
  async updateOrder(table, val) {
    await this.db.update(`orders/${table}`, val);
    this.readOrderItems();
    this.notifyObservers();
  }

  getOrderItems() {
    const orderItemKeys = Object.keys(this.orderItems);
    orderItemKeys.sort((a, b) => {
      const orderIdA = this.orderItems[a].orderId;
      const orderIdB = this.orderItems[b].orderId;
      const dateA = new Date(
        this.orders.find((item) => item[1].id == orderIdA).date
      );
      const dateB = new Date(
        this.orders.find((item) => item[1].id == orderIdB).date
      );
      return dateA - dateB;
    });
    return orderItemKeys
      .map((key) => this.orderItems[key])
      .map((item) => {
        let order = this.orders.find((j) => j[1].id == item.orderId);
        return {
          tableNumber: order[0],
          date: order[1].date,
          status: order[1].status,
          orderId: item.orderId,
          totalPrice: this.menus[item.menuId].price * item.quantity,
        };
      });
  }

  async readOrderItems() {
    const ordersSnapshot = await this.db.read("orders");
    const orderItemsSnapshot = await this.db.read("orderItems");
    if (ordersSnapshot.exists() && orderItemsSnapshot.exists()) {
      this.orderItems = orderItemsSnapshot.val();
      this.orders = Object.entries(ordersSnapshot.val());
      this.notifyObservers();
    }
  }
}
export default ManageOrderViewModel;
