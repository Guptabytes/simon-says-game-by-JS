let gameSeq = [];
let userSeq = [];

let btns = ["yellow" ,"red", "purple" ,"pink"]

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener( "keypress" ,function () {
    if (started == false) {
        console.log("Game Started");
        started = true;

        levelup();
    }
});

function gameFlash(btn) {
    btn.classList.add("Flash");
    setTimeout( function() {
        btn.classList.remove("Flash");
    },250);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout( function() {
        btn.classList.remove("userFlash");
    },250);
}

function levelup() {
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq)
    gameFlash(randBtn);
    
};
function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelup, 1000);
        }
    }else{
        h2.innerHTML = `Game Over! Your score was <b>${level}<b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white"
        },150);
        reset();
    }
}

function btnPress() {
    // console.log(this)
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
};

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click" ,btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
};