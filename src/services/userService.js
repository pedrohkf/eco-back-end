const db = require("../config/firebase");

const addUser = async (userData) => {
    const ref = db.ref("usuarios");
    return ref.push(userData);
}
module.exports = { addUser }