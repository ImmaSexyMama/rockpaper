const numberOfButtons = document.querySelectorAll(".btn").length;

for (let i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".btn")[i].addEventListener("click", function () {
    if (i === 0) {
      document.querySelector("#yourMove").innerHTML = "Rock🪨";
    }

    if (i === 1) {
      document.querySelector("#yourMove").innerHTML = "Paper🗒";
    }

    if (i === 2) {
      document.querySelector("#yourMove").innerHTML = "Scissors✂️";
    }

    determineWinner(i);
  });
}

function determineWinner(userChoiceIndex) {
  const choices = ["Rock🪨", "Paper🗒", "Scissors✂️"];
  const computerChoiceIndex = Math.floor(Math.random() * 3); // Generate random number here
  const userChoice = choices[userChoiceIndex];
  const computerChoice = choices[computerChoiceIndex];

  if (userChoice === computerChoice) {
    document.querySelector("#result").textContent = "It's a tie!🫥";
  } else if (
    (userChoice === "Rock🪨" && computerChoice === "Scissors✂️") ||
    (userChoice === "Paper🗒" && computerChoice === "Rock🪨") ||
    (userChoice === "Scissors✂️" && computerChoice === "Paper🗒")
  ) {
    document.querySelector("#result").textContent = "You win!🥳";
  } else {
    document.querySelector("#result").textContent = "Computer wins!😩";
  }

  // Update computer's move after determining the winner
  document.querySelector("#computerResults").innerHTML = `${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`;
}

function resetGame() {
    document.querySelector("#yourMove").innerHTML = "";
    document.querySelector("#computerResults").innerHTML = "";
    document.querySelector("#result").textContent = "This is a Rock Paper Scrissors game!";
  }
  
  // Reset button click event
  document.querySelector("#resetButton").addEventListener("click", resetGame);