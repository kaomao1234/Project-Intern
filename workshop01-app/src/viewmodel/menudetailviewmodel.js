import { DataBase } from "../database";
import { OrderItemModel } from "../model";
import { generateUID } from "../utils";

class MenuDetailViewModel {
  constructor() {
    this.db = new DataBase();
  }
  createOrderItem(menuId, quantity, tableNumber) {
    console.log(tableNumber);
    this.db.read(`orders/${tableNumber}`).then((snapshot) => {
      if (snapshot.exists()) {
        const value = snapshot.val();
        this.db.create(`orderItems/${generateUID()}`, {
          menuId: menuId,
          quantity: quantity,
          orderId: value.id,
        });
      }
    });
  }
}

export default MenuDetailViewModel;
