// A pangram is a sentence that contains all letters of the English Alphabet

function isPangram(sentence){
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    for(let letter of alphabet){
        if(sentence.indexOf(alphabet) === -1){
            return false
        }
    }
    return true;
}