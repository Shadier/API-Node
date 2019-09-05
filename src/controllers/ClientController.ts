import { Router } from 'express'
const Client  = require('../models/client')


export const clientRouter = Router()
clientRouter.get('/', (req, res) => {
	res.status(200).send({
		message: 'Lista de clientes'
	});
})