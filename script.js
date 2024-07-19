
// click on button and change background color of page

let red = document.querySelector("#red");
let pink = document.querySelector("#pink");
let container = document.querySelector(".container");

red.onclick = () => {
    container.style.backgroundColor = "red";
}
pink.onclick = () => {
    container.style.background = "pink";
}