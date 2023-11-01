const btnCor = document.querySelector("#btnCor");
const spanCor = document.querySelector("span#cor");
const main = document.querySelector("main");
const hexadecimal = [
    "1","2","3","4","5","6","7","8","9","0"
    ,"a","b","c","d","e","f"
]

function trocar(){
    let hexCor = "#"
    for (let i = 0; i <= 5; i++) {
      hexCor += hexadecimal[Math.floor(Math.random()*hexadecimal.length)]
    }
    spanCor.textContent = hexCor;
    main.style.backgroundColor = hexCor;
}





btnCor.addEventListener("click",trocar)