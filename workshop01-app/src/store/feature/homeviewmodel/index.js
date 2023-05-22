import { DataBase } from "../../../database";
import { createSlice } from "@reduxjs/toolkit";
import { generateUID, OrderStatus } from "../../../utils";
import { MenuItemModel } from "../../../model";
function ViewModel() {
  this.db = new DataBase();
  this.menu = [];
  this.options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  this.readMenu = (event) => {
    const result = [];
    if (this.menu.length > 0) {
      event(this.menu);
    } else {
      this.db.read("menus").then((snapshot) => {
        if (snapshot.exists()) {
          Object.entries(snapshot.val()).forEach(([prop, value]) => {
            let model = {};
            model.id = prop;
            Object.entries(value).forEach(([nprop, nvalue]) => {
              model[nprop] = nvalue;
            });
            result.push(MenuItemModel.fromMap(model));
          });
        }
        this.menu = result;
        event(this.menu);
      });
    }
  };
  this.createOrder = (table) => {
    let orderId = generateUID();

    const date = Date.now();
    let formattedDate = Intl.DateTimeFormat("en-US", this.options).format(date);
    this.db.create(`orders/${table}`, {
      id: orderId,
      date: formattedDate,
      status: OrderStatus.PENDING,
    });
  };
}
let viewmodel = new ViewModel();
export const homeviewmodelSlice = createSlice({
  name: "homeviewmodel",
  initialState: {
    value: viewmodel,
  },
  reducers: {},
});

export const {} = homeviewmodelSlice.actions;

export default homeviewmodelSlice.reducer;
