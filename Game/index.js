// find elements and put them into a variable 
const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const newScore = document.getElementById('new-score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const player1 = document.getElementById("ply1");
const player2 = document.getElementById("ply2");
const scoreboard = {
    player1: 0,
    player2: 0
};
const gameboard = {
    numOfDraws: 0,
    numOfGames: 0,
}

// Play game : define every players choice
var isFirstPlayerTurn = true;
var firstPlayerchoice;

function play(e) {
    restart.style.display = 'inline-block';
    if (isFirstPlayerTurn) {
        firstPlayerchoice = e.target.id;
        isFirstPlayerTurn = false;
        return;
    }
    const secondplayerChoice = e.target.id;
    const winner = getWinner(firstPlayerchoice, secondplayerChoice);
    showWinner(winner);
    isFirstPlayerTurn = true;
}

// Add players name to the game
function addName() {
    player1.innerHTML = document.getElementById("name1").value;
    player2.innerHTML = document.getElementById("name2").value;
}

// Define Get  winner method:
function getWinner(p1, p2) {
    if (p1 === p2) {
        return 'draw';
    } else if (p1 === 'rock') {
        if (p2 === 'paper') {
            return 'player2';
        } else {
            return 'player1';
        }
    } else if (p1 === 'paper') {
        if (p2 === 'scissors') {
            return 'player2';
        } else {
            return 'player1';
        }
    } else if (p1 === 'scissors') {
        if (p2 === 'rock') {
            return 'player2';
        } else {
            return 'player1';
        }
    }
}

// Define show winner method

function showWinner(winner) {
    if (winner === 'player1') {
        // Increase player1 score
        scoreboard.player1++;
        // Show modal result
        result.innerHTML = `
      <h2 class="text-win">${document.getElementById("name1").value} Win</h2>

    `;
    } else if (winner === 'player2') {
        // Increase player2 score
        scoreboard.player2++;
        // Show modal result
        result.innerHTML = `
      <h2 class="text-lose">${document.getElementById("name2").value} Win</h2>


    `;
    } else {
        result.innerHTML = `
      <h2>It's A Draw</h2>
     `;
        gameboard.numOfDraws++;
    }
    // Show score
    score.innerHTML = `
    <p>${document.getElementById("name1").value} : ${scoreboard.player1}</p>
    <p>${document.getElementById("name2").value} : ${scoreboard.player2}</p>
    `;
    newScore.innerHTML = `
    <p>Number of Draws: ${gameboard.numOfDraws}</p>
    <p>Total games Played: ${gameboard.numOfGames}</p>
    `;
    modal.style.display = 'block';
}

// Restart game
function restartGame() {
    scoreboard.player1 = 0;
    scoreboard.player2 = 0;
    gameboard.numOfDraws = 0;
    gameboard.numOfGames++;
    score.innerHTML = `
    <p>Player1: 0</p>
    <p>Player2: 0</p>
  `;
    newScore.innerHTML = `
   <p>Number of Draws: 0</p>
    <p>Total games Played: ${gameboard.numOfGames}</p>
  `
}

// Clear modal
function clearModal(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}

// Event listeners
choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);