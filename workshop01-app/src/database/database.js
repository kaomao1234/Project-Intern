import { generateUID } from "../utils";
class DataBase {
  constructor() {
    this.menu = [
      {
        id: generateUID(),
        name: "Hamburger",
        price: "8.99",
        imageSrc:
          "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg",
        description:
          "A classic American sandwich consisting of a beef patty served on a bun with lettuce, tomato, onion, and condiments.",
      },
      {
        id: generateUID(),
        name: "Cheeseburger",
        price: "9.99",
        imageSrc:
          "https://cdn.pixabay.com/photo/2014/09/03/15/05/sandwich-434658_960_720.jpg",
        description:
          "A hamburger with cheese added to the patty while cooking or placed on top of the patty after cooking.",
      },
      {
        id: generateUID(),
        name: "Chicken Sandwich",
        price: "7.99",
        imageSrc:
          "https://cdn.pixabay.com/photo/2016/03/05/22/24/bread-1239275_960_720.jpg",
        description:
          "A sandwich made with grilled or fried chicken breast, lettuce, tomato, and mayonnaise or other condiments.",
      },
      {
        id: generateUID(),
        name: "French Fries",
        price: "3.99",
        imageSrc:
          "https://cdn.pixabay.com/photo/2016/11/20/09/06/bowl-1842294_960_720.jpg",
        description:
          "Deep-fried strips of potatoes, served hot and crispy as a popular side dish.",
      },
      {
        id: generateUID(),
        name: "Onion Rings",
        price: "4.99",
        imageSrc:
          "https://cdn.pixabay.com/photo/2018/09/11/16/16/food-3669928_1280.jpg",
        description:
          "Sliced onions that are battered and deep-fried, served crispy and hot as a popular side dish.",
      },
      {
        id: generateUID(),
        name: "Soda",
        price: "1.99",
        imageSrc:
          "https://cdn.pixabay.com/photo/2017/08/05/20/15/cocktail-2585270_960_720.jpg",
        description:
          "A carbonated soft drink available in a variety of flavors.",
      },
      {
        id: generateUID(),
        name: "Milkshake",
        price: "4.99",
        imageSrc:
          "https://cdn.pixabay.com/photo/2014/11/21/15/20/coffee-540653_960_720.jpg",
        description:
          "A sweet and creamy drink made with milk, ice cream, and flavorings, blended to a smooth consistency.",
      },
      {
        id: generateUID(),
        name: "Salad",
        price: "6.99",
        imageSrc:
          "https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg",
        description:
          "A mixture of fresh vegetables and/or fruits, often served with a dressing and sometimes topped with nuts, cheese, or other ingredients.",
      },
      {
        id: generateUID(),
        name: "Pizza",
        price: "12.99",
        imageSrc:
          "https://cdn.pixabay.com/photo/2017/02/15/10/57/pizza-2068272_960_720.jpg",
        description:
          "A baked dish made with a flattened bread dough, tomato sauce, cheese, and various toppings.",
      },
      {
        id: generateUID(),
        name: "Pasta",
        price: "11.99",
        imageSrc:
          "https://cdn.pixabay.com/photo/2020/02/15/20/38/noodles-4851996_960_720.jpg",
        description:
          "A dish made from cooked noodles or other shapes, often served with a sauce and sometimes with meat, vegetables, or cheese.",
      },
      {
        id: generateUID(),
        name: "Garlic Bread",
        price: "3.99",
        imageSrc:
          "https://cdn.pixabay.com/photo/2015/01/18/16/02/bruschetta-603115_960_720.jpg",
        description:
          "Bread slices or rolls that have been brushed with garlic butter and often topped with cheese, baked until crispy and golden.",
      },
      {
        id: generateUID(),
        name: "Brownie Sundae",
        price: "5.99",
        imageSrc:
          "https://www.sugardishme.com/wp-content/uploads/2019/09/Homemade-Brownie-Sundae-with-Nuts.jpg.webp",
        description:
          "A dessert made with a warm, fudgy brownie topped with vanilla ice cream, whipped cream, and chocolate sauce.",
      },
      {
        id: generateUID(),
        name: "Ice Cream",
        price: "2.99",
        imageSrc:
          "https://cdn.pixabay.com/photo/2018/08/16/22/59/ice-cream-3611698_960_720.jpg",
        description:
          "A frozen dessert made from sweetened cream, often with added flavorings and other ingredients.",
      },
      {
        id: generateUID(),
        name: "Hot Dog",
        price: "6.99",
        imageSrc:
          "https://cdn.pixabay.com/photo/2018/08/16/22/59/ice-cream-3611698_960_720.jpg",
        description:
          "A type of sausage served in a bun, often topped with ketchup, mustard, relish, or other condiments.",
      },
      {
        id: generateUID(),
        name: "Chicken Tenders",
        price: "8.99",
        imageSrc:
          "https://cdn.pixabay.com/photo/2019/08/22/17/29/chicken-tenders-4423990_960_720.jpg",
        description:
          "Tender strips of chicken breast that are breaded and fried until crispy, served with dipping sauces.",
      },
      {
        id: generateUID(),
        name: "Fish and Chips",
        price: "10.99",
        imageSrc:
          "https://cdn.pixabay.com/photo/2015/10/17/21/39/food-993457_960_720.jpg",
        description:
          "A popular British dish consisting of battered and deep-fried fish served with crispy fries.",
      },
      {
        id: generateUID(),
        name: "Nachos",
        price: "7.99",
        imageSrc:
          "https://cdn.pixabay.com/photo/2014/02/14/22/15/nachos-266222_960_720.jpg",
        description:
          "Tortilla chips topped with melted cheese, often served with beans, meat, salsa, guacamole, and sour cream.",
      },
      {
        id: generateUID(),
        name: "Quesadilla",
        price: "9.99",
        imageSrc:
          "https://cdn.pixabay.com/photo/2017/05/09/01/34/quesadilla-2297035_960_720.jpg",
        description:
          "A Mexican dish made with a tortilla filled with cheese and often other ingredients, folded in half and grilled until the cheese is melted and the tortilla is crispy.",
      },
      {
        id: generateUID(),
        name: "Burrito",
        price: "8.99",
        imageSrc:
          "https://cdn.pixabay.com/photo/2019/04/14/03/08/burrito-4126108_1280.jpg",
        description:
          "A Mexican dish made with a large flour tortilla filled with meat, beans, rice, cheese, and other ingredients, wrapped tightly and served hot.",
      },
      {
        id: generateUID(),
        name: "Taco Salad",
        price: "6.99",
        imageSrc:
          "https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_1280.jpg",
        description:
          " Mexican-inspired salad made with a base of shredded lettuce, topped with seasoned ground beef or chicken, diced tomatoes, shredded cheese, salsa, and sour cream. It is typically served in a crispy fried tortilla shell or a large taco bowl, but can also be served without the shell for a lighter option. Some variations may include beans, corn, avocado, or other toppings. The dish is often finished with a sprinkle of tortilla chips or strips for added crunch.",
      },
    ];
    this.orderList = [];
  }
  createOrder(map) {
    this.orderList.push(map);
  }
  updateOrder(map) {
    let copyOrderList = [...this.orderList];
    var selectedIndex = copyOrderList.findIndex((item) => item.id == map.id);
    copyOrderList[selectedIndex] = map;
    this.orderList = copyOrderList;
  }
  readAllMenu() {
    return this.menu;
  }
  
  deleteOrder(id) {
    let copyOrderList = [...this.orderList];
    var selectedIndex = copyOrderList.findIndex((item) => item.id == map.id);
    copyOrderList.splice(selectedIndex, 1);
    this.orderList = copyOrderList;
  }
}

export default DataBase;
