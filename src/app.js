// Excusas
let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];
window.onload = function() {
  let excuse = getExcuse();
  document.getElementById("excuse").innerHTML = excuse;
};

function getExcuse() {
  let quien = who[Math.floor(Math.random() * who.length)];

  let accion = action[Math.floor(Math.random() * action.length)];

  let que = what[Math.floor(Math.random() * what.length)];

  let cuando = when[Math.floor(Math.random() * when.length)];

  let Excusafinal = quien + " " + accion + " " + que + " " + cuando;

  return Excusafinal;
}
