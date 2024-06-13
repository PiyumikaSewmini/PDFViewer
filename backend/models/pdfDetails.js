const mongoose = require('mongoose');

const pdfDetailsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    pdf: { type: String, required: true }
});

module.exports = mongoose.model("Pdfdetails", pdfDetailsSchema);
