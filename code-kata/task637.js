function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function complie(arg) {
  let moneyType = [1000, 500, 100, 50, 20, 10, 5, 1];
  let input = arg;
  let bufferInput = input;
  moneyType.forEach((val, index) => {
    const num = Math.floor(input / val);
    input = input - num * val;
    if (num > 0) {
      console.log(`${val<20? "เหรียญ":"ธนบัตร"} ${numberWithCommas(val)}฿ : ${num} ${val<20? "เหรียญ":"ฉบับ"}`);
    }
  });
  console.log(`จำนวนเงินที่แลกทั้งหมด ${numberWithCommas(bufferInput)} บาท`);
}
complie(84502);
