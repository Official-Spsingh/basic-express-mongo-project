const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userDataSchema = new Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
}, {
    timestamps: true,
});

const User = mongoose.model('userData', userDataSchema);

module.exports = User;