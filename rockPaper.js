/*
a
a
a
*/
function getComputerChoice() {
  let Cchoices = ["Rock", "Paper", "Scissors"];
  let rnd = Math.random() * 10;
  let ind = -1;
  if (rnd >= 0 && rnd <= 3.33) ind = 0;
  else if (rnd > 3.33 && rnd <= 6.66) ind = 1;
  else if (rnd > 6.66 && rnd <= 10) ind = 2;
  //   console.log(ind+1);
  return Cchoices[ind];
}
function getHumanChoice() {
  let Pchoices = ["Rock", "Paper", "Scissors"];
  let ch = 0;
  do {
    ch = Number(prompt("Enter your choice\n 1. Rock 2. Paper 3. Scissors :"));
    if (ch < 1 || ch > 3 || isNaN(ch))
      console.log("ERROR Number out of range\n valid range 1-3");
  } while (ch < 1 || ch > 3 || isNaN(ch));

  return Pchoices[ch - 1];
}
function PlayRound(compCh, playerCh) {
  console.log("Computer choose: ", compCh,"     You choose: ", playerCh);
  if (compCh === "Rock") {
    if (playerCh === "Scissors") {
      compScore++;
    } else if (playerCh === "Paper") {
      playerScore++;
    }
  } else if (compCh === "Paper") {
    if (playerCh === "Scissors") {
      playerScore++;
    } else if (playerCh === "Rock") {
      compScore++;
    }
  }
  if (compCh === "Scissors") {
    if (playerCh === "Rock") {
      playerScore++;
    } else if (playerCh === "Paper") {
      compScore++;
    }
  }
}
function PlayGame(numRounds) {
  console.log("Total Rounds:", numRounds);
  for (let index = 0; index < numRounds; index++) {
    console.log("\nRound number: ", index + 1);
    console.log("Current Score:\n");
    console.log("Computer: ", compScore, "Player: ", playerScore);
    let playerCh = getHumanChoice();
    let compCh = getComputerChoice();
    PlayRound(compCh, playerCh);
  }
  if (compScore > playerScore) {
    console.log("Comp won. Score = ", compScore);
  } else if (compScore < playerScore) {
    console.log("Player won.  Score = ", playerScore);
  } else {
    console.log("Game Tied");
    console.log("Player Score", playerScore);
    console.log("Computer Score", compScore);
  }
}

let playerScore = 0,
  compScore = 0;
function main() {
  PlayGame(5);
}

main();
