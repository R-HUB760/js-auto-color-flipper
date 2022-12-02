let btn = document.querySelector("#btn");
let color = document.querySelector("#color");

let colors = ["red", "green", "yellow", "blue", "navy", "white", "orange"];



function colorFlipper(){
  let simple;

  for (i = 0; i < 2; i++) {
    simple = colors[getColor()];
  }

  color.textContent = simple;
  document.body.style.backgroundColor = simple;
}

function getColor() {
  return Math.floor(Math.random() * colors.length);
}

// Changing color after 1.5 second
let time = setInterval(colorFlipper, 1500);

// Stop color changing
btn.addEventListener('click', ()  => {
  clearInterval(time);
});