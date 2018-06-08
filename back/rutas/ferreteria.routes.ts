import express = require("express")
import { FerreteriaController } from "../api/controladores/ferreteria.controller"
import { ErroresHandler } from "../manejadores/errores.handler"
import { subirImagen, cambiarTamano } from "../manejadores/imagenes.handler"

const ruteador = express.Router()

ruteador.get("/", ErroresHandler.cacheo(FerreteriaController.listar))
ruteador.get("/:id", ErroresHandler.cacheo(FerreteriaController.detallar))
ruteador.post("/", subirImagen, cambiarTamano, ErroresHandler.cacheo(FerreteriaController.insertar))
ruteador.put("/:id", ErroresHandler.cacheo(FerreteriaController.actualizar))
ruteador.delete("/:id", ErroresHandler.cacheo(FerreteriaController.eliminar))

export { ruteador } 