const data = require('../data/cards.json');

const sortCards = (from, to, cards) => {
    const possibleCards = cards.filter((card) => card.from === from);
    if(possibleCards.length === 0) {
        return [];
    } else {
        // This will check if there is a direct trip
        const directTrip = possibleCards.find((card) => card.to === to);
        if(directTrip) {
            return [directTrip];
        }
        for(const card of possibleCards) {
            if(card.to === to) {
                return [card];
            } else {
                const newCards = cards.filter((card) => card.from !== from);
                // Using recusive function will allow us to go through all the cards to check all the possible paths
                const sortedCards = sortCards(card.to, to, newCards);
                if(sortedCards.length > 0) {
                    return [card, ...sortedCards];
                }
            }
        }
        return [];
    }
    // This loop will run until the nextCard.to is equal to the to parameter (Until we reach the destination) (Non recursive solution)
    // let sortedCards = [];
    // const firstCard = cards.find((card) => card.from === from);
    // let nextCard = firstCard;
    // while (nextCard.to !== to ) {
    //     sortedCards.push(nextCard);
    //     nextCard = data.find((card) => card.from === nextCard.to);
        
    //     if(!nextCard) {
    //         throw new Error("No trip found");
    //     }
    // }
    // sortedCards.push(nextCard);
    // return sortedCards;
}

module.exports = {
    sortCards
}