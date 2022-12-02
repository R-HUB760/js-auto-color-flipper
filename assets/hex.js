let btn = document.querySelector("#btnHEX");
let color = document.querySelector("#colorhEX");

let colors = [0,1,2, 3, 4, 5, 6, 7, 8,9,"A", "B", "C", "D", "E", "F"];


function colorFlipperHex(){
  
  let simple = "#";

  for (i = 0; i < 6; i++) {
    simple += colors[getColor()];
  }

  color.textContent = simple;
  document.body.style.backgroundColor = simple;
}

function getColor() {
  return Math.floor(Math.random() * colors.length);
}

// change color after 1 second after
let time = setInterval(colorFlipperHex, 1500);


btn.addEventListener('click', ()  => {
  clearInterval(time);
});