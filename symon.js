let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

let btns = ["yellow", "red", "purple", "green"]

document.addEventListener ("keypress", function (){
   if (started === false){
    console.log("started");
    started = true;

   setTimeout(levelUp, 1000);
   }; 

});

function gameFlash (btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 400);
};

function userFlash (btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 200);
};

function levelUp (){
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;
    

    let randIdx = Math.floor(Math.random() *3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
     gameSeq.push(randColor);
     console.log(gameSeq);
    gameFlash(randBtn);

};

function checkAns (idx){
   if (gameSeq[idx] === userSeq[idx]){
      if (gameSeq.length == userSeq.length) {
        levelUp();
      }
     } else {
        h2.innerHTML = `Game over! your score was <b> ${level} </b> <br>press  any key to resatar`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function (){
        document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
     }

}

function btnPress (){
  let btn = this;
    userFlash(btn);

    userColor  = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
 for (btn of allBtns){
    btn.addEventListener("click", btnPress);
 }

 function reset (){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
 }