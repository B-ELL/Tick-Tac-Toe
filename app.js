let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset-btn");
let turn=true;
let newbtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msgContainer");
let msg=document.querySelector("#msg");
const win_pattern=[
    [0,1,2],
    [0,3,5],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box) => {
    box.addEventListener("click" , () =>{
        if(turn){
            box.innerText="O";
            turn=false;
        }
        else{
            box.innerText="X";
            turn=true;
        }
        box.disabled=true;

        checkWinner();
    });
});

const showwinner = (winner) => {
    msg.innerText= `Congrulation Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disable_btn();
}

const disable_btn = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enable_btn = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const reset_game = () =>{
    turn=true;
    enable_btn();
    msgContainer.classList.add("hide");
}

const checkWinner = () => {
    for(pattern of win_pattern){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1 != "" &&  pos2 != "" &&pos3!= ""){
            if(pos1==pos2 &&pos2==pos3){
                showwinner(pos1);
            }
        }
    }
}

reset.addEventListener("click", reset_game);
newbtn.addEventListener("click", reset_game);