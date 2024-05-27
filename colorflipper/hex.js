const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  // console.log(hexColor);

  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}


// const newHex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// const newBtn = document.getElementById("newBtn");
// const newColor = document.querySelector(".newColor");

// newBtn.addEventListener("click", function () {
//     let newHexColor = "#";
//     for (let i = 0; i < 6; i++){
//         newHexColor += newHex[getDifferentNumber];
//     }
//     // console.log(newHexColor)
//      color.textContent = hexColor;
//   document.body.style.backgroundColor = hexColor;
// })

// const getDifferentNumber = () => {
//     return Math.floor(Math.random() * newHex.length)
// }