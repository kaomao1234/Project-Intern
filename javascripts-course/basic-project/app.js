var x = 50;
{
  var x = 20; //Global
  let y = 12; //in scope only
}
let selectNumber = prompt("กรอกเลขที่ต้องการซื้อ");
let start = 0; // start random number
let end = 10; // end random number
var randNum = Math.floor(Math.random() * end + start); // random number
if (randNum == selectNumber) {
  alert("ถูกรางวัล");
} else {
  alert("ไม่ถูกรางวัล");
}
//console.log("4" == 4);//true because same char
//console.log("4" === 4);// false because not same type
let rewardNumber = document.getElementById("result").innerHTML;
let purchaseNumber = document.getElementById("purchase").innerHTML;
document.getElementById("result").innerHTML = rewardNumber + " " + randNum;
document.getElementById("purchase").innerHTML =
  purchaseNumber + " " + selectNumber;
