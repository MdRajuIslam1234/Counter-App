//Fist JavaScript Project

//all nodes select

let display = document.getElementById("display");
let increase = document.getElementById("increase");
let decrease = document.getElementById("decrease");
let reset = document.getElementById("reset");

//All functions

let num = -1;
function increment(){
 num++;
 display.innerText = num;
 increase.style.backgroundColor = randomColor();
 display.style.color = randomColor()
 decrease.style.backgroundColor = "whitesmoke"
 display.style.backgroundColor = "whitesmoke"
}

function decrement(){
  num--;
  display.innerText = num;
  decrease.style.backgroundColor = randomColor();
 display.style.color = randomColor()
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

