let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-button");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg= document.querySelector("#msg");

let turn0= true; //playerX,player0
let count = 0;


const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
    
];
const resetGame = () => {
    turn0=true;
    count =0;
    enabledBoxes();
   msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("box was clicked");
        box.innerText = "abcd";
       if(turn0){
        box.innerText="O";
        turn0=false;
       }else{
        box.innerText="X";
        turn0=true;
       }
       box.disabled=true;
       count++;
       console.log(count);

       let isWinner = checkWinner();

       if(count === 9 && isWinner !== 1){
        gameDraw();
       }
    });
});


const gameDraw = (winner) => {
    msg.innerText =`Game was  a Draw.`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
};

const disabledBoxes = () => {
    for (let box of boxes) {
        box.disabled=true;
    }
};

const enabledBoxes = () => {
    for (let box of boxes) {
        box.disabled=false;
        box.innerText="";
    }
};
const showWinner = (winner) => {
    msg.innerText =`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
    
};


const checkWinner =() => {
    for(let pattern of winPatterns) {
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
        //     );
            let pos1Val=boxes[pattern[0]].innerText;
            let pos2Val=boxes[pattern[1]].innerText;
            let pos3Val=boxes[pattern[2]].innerText;

            if(pos1Val != "" && pos1Val != "" && pos1Val != "" ){
                if (pos1Val === pos2Val && pos2Val === pos3Val){
                    // console.log("Winner", pos1Val);
                    showWinner(pos1Val);
                    return true;
                }
            }
    }
};

newGameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);

