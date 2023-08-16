const journeyDisplayer = (cards) => {
    const journeyArr = cards.map((card, index) => {
        console.log(card);
        const gate = card.details.gate ? `Gate ${card.details.gate}, ` : '';
        const seat = card.details.seat ? `seat ${card.details.seat}. ` : 'No seat assignment.';
        const tripNumber = card.details.tripNumber ? `${card.details.tripNumber}, ` : '';
        const baggage = card.details.baggage ? (card.details.baggage !== "auto" ? `Baggage drop at ticket counter ${card.details.baggage}.`  : 'Baggage will be automatically transferred from your last leg.') : '';
        const step = `Take ${card.transportationType} ${tripNumber}from ${card.from} to ${card.to}.`
        return `${index + 1}- ${step} ${gate}${seat}${baggage}`
    })
    journeyArr.push(`${journeyArr.length + 1}- You have arrived at your final destination.`)
    return journeyArr;
}

module.exports = {
    journeyDisplayer
}