import { Router } from 'express'
const Product  = require('../models/product')


export const productRouter = Router()
productRouter.get('/', (req, res) => {
	res.status(200).send({
		message: 'Lista de productos'
	});
})