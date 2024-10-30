const play1 = document.querySelector('#play1');
const play2 = document.querySelector('#play2');
const reset = document.querySelector('#reset');
const score1 = document.querySelector('#score1');
const score2 = document.querySelector('#score2');
const nums = document.querySelector('#nums');

let playOneScore = 0;
let playTwoScore = 0;
let winningScore = 0;

nums.addEventListener('change', function(){
    winningScore = parseInt(nums.value);
    console.log("winningScore");
})

play1.addEventListener('click', function(){
    if(playOneScore < winningScore){
        playOneScore += 1; 
        score1.textContent = playOneScore; 
        scoreTracker();
    } 
    
})

play2.addEventListener('click', function(){
    if(playTwoScore < winningScore){
        playTwoScore += 1; 
        score2.textContent = playTwoScore;
        scoreTracker(); 
    }
})

reset.addEventListener('click', function(){
    score1.textContent = 0;
    score2.textContent = 0;
    score1.style.color = "black";
    score2.style.color = "black";
    playOneScore = 0;
    playTwoScore = 0; 
    
    
})


function scoreTracker(){
    if(playOneScore === winningScore){
        score1.style.color = "green";
        score2.style.color = "red";
    }else if(playTwoScore === winningScore){
        score2.style.color = "green";
        score1.style.color = "red";
    }else{
        score1.style.color = "black";
        score2.style.color = "black";
    }
}



