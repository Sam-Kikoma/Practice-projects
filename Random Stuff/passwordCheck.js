// Password Validator
// The password should be 8 characters or longer
// The password should not contain the username
// The password should not have any white space

function isValidPassword(username, password){
    if(whiteSpace(password) && length(password) && check(username, password) === true){
        console.log("Valid Password");
    }
    else{
        console.log("Inavlid Password")
    }
}

function whiteSpace(value){
    let white = value.indexOf(' ')
    if(white = 0){
        return true
    }
}

function length(value){
    if ((value.length) >= 8){
        return true;
    }
}

function check(value1, value2){
    if(value2.includes(value1)){
        return false
    }
    else{
        return true
    }
}

isValidPassword("wasabi", "goat8 master")