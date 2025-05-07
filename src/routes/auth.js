const express = require("express");
const router = express.Router();
const admin = require("../config/firebase");
const User = require("../models/user");

router.post("/login", async (req, res) => {
    const { token } = req.body;

    try {
        const decoded = await admin.auth().verifyIdToken(token);
        res.json({ uid: decoded.uid, email: decoded.email });
    } catch (error) {
        res.status(401).json({ error: "Token inválido" })
    }
})

router.post("/register", async (req, res) => {
    const { name, email, photo } = req.body;

    try {
        let user = await User.findOne({ email });

        if (!user) {
            user = new User({
                name,
                email,
                photo,
            });

            await user.save();
        }

        res.status(200).json({ message: "Usuário salvo", email: user.email })
    } catch (error) {
        console.error("Erro ao salvar usuário: ", error);
        res.status(500).json({ message: "Erro ao salvar usuário" });

    }
})

module.exports = router;