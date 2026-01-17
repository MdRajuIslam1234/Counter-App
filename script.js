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
 decrease.style.backgroundColor = "whitesmoke"
 display.style.backgroundColor = "whitesmoke"
}

function decrement(){
  num--;
  display.innerText = num;
  parent.style.backgroundColor = randomColor();
 increase.style.backgroundColor = "whitesmoke"
 display.style.backgroundColor = "whitesmoke"
}

function resets(){
  num = -1; 
  display.innerHTML = "Let's Start";
  increase.style.backgroundColor = "whitesmoke"
  decrease.style.backgroundColor = "whitesmoke"
  display.style.color = "darkblue"

}


function randomColor(){
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  return (`rgb(${r},${g},${b})`);
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


