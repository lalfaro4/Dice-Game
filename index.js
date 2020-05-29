
var player1 = throwDice();
var player2 = throwDice();

document.querySelector(".img1").setAttribute("src",  convertNumberToDiceImage(player1));
document.querySelector(".img2").setAttribute("src",  convertNumberToDiceImage(player2));



determineWinner();


// FUNCTIONS

function determineWinner() {
    if(player1 > player2){
        document.querySelector("h1").innerText = "🚩Player 1 Wins!"
    } else if (player2 > player1){
        document.querySelector("h1").innerHTML = "Player 2 Wins!🚩"
    } else {
        document.querySelector("h1").innerHTML = "TIE!"
    }
}

function throwDice(){
    var value = Math.floor(Math.random() * 6) + 1;
    return value;
}

function convertNumberToDiceImage(value) {
    return ("images/dice" + value + ".png");
}