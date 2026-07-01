// global huvisagch
var diceDom=document.querySelector(".dice");
var activePlayer;
//toglogchiin onoog tsugluulah huvisagch
var scores;

//toglogchiin eeljindee tsugluulah onoog tsugluulah huvisagch
var roundScore;
// shoog shideh event listener
var diceNumber=Math.floor(Math.random()*6)+1;

var isGameOver; 

initGame();

function initGame(){
    //toglogchiin eeljiig hadgalah huvisagch,negdugeer toglogch  , 2r toglogch 1
isGameOver=false;
    activePlayer=0;
//toglogchiin onoog tsugluulah huvisagch
scores=[0,0];

//toglogchiin eeljindee tsugluulah onoog tsugluulah huvisagch
roundScore=0;
//shoonii ali talaaraa buusniig hadgalah huvisagch

// program ehlehed beldii
document.getElementById("score-0").textContent='0';
document.getElementById("score-1").textContent='0';
document.getElementById("current-0").textContent='0';
document.getElementById("current-1").textContent='0';
diceDom.style.display="none";

document.getElementById("name-0").textContent="Player 1";
document.getElementById("name-1").textContent="Player 2";

document.querySelector(".player-0-panel").classList.remove("winner");
document.querySelector(".player-1-panel").classList.remove("winner");
document.querySelector(".player-0-panel").classList.remove("active");
document.querySelector(".player-1-panel").classList.remove("active");


document.querySelector(".player-0-panel").classList.add("active");

}

document.querySelector(".btn-roll").addEventListener('click',function(){
if(! isGameOver){
var diceNumber=Math.floor(Math.random()*6)+1;   
diceDom.style.display="block";
diceDom.src="dice-"+diceNumber+".png";

// Buusan too ni 1 ees yalgaatai bol glogchiin eeljiin onoog oorchloh
if(diceNumber!==1){
roundScore+=diceNumber;
document.getElementById("current-"+activePlayer).textContent=roundScore;
}else{
document.getElementById("current-"+activePlayer).textContent=0;
switchToNextPlayer();
}
}
});

// hold tovchnii listener
document.querySelector(".btn-hold").addEventListener("click",function(){
    if(! isGameOver){
    scores[activePlayer]+=roundScore;

    document.getElementById("score-"+activePlayer).textContent=scores[activePlayer];
    if(scores[activePlayer]>=10){
        isGameOver=true;
        document.getElementById("name-"+activePlayer).textContent= "WINNER!!!";
        document.querySelector(".player-"+activePlayer+"-panel").classList.add("winner");
        document.querySelector(".player-"+activePlayer+"-panel").classList.remove("active");
    }
    else {
     document.getElementById("current-"+activePlayer).textContent=0;
    switchToNextPlayer();
    }
    }

});

function switchToNextPlayer(){
 activePlayer = 1 - activePlayer;
roundScore=0;

diceDom.style.display="none";

document.querySelector(".player-"+(1-activePlayer)+"-panel").classList.remove("active");
document.querySelector(".player-"+activePlayer+"-panel").classList.add("active");
}

// shine togloom ehluuleh
document.querySelector(".btn-new").addEventListener("click",initGame);

