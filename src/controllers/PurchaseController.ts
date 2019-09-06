import { Router } from 'express'
const Purchase  = require('../models/Purchase')


export const purchaseRouter = Router()
purchaseRouter.get('/', (req, res) => {
	res.status(200).send({
		message: 'purchasea de List'
	});
})