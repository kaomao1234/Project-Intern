import { DataBase } from "../database";
import { OrderItemModel } from "../model";
import { generateUID } from "../utils";

class MenuDetailViewModel {
  constructor() {
    this.db = new DataBase();
  }

  async createOrderItem(menuId, quantity, tableNumber) {
    const order = await this.db.read(`orders/${tableNumber}`);
    const orderItems = await this.db.read(`orderItems`);

    if (orderItems.exists()) {
      const orderItemsData = orderItems.val();
      const existingOrderItem = {};
      let exisitingOrderItemId = 0;
      Object.entries(orderItemsData).forEach(([id, object]) => {
        if (object.orderId == order.val().id && object.menuId == menuId) {
          Object.assign(existingOrderItem, object);
          exisitingOrderItemId = id;
        }
      });
      if (exisitingOrderItemId != 0) {
        existingOrderItem.quantity += quantity; // Increment the quantity by the provided quantity
        this.db.update(`orderItems/${exisitingOrderItemId}`, existingOrderItem);
        return; // Order item already exists, so no need to create a new one
      }
    }

    const newOrderItemId = generateUID();
    const newOrderItemData = {
      menuId: menuId,
      quantity: quantity,
      orderId: order.val().id,
    };

    this.db.create(`orderItems/${newOrderItemId}`, newOrderItemData);
  }
}

export default MenuDetailViewModel;
