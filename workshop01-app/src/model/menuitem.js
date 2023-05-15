class MenuItem {
  constructor(id, name, description, price, imageSrc) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.imageSrc = imageSrc;
  }
  static fromMap(map) {
    return new MenuItem(
      map.id,
      map.name,
      map.description,
      map.price,
      map.imageSrc
    );
  }
  toMap() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      price: this.price,
      imageSrc: this.imageSrc,
    };
  }
}
export default MenuItem;
