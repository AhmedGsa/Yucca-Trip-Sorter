const { sortCards } = require("../utils/card-sorter");
const { journeyDisplayer } = require("../utils/journey-displayer");
const data = require('../data/cards.json');

const displayTrip = (req, res) => {
    const {from, to} = req.body;
    try {
        const sortedCards = sortCards(from, to, data);
        if(sortedCards.length === 0) {
            throw new Error("No trip found");
        }
        const journey = journeyDisplayer(sortedCards);
        return res.status(200).json({journey})
    } catch (error) {
        return res.status(400).json({error: error.message});
    }
}

module.exports = {
    displayTrip
}