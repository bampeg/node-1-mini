const express = require('express')
const bodyParser = require('body-parser')
const booksController = require('./controllers/books_controller')

const app = express() //express is a node module that allows us to create a server

app.use( bodyParser.json() ) //middleware

app.get('/api/books', booksController.read)
app.post('/api/books', booksController.create)
app.put('/api/books/:id', booksController.update)
app.delete('/api/books/:id', booksController.delete)


const port = 3000
app.listen( port, ()=>{ console.log(`Server listening on port ${port}`) } )
