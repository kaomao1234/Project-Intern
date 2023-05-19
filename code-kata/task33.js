function compile(input) {
  if (input % 4 == 0) {
    if (input % 100 == 0) {
      if (input % 400 == 0) {
        console.log("Leap Year");
      } else {
        console.log("Not a Leap Year");
      }
    } else {
      console.log("Leap Year");
    }
  } else {
    console.log("Not a Leap Year");
  }
}
compile(2020);
