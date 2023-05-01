let round = parseInt(prompt("How many rounds will you play?"));
let gameList = document.getElementById("game-list");
for (let i = 0; i < round; i++) {
  let min = 0;
  let max = 1;
  let randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
  let answer = prompt(`round ${i + 1} head(h) or tail(t)`).toLowerCase();
  if (!["h", "t"].includes(answer)) {
    alert("Option not valid. Please choose between head(h) or tail(t)");
  } else {
    let result = ["h", "t"][randomInt] === answer ? "won" : "lost"; // using a ternary operator to simplify the if/else statement
    let roundResult = document.createElement("h2");
    roundResult.textContent = `Round ${i + 1}: You ${result}!`;
    gameList.appendChild(roundResult);
    alert(`Round ${i + 1}: You ${result}!`);
  }
}
