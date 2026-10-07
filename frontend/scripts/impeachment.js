const themechanger = document.getElementById("themechanger");
const body = document.body;
const board = document.getElementById("board");
const p = document.querySelectorAll("p");


const titulo = document.querySelector(".titulo");
const autor = document.querySelector(".autor");
const data = document.querySelector(".data");
const redacao = document.querySelector(".redacao");
let isDarkMode = false;

themechanger.addEventListener("click", function () {

    isDarkMode = !isDarkMode;

    if (isDarkMode == true) {

        themechanger.src = "../assets/darkmode.webp";
        body.style.backgroundColor = "rgb(26, 26, 26)";
        board.style.backgroundColor = "rgb(48, 48, 48)";

        p.forEach(function(p){

            p.style.color = "rgb(255, 255, 255)";
        })

        titulo.style.color = "white";  
        autor.style.color = "white";
        data.style.color = "white";
        redacao.style.color = "white";
        
        

    } else {

        themechanger.src = "../assets/lightmode.webp";
        body.style.backgroundColor = "white";
        board.style.backgroundColor = "rgb(224, 224, 224)";

        p.forEach(function(p){

            p.style.color = "black";
        })

        titulo.style.color = "black";
        autor.style.color = "black";
        data.style.color = "black";
        redacao.style.color = "black";
        
    }
})



