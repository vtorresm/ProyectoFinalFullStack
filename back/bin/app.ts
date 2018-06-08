import { Application } from "express"
import express = require("express")
import bodyParse = require("body-parser")
import { ruteador } from "../rutas/ferreteria.routes"
import { ErroresHandler } from "../manejadores/errores.handler"
import cors = require("cors")

const corsOpciones = {
	origin: "*"
}

const app: Application = express()

app.use(cors(corsOpciones))
app.use(express.static("./publico"))
app.use(bodyParse.json())
app.use(bodyParse.urlencoded({ extended: true }))

app.use("/", ruteador)

app.use(ErroresHandler.noEncontrado)
app.use(ErroresHandler.general)

export { app }