const express = require('express')
const app = express()
const port = 8320
require('dotenv').config()
require('../db/dbConnect')
app.use(express.json())
const morgan = require('morgan')
const cors = require('cors')

app.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET,POST,PUT,DELETE'
}))


app.use(morgan("dev"))

const planesRutas = require('../routes/planes.routes')

app.use('/planes', planesRutas)

app.listen(port, () => {

    console.log(`Escuchando en el puerto http://localhost:${port}`)
})
