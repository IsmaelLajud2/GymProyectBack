const mongoose = require('mongoose')

const connect = async () => {
    try {
        await mongoose.connect(process.env.DB_URI)
        console.log("Conectado a la base de datos")
    } catch (error) {
        throw new Error({ message: error.message })

    }
}

connect()