const myDeck = {
    deck: [],
    drawnCards: [],
    suits: ["clubs","spades", "hearts", "diamonds"],
    values: "2,3,4,5,6,7,8,9,10,J,Q,K,A",
    initializeDeck(){
        const{suits,values,deck} = this;
        for(let value of cardValue.split(",")){
            for(let suit of cardSuit){
                deck.push({value, suit})
            }
        }
    },
    drawCard(){
        const card = this.deck.pop();
        this.drawnCards.push(card);
        return card;
    }
}