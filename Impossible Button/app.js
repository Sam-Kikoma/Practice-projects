const button = document.querySelector("button");
button.addEventListener("mouseover", function(){
    button.style.left = `${Math.floor((Math.random() * 1000) + 1)}px`
    button.style.top = `${Math.floor((Math.random() * 999) + 1)}px`
})