import express from 'express'
import bodyParser from 'body-parser'
import { clientRouter } from './controllers/ClientController'


const app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/clients', clientRouter)
