let qrt = prompt("Enter the number of products");
let priceList = document.getElementById("price-list");
let result = document.getElementById("result");
let totalPrice = 0;
for (var ele = 1; ele < parseInt(qrt) + 1; ele++) {
let priceProduct = prompt("Price of Product " + ele);
  priceList.innerHTML +=
    "Product number " +
    ele +
    " => " +
    priceProduct +
    " bath<br>";
    totalPrice += parseInt(priceProduct);
}
result.innerHTML = "all product prices => "+totalPrice+ " bath";
