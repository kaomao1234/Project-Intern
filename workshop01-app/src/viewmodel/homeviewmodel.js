import { ThirtyFpsTwoTone } from "@mui/icons-material";
import { DataBase } from "../database";
import { MenuItemModel, OrderItemModel } from "../model";
import { generateUID, OrderStatus, ObjTool } from "../utils";
import { useSelector } from "react-redux";

class HomeViewModel {
  constructor() {
    this.db = new DataBase();
    this.menus = {};
    this.orderItems = {};
    this.options = {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    };
    this.observers = [];
    this.objTool = new ObjTool();
  }

  notifyObservers() {
    this.observers.map((event, index) => event());
  }
  getTotalPrice() {
    let sum = 0;
    this.getOrderItems().map((item, index) => {
      sum += this.menus[item.menuId].price * item.quantity;
    });
    return sum;
  }
  getOrderItems() {
    let copyOrderItems = Object.entries(this.orderItems);
    let result = [];
    copyOrderItems.map((item) =>
      result.push(
        new OrderItemModel(
          item[0],
          item[1].orderId,
          item[1].menuId,
          item[1].quantity
        )
      )
    );
    return result;
  }
  getMenus() {
    let copyMenus = Object.entries(this.menus);
    let result = [];
    copyMenus.map((item) =>
      result.push(
        new MenuItemModel(
          item[0],
          item[1].name,
          item[1].description,
          item[1].price,
          item[1].imageSrc
        )
      )
    );
    return result;
  }

  async deleteOrderItem(orderItemId) {
    await this.db.delete(`orderItems/${orderItemId}`);
  }
  async updateOrderItem(model) {
    await this.db.update(`orderItems/${model.id}`, {
      menuId: model.menuId,
      orderId: model.orderId,
      quantity: model.quantity,
    });
  }

  async readMenu() {
    if (Object.keys(this.menus).length == 0) {
      const snapshot = await this.db.read("menus");
      if (snapshot.exists()) {
        // Object.assign(this.menus, snapshot.val());
        return snapshot.val();
      }
    }
  }
  async createOrder(table) {
    let orderId = generateUID();
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

  async readOrderItem(tableNumber) {
    let result = {};
    const orderSnapshot = await this.db.read(`orders/${tableNumber}`);
    if (orderSnapshot.exists()) {
      const orderItemSnapshot = await this.db.read("orderItems");
      if (orderItemSnapshot.exists()) {
        Object.entries(orderItemSnapshot.val()).forEach(([id, map]) => {
          if (map.orderId === orderSnapshot.val().id) {
            result[id] = map;
          }
        });
      }
      if (this.objTool.deepEqual(result, this.orderItems) == false) {
        this.orderItems = result;
      }
    }
    return result;
  }
}
export default HomeViewModel;
