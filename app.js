let boxes=document.querySelectorAll(".box");
let refresh=document.querySelector("#refresh");
let msg_container=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let newBtn=document.querySelector("#new-btn");
let flagO=true;
const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];



boxes.forEach((box) => {
    box.addEventListener("click", ()=> {
    console.log("box was clicked");
    if(flagO) {
        box.innerText="X";
        flagO=false;
    }
    else {
        box.innerText="O";
        flagO=true;
    }
     checkWinner();
    });
});

const refreshGame = () => {
     turnO=true;
    enableBoxes();
    msg_container.classList.add("hide");
}


const showWinner = (winner) =>{
    msg.innerText=`Congratulations,Winner is ${winner}`;
    msg_container.classList.remove("hide");
    disableBoxes();
}

const checkWinner=()=> {
    for(let pattern of winPatterns) {
     let posVal1=boxes[pattern[0]].innerText;
     let posVal2=boxes[pattern[1]].innerText;
     let posVal3=boxes[pattern[2]].innerText;
     
     if (posVal1!="" && posVal2!="" && posVal3!="") {
        if(posVal1==posVal2 && posVal2==posVal3) {
            console.log("winner",posVal3);
            showWinner(posVal3);
        }
    }
}
};

const disableBoxes = () => {
    for(box of boxes) {
        box.disabled=true;
    }
};

const enableBoxes = () => {
    for(box of boxes) {
        box.disabled=false;
        box.innerText="";
    }
};

newBtn.addEventListener("click", refreshGame);
refresh.addEventListener("click", refreshGame);
