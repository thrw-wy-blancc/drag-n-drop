const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

for(empty of empties){
    empty.addEventListener("dragenter", dragEnter);
    empty.addEventListener("dragover", dragOver);
    empty.addEventListener("dragleave", dragLeave);
    empty.addEventListener("drop", dragDrop);
}

function dragStart(){
    console.log("dragStart");
    this.className += " hold"
    setTimeout(() => this.className = "invisible", 0)
}
function dragEnd(){
    this.className = "fill";
    console.log("dragEnd");    
}
function dragOver(e){
    e.preventDefault();
    console.log("dragOver");
}
function dragEnter(e){
    e.preventDefault();
    this.className += " hovered"
    console.log("dragEnter");
}
function dragLeave(){
    console.log("dragLeave");
    this.className ="empty"
}
function dragDrop(){
    console.log("dragDrop");
    this.className = "empty";
    this.append(fill)
}