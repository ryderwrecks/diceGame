var randomNumber1 = Math.floor(Math.random() * 6)+ 1;
var dicePicker1 = "images/dice" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src", dicePicker1);

var randomNumber2 = Math.floor(Math.random() * 6)+ 1;
var dicePicker2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", dicePicker2);

  if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerText = "Its a Draw!"
  }
  else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerText = "Player 1 wins!"
  }
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerText = "Player 2 wins!"
  }
