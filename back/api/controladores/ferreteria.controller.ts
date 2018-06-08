import { Request, Response, NextFunction } from "express"
import { Ferreteria } from "../modelos/ferreteria.model"

const FerreteriaController = {
	listar: async (req: Request, res: Response) => {
		const ferreteriaProd = await Ferreteria.find()

		res.json(ferreteriaProd)
	},
	detallar: async (req: Request, res: Response) => {
		const _id = req.params.id
		const ferreteriaProd = await Ferreteria.find({ _id })

		res.json({ status: 200, ferreteriaProd })
	},
	insertar: async (req: Request, res: Response) => {
		const ferreteriaProd = new Ferreteria(req.body)
		console.log(req.body)
		await ferreteriaProd.save()

		res.json({ status: 200, message: 
							`Producto de ferreteria creado: ${ferreteriaProd.titulo}`})
	},
	actualizar: async (req: Request, res: Response) => {
		const _id = req.params.id
		await Ferreteria.findOneAndUpdate({ _id }, req.body)

		res.json({ status: 200, message: "Registro actualizado" })
	},
	eliminar: async (req: Request, res: Response) => {
		const _id = req.params.id
		await Ferreteria.findOneAndRemove({ _id })

		res.json({ status: 200, message: "Registro eliminado" })
	}
}

export { FerreteriaController }