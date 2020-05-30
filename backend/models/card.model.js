const mongoose = require('mongoose')

const Schema = mongoose.Schema

const cardSchema = new Schema({
    cardName: { type: String },
    cardSet: { type: String },
    cardRarity: { type: String },
    regAmount: { type: Number },
    foilAmount: { type: Number }
})

const Card = mongoose.model('Card', cardSchema)
module.exports = Card