import multer = require("multer")
import { IError } from "./errores.handler"
import { Request, Response, NextFunction } from "express"
import uuid = require("uuid")
import jimp = require("jimp")

const multerOpciones = {
	storage: multer.memoryStorage(),
	fileFilter(req, file, next) {
		const esFoto: boolean = file.mimetype.startsWith("image/")

		if (esFoto) {
			return next(null, true)
		} else {
			const error: IError = new Error("El archivo no es una imagen")
			error.status = 500
			next(error, false)
		}
		//console.log(file)
	}
	//fileFilter: (req, file, next) => {}
}

const subirImagen = multer(multerOpciones).single("foto")

const cambiarTamano = async (req: Request, res: Response, next: NextFunction) => {
	if (!req.file) {
		return next()
	}
	//console.log(req.file)
	// image/jpeg
	// ["image", "jpeg"]
	const extension = req.file.mimetype.split("/")[1]
	const nombreArchivo = uuid.v4()

	req.body.foto = `${nombreArchivo}.${extension}`

	const foto = await jimp.read(req.file.buffer)
	await foto.resize(500, jimp.AUTO)
	await foto.write(`./publico/uploads/${req.body.foto}`)

	next()
}

export { subirImagen, cambiarTamano }