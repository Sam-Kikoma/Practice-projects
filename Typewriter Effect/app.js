let text = document.querySelector("h2");
const textArray = text.textContent.split("");
let timeLooper;

text.innerHTML = "";

function typeWriter(){
    if(textArray.length > 0){
        text.innerHTML += textArray.shift();
    }
    else{
        clearTimeout(timeLooper);
    }

    timeLooper = setTimeout('typeWriter()', Math.floor(Math.random() * (200,400)))
}

typeWriter();