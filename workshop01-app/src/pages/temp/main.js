
function value(){
    this.db = {};
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
        event();
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
          event();
        });
      }
    };
    this.createOrder = () => {
      let orderId = generateUID();

      const date = Date.now();
      let formattedDate = Intl.DateTimeFormat("en-US", state.options).format(
        date
      );
      this.db.create(`orders/${action.payload}`, {
        id: orderId,
        date: formattedDate,
        status: OrderStatus.PENDING,
      });
    };
  }


const instance = new value();
console.log(instance.menu);
