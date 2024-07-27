const { Schema, model } = require('mongoose')

const PlanesSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        unique: true

    },
    precio: {
        type: Number,
        required: true
    },
    beneficios: {
        type: [String],
        required: true

    },

},
    {
        timestamps: true
    })

module.exports = model("Planes", PlanesSchema)    