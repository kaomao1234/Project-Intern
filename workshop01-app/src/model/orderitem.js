class OrderItem {
  constructor(id, orderId, menuItemId, quantity) {
    this.id = id;
    this.orderId = orderId;
    this.menuItemId = menuItemId;
    this.quantity = quantity;
  }
  static fromMap(map) {
    return new OrderItem(map.id, map.orderId, map.menuItemId, map.quantity);
  }
  toMap() {
    return {
      id: this.id,
      orderId: this.orderId,
      menuItemId: this.menuItemId,
      quantity: this.quantity,
    };
  }
}
export default OrderItem;
