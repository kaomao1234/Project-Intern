function generateUID() {
  let timestamp = Date.now().toString(16);
  let randomValue = Math.random().toString(16).substring(2);
  return timestamp + randomValue;
}
export default generateUID;
