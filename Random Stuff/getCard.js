// Write a getCard() function which returns a random playing card object, like:
// 		{
// 			value: 'K'
// 			suit: 'clubs'
// 		}
//Pick a random value from:
//----1,2,3,4,5,6,7,8,9,10,J,Q,K,A
//Pick a random suit from:
//----clubs,spades, hearts, diamonds
//Return both in an object

function random(arr){
    const value = Math.floor(Math.random() * arr.length);
    return arr[value];
}

function getCard(){
    const cardValue = ["1","2","3","4","5","6","7","8","9","10","J","Q","K","A"];
    const cardSuit = ["clubs","spades", "hearts", "diamonds"];
    return {Value: random(cardValue), Suit: random(cardSuit)};
}


