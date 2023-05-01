function getRandomColor() {
  // Generate random RGB values
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  // Combine RGB values into a CSS color string
  const color = `rgb(${r}, ${g}, ${b})`;

  return color;
}
function sayHello() {
  let fn = document.getElementById("fn");
  fn.style.backgroundColor = getRandomColor();
  fn.style.height +=10;
   console.log("Hello");
}
