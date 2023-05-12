import { quantityModel } from "../model";
class HomeViewModel {
  constructor() {
    Object.defineProperty(this, "mockdata", {
      value: [
        quantityModel("Hamburger", 8.99, 2),
        quantityModel("Cheeseburger", 9.99, 3),
        quantityModel("Chicken Sandwich", 7.99, 1),
        quantityModel("French Fries", 3.99, 2),
        quantityModel("Onion Rings", 4.99, 1),
        quantityModel("Soda", 1.99, 4),
        quantityModel("Milkshake", 4.99, 2),
        quantityModel("Salad", 6.99, 2),
        quantityModel("Pizza", 12.99, 1),
        quantityModel("Pasta", 11.99, 2),
        quantityModel("Garlic Bread", 3.99, 1),
        quantityModel("Brownie Sundae", 5.99, 1),
        quantityModel("Ice Cream", 2.99, 3),
        quantityModel("Hot Dog", 6.99, 1),
        quantityModel("Chicken Tenders", 8.99, 2),
        quantityModel("Fish and Chips", 10.99, 1),
        quantityModel("Nachos", 7.99, 2),
        quantityModel("Quesadilla", 9.99, 1),
        quantityModel("Burrito", 8.99, 2),
        quantityModel("Taco Salad", 6.99, 1),
      ],
      writable: true,
    });
  }
  increase(index) {
    const updatedMockData = [...this.mockdata]; // Create a copy of the array
    updatedMockData[index] = {
      ...this.mockdata[index], // Create a copy of the object
      numberMenu: this.mockdata[index].numberMenu + 1, // Update the copy of the object
    };
    this.mockdata = updatedMockData;
  }
  decrease(index) {
    const updatedMockData = [...this.mockdata]; // Create a copy of the array
    updatedMockData[index] = {
      ...this.mockdata[index], // Create a copy of the object
      numberMenu: Math.max(0, this.mockdata[index].numberMenu - 1), // Update the copy of the object
    };
    this.mockdata = updatedMockData;
  }
  remove(index) {
    const updatedMockData = [...this.mockdata]; // Create a copy of the array
    updatedMockData.splice(index, 1);
    this.mockdata = updatedMockData;
  }
  totalize() {
    let value = 0;
    for (let index = 0; index < this.mockdata.length; index++) {
      let current = this.mockdata[index];
      value += current.price * current.numberMenu;
    }
    return value;
  }
}
export default HomeViewModel;
