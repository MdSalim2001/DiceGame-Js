document.querySelector("button").onclick = function () {
  spin();
};

function spin() {
  var num1 = Math.floor(Math.random() * 6) + 1;
  console.log(num1);
  var num2 = Math.floor(Math.random() * 6) + 1;
  console.log(num1);

  if (num1 > num2) {
    document.querySelector("h1").textContent = "🚩Player1 Won";
  } else if (num2 > num1) {
    document.querySelector("h1").textContent = "Player2 Won🚩";
  } else {
    document.querySelector("h1").textContent = "It's A DRAW!";
  }
  //////////////////////////////////////////////////////////
  if (num1 === 1) {
    document.querySelector(".img1").src = "images/dice1.png";
  }
  if (num1 === 2) {
    document.querySelector(".img1").src = "images/dice2.png";
  }
  if (num1 === 3) {
    document.querySelector(".img1").src = "images/dice3.png";
  }
  if (num1 === 4) {
    document.querySelector(".img1").src = "images/dice4.png";
  }
  if (num1 === 5) {
    document.querySelector(".img1").src = "images/dice5.png";
  }
  if (num1 === 6) {
    document.querySelector(".img1").src = "images/dice6.png";
  }

  //////////////////////////////////////////////////////
  if (num2 === 1) {
    document.querySelector(".img2").src = "images/dice1.png";
  }
  if (num2 === 2) {
    document.querySelector(".img2").src = "images/dice2.png";
  }
  if (num2 === 3) {
    document.querySelector(".img2").src = "images/dice3.png";
  }
  if (num2 === 4) {
    document.querySelector(".img2").src = "images/dice4.png";
  }
  if (num2 === 5) {
    document.querySelector(".img2").src = "images/dice5.png";
  }
  if (num2 === 6) {
    document.querySelector(".img2").src = "images/dice6.png";
  }
}
