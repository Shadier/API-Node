import { Router } from 'express'
const List  = require('../models/list')


export const listRouter = Router()
listRouter.get('/', (req, res) => {
	res.status(200).send({
		message: 'Lista de List'
	});
})