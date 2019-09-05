'use strict'
import express from 'express'
import bodyParser from 'body-parser'
import { authorRouter } from './controllers/authorController'
import { bookRouter } from './controllers/bookController';

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/tienda', { useNewUrlParser: true })
		.then(() => {
			console.log('conected to database successfully!')
		})
		.catch(err => console.error(err))

const port = process.env.port || 1337

const app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/authors', authorRouter)
app.use('/books',bookRouter)

app.get('/', (req, res)=> {
    res.send("API is running OK")
})

app.listen(port, ()=> {
    console.log('App is running in port: ' + port)
})