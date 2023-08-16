const data = require('../data/cards.json');
const fs = require('fs');

const addCard = (req, res) => {
    const {from, to, transportationType, tripNumber, gate, seat, baggage} = req.body;
    const newCard = {
        id: data.length + 1,
        from,
        to,
        transportationType,
        details: {
            tripNumber,
            gate,
            seat,
            baggage
        }
    }
    data.push(newCard);
    fs.writeFileSync('./data/cards.json', JSON.stringify(data, null, 4));
    return res.status(200).json({message: "Card added successfully"});
}

module.exports = {
    addCard
}