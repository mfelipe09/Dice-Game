var randomNumber1 = (Math.floor(Math.random() * 6) + 1);
var randomNumber2 = (Math.floor(Math.random() * 6) + 1);

const img = document.querySelector("img");

if (randomNumber1 === 1){
    img.setAttribute("src", "images/dice1.png"); 
}
else if (randomNumber1 === 2){
    img.setAttribute("src", "images/dice2.png");
}
else if (randomNumber1 === 5){
    img.setAttribute("src", "images/dice5.png");
}
else if (randomNumber1 === 3){
    img.setAttribute("src", "images/dice3.png");
}
else if (randomNumber1 === 4){
    img.setAttribute("src", "images/dice4.png");
}
else{
    img.setAttribute("src", "images/dice6.png");
}

const img2 = document.querySelector("img.img2");

if (randomNumber2 === 1){
    img2.setAttribute("src", "images/dice1.png"); 
}
else if (randomNumber2 === 2){
    img2.setAttribute("src", "images/dice2.png");
}
else if (randomNumber2 === 5){
    img2.setAttribute("src", "images/dice5.png");
}
else if (randomNumber2 === 3){
    img2.setAttribute("src", "images/dice3.png");
}
else if (randomNumber2 === 4){
    img2.setAttribute("src", "images/dice4.png");
}
else{
    img2.setAttribute("src", "images/dice6.png");
}

const h1 = document.querySelector("h1");

if(randomNumber1 > randomNumber2){
    h1.textContent = "🎖Jogador 1 Ganhou";
}
else if(randomNumber1 === randomNumber2){
    h1.textContent = "Empate";
}
else{
    h1.textContent = "Jogador 2 Ganhou🎖"
}