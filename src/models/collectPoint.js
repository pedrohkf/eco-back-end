const mongoose = require('mongoose')

const collectPointSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    longitude: {
        type: String,
        required: false
    },
    latitude: {
        type: String,
        required: false
    },
    country: {
        type: String,
        required: false
    },
    state: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: false
    },
    street: {
        type: String,
        required: false
    },
    houseNumber: {
        type: String,
        required: false
    },
    cep: {
        type: String,
        required: false
    },
    phoneNumber: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    openingHours: {
        type: String,
        required: false
    },
    imgs: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
})
module.exports = mongoose.model('collectPoint', collectPointSchema)