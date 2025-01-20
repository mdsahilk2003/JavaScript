// guessing game
const fevMovie = "avatar";
let guess = prompt("guess your movie !");
    while((guess != fevMovie) && (guess != "quit")){
    guess = prompt("Wrong guess !! Please try again. ");
}
    if(guess == fevMovie){
        console.log("Congrats!! You are right.");
    }else{
        console.log("You are quit !!");
    }
