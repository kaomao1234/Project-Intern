function toCelsius(param) {
  let fahrenheit = parseFloat(param);
  let celsius = (fahrenheit - 32) * (5 / 9);

  return `${fahrenheit} ํF => ${celsius.toFixed(2)} ํC`;
}
function toFahrenheit(param) {
  let celsius = parseFloat(param);
  let fahrenheit = (celsius * 9) / 5 + 32;
  return `${celsius} ํC => ${fahrenheit.toFixed(2)} ํF`;
}
function onClickToCelsius(param){
  let resultC = document.getElementById("resultCelsius");
  resultC.innerHTML = toCelsius(param);
}

function onClickToFarenheit(param){
  let resultF = document.getElementById("resultFahrenheit");
  resultF.innerHTML = toFahrenheit(param);
}