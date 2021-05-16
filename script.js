const random = Math.ceil(Math.random() * 100);
let guess = 0;
document.getElementById("guessSubmit").addEventListener("click", () => {
  let x = document.getElementById("guess").value;
  if (guess <= 10) {
    if (x == random) {
      ++guess;
      document.getElementById("history").innerHTML +=
        "<b>Guess:" + guess + "</b>=" + x + "  ||  ";
      alert('You Won !!! Guessed Correct!! in ' + guess + ' guess')
      location.reload();
    } else if (x > random) {
      ++guess;
      document.getElementById("response").innerHTML =
        "Wrong Guess!! Try a Smaller Number" +
        (10 - guess) +
        " guess left.";
      document.getElementById("history").innerHTML +=
        "<b>Guess:" + guess + "</b>=" + x + "  ||  ";
    } else {
      ++guess;
      document.getElementById("response").innerHTML =
        "Wrong Guess!! Try a Bigger Number " +
        (10 - guess) +
        " guess left.";
      document.getElementById("history").innerHTML +=
        "<b>Guess:" + guess + "</b>=" + x + "  ||  ";
    }
  } else {
    alert("Game Over");
    location.reload();
  }
});
