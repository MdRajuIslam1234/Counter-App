//Fist JavaScript Project

//all nodes select

let display = document.getElementById("display");
let increase = document.getElementById("increase");
let decrease = document.getElementById("decrease");
let reset = document.getElementById("reset");
let parent = document.getElementById("parent-div");

//All functions

let num = 0;
function increment(){
 num++;
 display.innerText = num;
 parent.style.backgroundColor = randomColor();
 display.style.color = "darkgreen";
}

function decrement(){
  num--;
  display.innerText = num;
  parent.style.backgroundColor = randomColor();
 display.style.color = "red";
}

function resets(){
  num = 0; 
  display.innerHTML = "Let's Start";
  parent.style.backgroundColor = "bisque"
  display.style.color = "darkblue";
}


function randomColor(){
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
 let a = Math.random();
  return (`rgba(${r},${g},${b},${a})`);
}

function doubleClick(){
  display.innerHTML = "Double clicked 😏"
}
// AddEventListener

increase.addEventListener("click", increment)
decrease.addEventListener("click", decrement)
reset.addEventListener("click", resets)

increase.addEventListener("dblclick", doubleClick);
decrease.addEventListener("dblclick", doubleClick);


