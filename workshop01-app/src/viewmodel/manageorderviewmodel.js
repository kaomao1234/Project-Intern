import { DataBase } from "../database";

class ManageOrderViewModel {
  constructor() {
    this.db = new DataBase();
    this.menus = {};
    this.orders = {};
    this.orderItems = [];
    this.observers = [];
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

  async getOrderItems() {
    const orderItemKeys = Object.keys(this.orderItems);
    orderItemKeys.sort( async(a, b)=>{
      const orderIdA = this.orderItems[a].orderId;
      const orderIdB = this.orderItems[b].orderId;
      const dateA = new Date(this.orders[orderIdA].date);
      const dateB = new Date(this.orders[orderIdB].date);
      return dateA - dateB;
    });
    return orderItemKeys.map((key) => this.orderItems[key]);
  }

  async readOrderItems() {
    const ordersSnapshot = await this.db.read("orders");
    const orderItemsSnapshot = await this.db.read("orderItems");
    if (ordersSnapshot.exists() && orderItemsSnapshot.exists()) {
      this.orderItems = orderItemsSnapshot.val();
      this.orders = ordersSnapshot.val();
      console.log(this.getOrderItems());
    }
  }
}
export default ManageOrderViewModel;
