function random() {
  return Math.floor(((Math.random() * 3)))
}

function player1Choice() {
  var images = ["paper", "rock", "scissors"]
  return images[random()]
}

function player2Choice() {
  var images = ["paper", "rock", "scissors"]
  return images[random()]
}

function game() {
  var user1 = player1Choice()
  var user2 = player2Choice()

  document.querySelector(".img1").setAttribute("src", "images/" + user1 + ".png")
  document.querySelector(".img2").setAttribute("src", "images/" + user2 + ".png")

  if (user1 == user2) {
    document.querySelector("h1").innerText = "Draw!"

  } else if (user1 == "paper") {
    if (user2 == "rock") {
      document.querySelector("h1").innerText = "Player 1, won!"
      user1Score++
      document.querySelector("#user1-score").innerText = user1Score

    } else if (user2 == "scissors") {
      document.querySelector("h1").innerText = "Player 2, won!"
      user2Score++
      document.querySelector("#user2-score").innerText = user2Score
    }
  } else if (user1 == "rock") {
    if (user2 == "scissors") {
      document.querySelector("h1").innerText = "Player 1, won!"
      user1Score++
      document.querySelector("#user1-score").innerText = user1Score

    } else if (user2 == "paper") {
      document.querySelector("h1").innerText = "Player 2, won!"
      user2Score++
      document.querySelector("#user2-score").innerText = user2Score
    }
  } else if (user1 == "scissors") {
    if (user2 == "paper") {
      document.querySelector("h1").innerText = "Player 1, won!"
      user1Score++
      document.querySelector("#user1-score").innerText = user1Score

    } else if (user2 == "rock") {
      document.querySelector("h1").innerText = "Player 2, won!"
      user2Score++
      document.querySelector("#user2-score").innerText = user2Score
    }
  }

  switch (document.querySelector("h1").innerText) {
    case "Draw!":
      document.querySelector(".ch1").classList.add("winner")
      document.querySelector(".ch2").classList.add("winner")
      break;
    case "Player 1, won!":
      document.querySelector(".ch1").classList.add("winner")
      document.querySelector(".ch2").classList.add("looser")
      break;
    case "Player 2, won!":
      document.querySelector(".ch1").classList.add("looser")
      document.querySelector(".ch2").classList.add("winner")
      break;
    default:

  }

}
var user1Score = 0
var user2Score = 0
/*
Event Listeners
*/
document.querySelector(".playClick").addEventListener("click", function() {
  document.querySelector(".ch1").classList.remove("looser")
  document.querySelector(".ch2").classList.remove("looser")
  document.querySelector(".ch1").classList.remove("winner")
  document.querySelector(".ch2").classList.remove("winner")
  game()

})
document.querySelector(".reset").addEventListener("click", function() {
  location.reload();
})
