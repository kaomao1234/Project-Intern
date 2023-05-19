import { OrderItemModel, OrderModel, MenuItemModel } from "../model";
import { generateUID, OrderStatus } from "../utils";
import { DataBase } from "../database";
class HomeViewModel {
  constructor() {
    this.db = new DataBase();
    this.menu = this.db.readAllMenu();
    this.options = {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    };
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

  getMenuItem(id) {
    return this.menu.find((menuItem) => menuItem.id == id);
  }

  createOrder(tableNumber) {
    this.currentTableNumber = tableNumber;
    let orderId = generateUID();

    const date = Date.now();
    let formattedDate = Intl.DateTimeFormat("en-US", this.options).format(date);
    this.db.createOrder(
      new OrderModel(
        orderId,
        tableNumber,
        formattedDate,
        OrderStatus.PENDING
      ).toMap()
    );
  }

  readOrder(table) {
    return this.db.readOrder().find((item, index) => item.tableNumber == table);
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
    this.db.readOrderItems().forEach((item, index) => {
      lst.push(OrderItemModel.fromMap(item));
    });
    return lst;
  }

  updateOrderItem(orderItemModel) {
    this.db.updateOrderItem(orderItemModel.toMap());
  }

  deleteOrderItem(id) {
    this.db.deleteOrderItem(id);
  }
}
export default HomeViewModel;
