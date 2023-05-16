class Order {
  constructor(id, tableNumber, orderDate, status) {
    this.id = id;
    this.tableNumber = tableNumber;
    this.orderDate = orderDate;
    this.status = status;
  }
  static fromMap(map) {
    return new Order(map.id, map.tableNumber, map.orderDate, map.status);
  }
  toMap() {
    return {
      id: this.id,
      tableNumber: this.tableNumber,
      orderDate: this.orderDate,
      status: this.status,
    };
  }
}

export default Order;
