var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var img1_name = "./images/dice"+randomNumber1+".png";
document.querySelector("img.img1").setAttribute("src",img1_name);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var img2_name = "./images/dice"+randomNumber2+".png";
document.querySelector("img.img2").setAttribute("src",img2_name);

console.log(randomNumber1);
console.log(randomNumber2);

if(randomNumber1 > randomNumber2){
    document.querySelector(".container>h1").innerHTML = "Player 1 Wins !";
}

if(randomNumber2 > randomNumber1){
    document.querySelector(".container>h1").innerHTML = "Player 2 Wins !";
}

if(randomNumber1 === randomNumber2){
   document.querySelector(".container>h1").innerHTML = "Draw";
    
}