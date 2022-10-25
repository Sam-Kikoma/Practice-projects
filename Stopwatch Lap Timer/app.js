window.onload = function () {
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");
    const tens = document.getElementById("tens");
    const startBtn = document.getElementById("start-btn");
    const stopBtn = document.getElementById("stop-btn");
    const resetBtn = document.getElementById("reset-btn");
    let minutesSet = 00;
    let secondsSet = 00;
    let tensSet = 00;
    let interval;

    startBtn.onclick = function(){
        // clearInterval(interval);
        interval = setInterval(startTimer, 10);
    }
    stopBtn.onclick = function(){
        clearInterval(interval)
        const laps = document.getElementById("laps");
        const li = document.createElement("li");
        li.innerHTML = `Lap: <span>${minutes.innerHTML} ${seconds.innerHTML} ,${tens.innerHTML}</span>`;
        laps.appendChild(li);
    }
    resetBtn.onclick = function(){
        clearInterval(interval);
        minutesSet = "00";
        secondsSet = "00";
        tensSet = "00";
        minutes.innerHTML = minutesSet;
        seconds.innerHTML = secondsSet;
        tens.innerHTML = tensSet;
        document.getElementById("laps").innerHTML = "";
    }

    // Start timer
    function startTimer(){
        tensSet++;
        if(tensSet < 9){
            tens.innerHTML = "0" + tensSet;
        }
        if(tensSet > 9){
            tens.innerHTML = tensSet;
        }
        if(tensSet > 99){
            secondsSet++;
            seconds.innerHTML = "0" + secondsSet;
            tensSet = 0;
            tens.innerHTML = "0" + 0;
        }
        if(secondsSet > 9){
            seconds.innerHTML = secondsSet;
        }
        if(secondsSet == 60){
            minutesSet++;
            minutes.innerHTML = "0" + minutesSet;
            secondsSet = 0;
        }
        if(minutesSet > 9){
            minutes.innerHTML = minutesSet;
        }

    }
}
