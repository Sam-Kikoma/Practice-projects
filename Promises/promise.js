const newDog = new Promise((resolve,reject) => {
    const rand = Math.random();
    if(rand < 0.5){
        resolve()
    }
    else{
        reject()
    }
})

newDog.then(() => {
    console.log("New Doggo");
})
newDog.catch(() => {
    console.log("No Doggo")
})