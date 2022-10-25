// Selectors
const checkbox = document.getElementById("checkbox");
const submitBtn = document.querySelector("button[type=submit]");
const elements = document.querySelectorAll(".element");
const selectColor = document.getElementById("selectColor");
 
// Disable checkbox and submit btn
checkbox.disabled = true;  
submitBtn.disabled = true; 

elements.forEach(function(element){
    const color = getRandomColor();
    element.style.backgroundColor= color;
    element.innerHTML = color;
    selectColor.innerHTML = color; 
})
// Generate random color
function getRandomColor(){
    const letter = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letter[Math.floor(Math.random() * 16)]
    }
    return color; 
}

// Check the color
elements.forEach(function(element){
    element.addEventListener("click", function(){
        if(element.innerHTML === selectColor.innerHTML){
            checkbox.checked = true;
            submitBtn.disabled = false;
            submitBtn.classList.add("btn-success");
        }
        else{
            alert("Hello fellow robot");
            location.reload(true);
        }

    })
})
 
