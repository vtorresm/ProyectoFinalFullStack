const mongoose = require('mongoose');
const { Schema } = mongoose;

const ferreteriaSchema = new Schema({
    nomProdFerreteria: { type: String, required: true},
    descripcion: { type: String, required: true },
    marca: { type: String, required: true },
    precio: { type: Number, required: true}
});

module.exports = mongoose.model('Ferreteria', ferreteriaSchema);