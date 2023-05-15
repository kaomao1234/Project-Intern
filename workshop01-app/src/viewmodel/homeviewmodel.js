import { quantityModel, menuModel } from "../model";
import { generateUID } from "../utils";
import { DataBase } from "../database"
class HomeViewModel {
  constructor() {
    this.db = DataBase();
    const updateMenu = [...this.db.menu];

    this.menuCart = [];
  }
  increase(index) {
    const updatedmenuCart = [...this.menuCart]; // Create a copy of the array
    updatedmenuCart[index] = {
      ...this.menuCart[index], // Create a copy of the object
      numberMenu: this.menuCart[index].numberMenu + 1, // Update the copy of the object
    };
    this.menuCart = updatedmenuCart;
  }
  decrease(index) {
    const updatedmenuCart = [...this.menuCart]; // Create a copy of the array
    updatedmenuCart[index] = {
      ...this.menuCart[index], // Create a copy of the object
      numberMenu: Math.max(0, this.menuCart[index].numberMenu - 1), // Update the copy of the object
    };
    this.menuCart = updatedmenuCart;
  }
  remove(index) {
    const updatedmenuCart = [...this.menuCart]; // Create a copy of the array
    updatedmenuCart.splice(index, 1);
    this.menuCart = updatedmenuCart;
  }
  totalize() {
    let value = 0;
    for (let index = 0; index < this.menuCart.length; index++) {
      let current = this.menuCart[index];
      value += current.price * current.numberMenu;
    }
    return value;
  }
  addTocart(muid) {
    const menuFromMuid = this.menu.find((item) => item.muid == muid);
    let copy = [...this.menuCart];
    copy.push(
      quantityModel(muid, menuFromMuid.menuName, menuFromMuid.price, 1)
    );
    this.menuCart = copy;
  }

  removeFromcart(muid) {
    const canceled = this.menuCart.findIndex((item) => item.muid == muid);
    let copy = [...this.menuCart];
    copy.splice(canceled, 1);
    this.menuCart = copy;
  }
}
export default HomeViewModel;
