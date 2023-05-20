import { OrderItemModel, OrderModel, MenuItemModel } from "../model";
import { generateUID, OrderStatus } from "../utils";
import { DataBase } from "../database";
class HomeViewModel {
  constructor() {
    this.db = new DataBase();
    this.menu = [];
    this.options = {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    };
    // this.getMenu();
  }

  getMenu(event) {
    const result = [];
    if (this.menu.length > 0) {
      event();
    } else {
      this.db.read("menus").then((snapshot) => {
        if (snapshot.exists()) {
          Object.entries(snapshot.val()).forEach(([prop, value]) => {
            let model = {};
            model.id = prop;
            Object.entries(value).forEach(([nprop, nvalue]) => {
              model[nprop] = nvalue;
            });
            result.push(MenuItemModel.fromMap(model));
          });
        }
        event();
        this.menu = result;
      });
    }

    return this.menu;
  }

  readMenuWithId(id) {
    let all = this.readMenu();
    let result = all.find((item, index) => item.id == id);
    return result;
  }

  totalPrice() {
    var value = 0;
    this.readOrderItems().map((item, index) => {
      value +=
        this.menu.find((menuItem) => menuItem.id == item.menuItemId) *
        item.quantity;
    });
    return value;
  }

  createOrder(tableNumber) {
    this.currentTableNumber = tableNumber;
    let orderId = generateUID();

    const date = Date.now();
    let formattedDate = Intl.DateTimeFormat("en-US", this.options).format(date);
    let obj = new OrderModel(
      orderId,
      tableNumber,
      formattedDate,
      OrderStatus.PENDING
    );
    this.db.create(`orders/${tableNumber}`, {
      id: orderId,
      date: formattedDate,
      status: OrderStatus.PENDING,
    });
  }

  readOrder(table) {
    return this.db.read(`order/${table}`);
  }
  createOrderItem(menuItemId, tableNumber) {
    const model = new OrderItemModel(
      generateUID(),
      this.readOrder(tableNumber).id,
      menuItemId,
      1
    );
    console.log(model);
    let isExistModel = false;
    this.readOrderItems().map((item, index) => {
      if (item.menuItemId == menuItemId) {
        isExistModel = true;
      }
    });
    if (!isExistModel) {
      this.db.createOrderItem(model.toMap());
    }
  }
  readOrderItems() {
    let lst = [];
    this.db.read("orderItems").forEach((item, index) => {
      lst.push(OrderItemModel.fromMap(item));
    });
    return lst;
  }

  updateOrderItem(orderItemModel) {
    this.db.update(`orderItems/${orderItemModel.id}`, orderItemModel.toMap());
  }

  deleteOrderItem(id) {
    this.db.delete(`orderItems/${id}`);
  }
}
export default HomeViewModel;
