let btns = document.querySelectorAll(".buttons button");
let cat = document.getElementsByClassName("cat")[0];
click1 =btns[0];
click2=btns[1];

click1.onclick = kitty;
click2.onclick= tom;
function kitty(){
cat.classList.add("blue-eyes");
}
console.log(cat.classList.contains("blue-eyes"));

function tom(){
  cat.classList.toggle('blue-eyes');
}
console.log(cat.classList.contains("blue-eyes"));