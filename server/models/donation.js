let mong = require('mongoose');
let Schema = mong.Schema;

let donSchema = new Schema({
    currency: { type: String, required: true },
    amount: { type: Number, required: true }
});

module.exports = mong.model('donation', donSchema);