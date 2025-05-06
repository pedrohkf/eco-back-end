const admin = require("firebase-admin");
const serviceAccount = require("../credentials/firebaseKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://eco-green-96959-default-rtdb.firebaseio.com"
});

module.exports = admin;

