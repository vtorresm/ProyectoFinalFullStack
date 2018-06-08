import { Request, Response, NextFunction } from "express"

export interface IError extends Error {
	status?: number
}

const ErroresHandler = {
	noEncontrado: (req: Request, res: Response, next: NextFunction) => {
		const error: IError = new Error("Ruta no encontrada")
		error.status = 404

		next(error)
	},
	cacheo: (ftn: (req: Request, res: Response, next: NextFunction) => Promise<any>) => {
		return (req: Request, res: Response, next: NextFunction) => {
			return ftn(req, res, next).catch(error => {
				error.status = 500
				next(error)
			})
		}
	},
	general: (error: IError, req: Request, res: Response, next: NextFunction) => {
		if (process.env.NODE_ENV === "development") {
			res
				.status(error.status)
				.json({
					name: error.name,
					message: error.message,
					status: error.status,
					stack: error.stack
				})
		} else {
			res
				.status(error.status)
				.json({
					name: error.name,
					message: error.message,
					status: error.status
				})
		}
	}
}

export { ErroresHandler }