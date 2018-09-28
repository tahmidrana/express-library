const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = process.env.PORT || 3000
const mongoose = require('mongoose')
const app = express()

//import routes
var usersRouter = require('./api/routes/users')
var booksRouter = require('./api/routes/books')
var authRouter = require('./api/routes/auth')

app.use(cors())

mongoose.connect('mongodb://localhost/librarymanagement', {
    useNewUrlParser: true
})
const db = mongoose.connection
db.on('error', (err) => {
    console.log(err)
})

db.once('open', () => {
    console.log('Database Connection Established')
})

app.use(morgan('dev'))

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

//use routes
app.use('/api/users', usersRouter)
app.use('/api/books', booksRouter)
app.use('/auth', authRouter)

app.listen(PORT, () => {
    console.log(`Server is running on PORT : ${PORT}`)
})
