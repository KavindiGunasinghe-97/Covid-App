const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const detailSchema = new Schema({
    username: { type: String, required: true },
    name: { type: String, required: true },
    nic: { type: String, required: true },
    age: { type: String, required: true },
    vtype: { type: String, required: true },
    vdosage: { type: String, required: true },
    pnumber: { type: String, required: true },
    district: { type: String, required: true },
    division: { type: String, required: true },
    grama: { type: String, required: true },
    nearest: { type: String, required: true },

}, {
    timestamps: true,
});

const Detail = mongoose.model('Detail', detailSchema);

module.exports = Detail;