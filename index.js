
let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let msg=document.querySelector(".message");
let player0=true;
var count=0;
const winning_pattern=[
      [0,1,2],
      [0,4,8],
      [0,3,6],
      [3,4,5],
      [6,7,8],
      [2,5,8],
      [1,4,7],
      [2,4,6]
];
const disable_boxes=()=>{
   for(let box of boxes){
      box.disabled=true;
   }
}
const enable_boxes=()=>{
   for(let box of boxes){
      box.disabled=false;
      box.innerHTML="";
   }
}
boxes.forEach((box)=>{
   box.addEventListener("click",()=>{
    if(player0){
      box.style.color="#191970";
     box.innerHTML="O";
     player0=false;
    }
    else{
     box.innerHTML="S";
     box.style.color="#c71585";
     player0=true;
    }
    box.disabled=true;
    count++;
    checkWinner();
    if(count==9){
            msg.innerHTML="Game Over!No winner in game";
            document.querySelector(".msg-container").classList.remove("hide");
         }
   })
})
const printwinner=(winner)=>{
   msg.innerHTML=`Game Over!Winner is player:${winner}`;
   document.querySelector(".msg-container").classList.remove("hide");
   disable_boxes();
}
const checkWinner=()=>{
   for(let pattern of winning_pattern){
    let pos1=boxes[pattern[0]].innerText;
    let pos2=boxes[pattern[1]].innerText;
    let pos3=boxes[pattern[2]].innerText;
    if(pos1!="" && pos2!="" && pos3!=""){
       if(pos1===pos2 && pos2===pos3){
         printwinner(pos1);
       }
       
    }  
}
}
function resetgame() {
   player0=true;
   count=0;
   enable_boxes();
   document.querySelector(".msg-container").classList.add("hide");  
  } 
document.querySelector("#reset").addEventListener("click", resetgame);
 
