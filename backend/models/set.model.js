const mongoose = require('mongoose')

const Schema = mongoose.Schema

const expansionSchema = new Schema({
    expansionName: { type: String },
    numOfCards: { type: String },
    cards: [],
    })

const Expansion = mongoose.model('Expansion', expansionSchema)
module.exports = Expansion