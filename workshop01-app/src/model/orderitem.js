class OrderItem {
  constructor(id, orderId, menuId, quantity) {
    this.id = id;
    this.orderId = orderId;
    this.menuId = menuId;
    this.quantity = quantity;
  }
  static fromMap(map) {
    return new OrderItem(map.id, map.orderId, map.menuId, map.quantity);
  }
  toMap() {
    return {
      id: this.id,
      orderId: this.orderId,
      menuId: this.menuId,
      quantity: this.quantity,
    };
  }
}
export default OrderItem;
