//toglogchiin eeljiig hadgalah huvisagch,negdugeer toglogch  , 2r toglogch 1
var activePlayer=1;
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
document.querySelector(".btn-roll").addEventListener('click',function(){
    var diceNumber=Math.floor(Math.random()*6)+1;   
diceDom.style.display="block";
diceDom.src="dice-"+diceNumber+".png";
});




