// A pangram is a sentence that contains all letters of the English Alphabet

function isPangram(sentence){
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    lowerCase = sentence.toLowerCase();
    for(let letter of alphabet){
        if(lowerCase.indexOf(letter) === -1){
            return false
        }
    }
    return true;
}