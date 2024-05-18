let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newgame=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#message");

let turn0=true;
let count = 0;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];


const resetGame =() =>{
    turn0=true;
    count = 0;
    enableBox();
    msgContainer.classList.add("hide");
}
boxes.forEach((box) => {
     
    box.addEventListener("click", () => {
      if (turn0) {
        //playerO
        box.innerText = "O";
        turn0 = false;
      } else {
        //playerX
        box.innerText = "X";
        turn0 = true;
      }
      box.disabled = true;
      count++;
  
      let isWinner = checkWinner();
  
      if (count === 9 && !isWinner) {
        gameDraw();
      }
    });
  });
  
  const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBox();
  };


const disableBox= () =>{
    for (let box of boxes){
        box.disabled=true;
    }
}
const enableBox= () =>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}


const showWinner=(winner) =>{
    msg.innerText=`Congratulations Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBox();
};





const checkWinner=() =>{
    for(let pattern of winPatterns){

    let pos1Value=boxes[pattern[0]].innerText;
    let pos2Value=boxes[pattern[1]].innerText;
    let pos3Value=boxes[pattern[2]].innerText;

    if(pos1Value!="" && pos2Value!="" && pos3Value!=""){
        if(pos1Value === pos2Value && pos2Value === pos3Value){
            console.log("winner"+pos1Value);
            showWinner(pos1Value);

        }

    }
}

}

newgame.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);

