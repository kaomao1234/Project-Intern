import { DataBase } from "../database";
import { generateUID } from "../utils";
class AdminViewModel {
  constructor() {
    this.db = new DataBase();
  }
  // Read the menu data
  async readMenu() {
    // Implement logic to read the menu data
    const menus = await this.db.read("menus");
    if (menus.exists()) {
      return menus.val();
    }
  }

  // Retrieve all tables from the database
  async getAllTables() {
    // Implement logic to retrieve all tables from the database
    // Return the list of tables
    const orders = await this.db.read("orders");
    if (orders.exists()) {
      return orders.val();
    }
  }
  // Add a new menu item
  async addMenu(newMenu) {
    // Implement logic to add a new menu item using the provided data
    await this.db.create(`menus/${generateUID()}`, newMenu);
  }
}

export default AdminViewModel;
