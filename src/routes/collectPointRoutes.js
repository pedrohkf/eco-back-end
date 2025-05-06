const express = require('express');
const router = express.Router();
const CollectPoint = require('../models/collectPoint');

router.get('/collectPoints', async (req, res) => {
    try {
        const collectsPoints = await CollectPoint.find();
        res.status(200).json(collectsPoints);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/collectPoints', async (req, res) => {
    const { name, longitude, latitude, country, state, city, street, houseNumber, cep, phoneNumber, email, openingHours, imgs, evaluation } = req.body;

    try {
        const newCollectPoint = new CollectPoint({ name, longitude, latitude, country, state, city, street, houseNumber, cep, phoneNumber, email, openingHours, imgs, evaluation });
        await newCollectPoint.save();
        res.status(201).json(newCollectPoint);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;