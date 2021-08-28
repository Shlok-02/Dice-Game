var rand = Math.floor(Math.random() * 6 + 1);
console.log(rand);

var attr = "images/dice" + rand + ".png";
document.querySelector(".img1").setAttribute("src", attr);

var rand1 = Math.floor(Math.random() * 6 + 1);
var attr1= "images/dice" + rand1 + ".png";
document.querySelector(".img2").setAttribute("src", attr1);

if (rand > rand1) {
  document.querySelector(".container h1").innerHTML = "<h1>Player 1 Wins</h1>";
} else if (rand1 > rand) {
  document.querySelector(".container h1").innerHTML = "<h1>Player 2 Wins</h1>";
} else {
  document.querySelector(".container h1").innerHTML = "<h1>Draw</h1>";
}

function refresh(){
    window.location.reload();
}