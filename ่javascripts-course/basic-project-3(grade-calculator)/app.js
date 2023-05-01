let score = prompt("Your score");
let grade =
  score >= 80
    ? "A"
    : score >= 75 && score < 80
    ? "B+"
    : score >= 70 && score < 75
    ? "B"
    : score >= 65 && score < 70
    ? "C+"
    : score >= 60 && score < 65
    ? "C"
    : score >= 55 && score < 60
    ? "D+"
    : score >= 50 && score < 55
    ? "D"
    : "F";
let result = document.getElementById("result");
result.innerHTML = "result: " + grade;
