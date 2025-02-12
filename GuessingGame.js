const max=prompt("Enter the max Number");
const random=Math.floor(Math.random()*max)+1;
console.log(random);
let guess=prompt("Guess the Number");
while (true) {
    if(guess=="quit"){
    console.log("quitting game");
    break;
    }

    if (guess==random) {
        console.log("Congrats!You guessed it right!")
        break;
        
    }else if(guess<random){
        guess=prompt("You guessed a smaller number.Please Try again")

    }else{
        guess=prompt("You guessed a bigger number.Please Try again")
    }
    
}
