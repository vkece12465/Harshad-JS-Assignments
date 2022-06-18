const msg1 = document.getElementById("msg1");
const msg2 = document.getElementById("msg2");
const buttons = document.querySelectorAll(".btn");

let coins = ['Heads', 'Tails'];
let score1 = 0;
let score2 =0;

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", tossCoin);
}
function tossCoin(e) {
    let playerGuess = e.target.innerText;
    let computerGuess = Math.floor(Math.random() * 2);
    let computerSelection = coins[computerGuess];
    let results;

    if (playerGuess === computerSelection) {
     results = "Player Won";
     document.getElementById("h1").innerHTML = results;
        score1++;
        h1.style.background="blue";
        h1.style.color="white";
    }
    else {
    results = "Computer Won";
       document.getElementById("h1").innerHTML = results;
        score2++;
        h1.style.background="blue";
        h1.style.color="yellow";
    }
    msg1.style.color= "red";
    msg2.style.color= "blue";
    msg1.innerHTML =`<span> ${results} </span> <br> <br> Player : <span> ${score1} </span>  Computer : <span> ${score2}</span>` 
    msg2.innerHTML = `Computer selected  = <span> ${computerSelection} </span> <br> <br> Player selected  =  <span>${playerGuess}</span>`;

}