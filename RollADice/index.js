function getRandomNumberBetweenOneToSix() {
    return Math.floor(Math.random() * 6) + 1; //generate random number between 1 and 6
}

function setImageForPlayer(numForPlayerOne, numForPlayerTwo) {
    //set image for player one
    document.querySelector(".img1").src = "images/dice" + numForPlayerOne + ".png";
    //set image for player two
    document.querySelector(".img2").src = "images/dice" + numForPlayerTwo + ".png";
}

// get random number for player
let numForPlayerOne = getRandomNumberBetweenOneToSix();
let numForPlayerTwo = getRandomNumberBetweenOneToSix();



// set image for both player
setImageForPlayer(numForPlayerOne, numForPlayerTwo);


// check who is winner
if (numForPlayerOne > numForPlayerTwo) {
    document.querySelector("h1").innerHTML = "🚩 Player One Wins!";
}
else if (numForPlayerOne < numForPlayerTwo) {
    document.querySelector("h1").innerHTML = "Player Two Wins! 🚩";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}


