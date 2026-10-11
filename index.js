let player1 = {
    firstName: null,
    lastName: null,
    yellowcards: 0,
    timeouts: 1 
}
let player2 = {
    firstName: null,
    lastName: null,
    yellowcards: 0,
    timeouts: 1 
}
const formSection = document.getElementById('formSectionP1');
const formSection2 = document.getElementById('formSectionP2');
const successSection = document.getElementById('successSection');
const button = document.getElementById('playerButton');
const displayPlayer1 = document.getElementById('displayP1');
const displayPlayer2 = document.getElementById('displayP2');
const buttonStartGame = document.getElementById('startGameButton');
const restartGameButton = document.getElementById('restartGameButton');
const renamePlayersButton = document.getElementById('renamePlayersButton');
button.addEventListener('click', function() {
    player1.firstName = document.getElementById('fName').value;
    player1.lastName = document.getElementById('lName').value;
    player2.firstName = document.getElementById('fName2').value;
    player2.lastName = document.getElementById('lName2').value;
    displayPlayer1.textContent = 'Player1 -' + player1.firstName + ' ' +  player1.lastName;
    displayPlayer2.textContent = 'Player2 - ' + player2.firstName + ' ' + player2.lastName;
    formSection.style.display = 'none';
    formSection2.style.display = 'none';
    successSection.style.display = 'block';
    console.log(player1, player2);
});
buttonStartGame.addEventListener('click', function() {
    successSection.style.display = 'none';
    gameOnGoing.style.display = 'block';
})
restartGameButton.addEventListener('click', function() {
    gameOnGoing.style.display = 'none';
    successSection.style.display = 'none';
    formSection.style.display = 'block';
    formSection2.style.display = 'block';
})
renamePlayersButton.addEventListener('click', function() {
    gameOnGoing.style.display = 'none';
    successSection.style.display = 'none';
    formSection.style.display = 'block';
    formSection2.style.display = 'block';
})






