const mongoose = require("mongoose")

const esquema = new mongoose.Schema({
	nomProdFerreteria: {
		type: String,
		required: true,
		trim: true
	},

	descripcion: String,
	marca: String,
	precio: Number,
	foto: String
})

const Ferreteria = mongoose.model("Ferreteria", esquema)

export { Ferreteria }