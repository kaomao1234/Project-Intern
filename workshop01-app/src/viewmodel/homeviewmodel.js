import { quantityModel, menuModel } from "../model";
import { generateUID } from "../utils";
import { DataBase } from "../database";
class HomeViewModel {
  constructor() {
    this.db = new DataBase();
    this.menu = this.db.menu;
  }
  increase(index) {}
  decrease(index) {}
  remove(index) {}
  totalize() {
    return value;
  }
  addTocart(muid) {}

  removeFromcart(muid) {}
}
export default HomeViewModel;