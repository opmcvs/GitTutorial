// 21 wins or as close as possible above your out.
//Ace = 11 and king = 10
let firstCard = 11;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
//ALWAYS KEEP IN MIND THE LESS FACTOR 
if (sum<=20){
    console.log("Do you want to draw a new card")
}else if(sum === 21){
    console.log("You won")
    hasBlackJack = true  
}else {
    console.log("You're out of the game");
    isAlive = false;
}

console.log(hasBlackJack);
console.log(isAlive);

