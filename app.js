//toglogchiin eeljiig hadgalah huvisagch,negdugeer toglogch  , 2r toglogch 1
var activePlayer=0;
//toglogchiin onoog tsugluulah huvisagch
var scores=[0,0];

//toglogchiin eeljindee tsugluulah onoog tsugluulah huvisagch
var roundScore=0;
//shoonii ali talaaraa buusniig hadgalah huvisagch
var diceNumber=Math.floor(Math.random()*6)+1;
// program ehlehed beldii
document.getElementById("score-0").textContent='0';
document.getElementById("score-1").textContent='0';
document.getElementById("current-0").textContent='0';
document.getElementById("current-1").textContent='0';

var diceDom=document.querySelector(".dice");
diceDom.style.display="none";
// shoog shideh event listener
document.querySelector(".btn-roll").addEventListener('click',function(){
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
});

// hold tovchnii listener
document.querySelector(".btn-hold").addEventListener("click",function(){
    scores[activePlayer]+=roundScore;

    document.getElementById("score-"+activePlayer).textContent=scores[activePlayer];
    if(scores[activePlayer]>=10){
        document.getElementById("name-"+activePlayer).textContent= "WINNER!!!";
        document.querySelector(".player-"+activePlayer+"-panel").classList.add("winner");
        document.querySelector(".player-"+activePlayer+"-panel").classList.remove("active");
    }
    else {
     document.getElementById("current-"+activePlayer).textContent=0;
    (activePlayer===0) ? activePlayer=1 : activePlayer=0;
    switchToNextPlayer();
    }
   
});

function switchToNextPlayer(){
roundScore=0;

diceDom.style.display="none";

document.querySelector(".player-"+(1-activePlayer)+"-panel").classList.remove("active");
document.querySelector(".player-"+activePlayer+"-panel").classList.add("active");
}