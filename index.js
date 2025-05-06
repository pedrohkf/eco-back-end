const express = require("express");
const mongoose = require("mongoose");
const connectMongoDB = require("./src/config/mongodb")
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 2700;
app.use(cors());
app.use(express.json());

const authRoutes = require("./src/routes/auth")
app.use("/", authRoutes)
const collectPointRoutes = require("./src/routes/collectPointRoutes");
app.use("/", collectPointRoutes)

connectMongoDB();

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

module.exports = app;