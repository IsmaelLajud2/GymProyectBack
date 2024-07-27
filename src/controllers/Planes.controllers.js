const Planes = require('../model/PlanesModel')

const getAllPlanes = async (req, res) => {
    try {
        const response = await Planes.find()
        if (!response) {
            res.status(404).json("Plan no encontrado")
        }
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const createPlan = async (req, res) => {

    const { nombre, precio, beneficios } = req.body
    try {

        const newPlan = new Planes({
            nombre,
            precio,
            beneficios
        })

        if (!newPlan) {
            res.status(404).json("No se pudo crear el plan")
        }
        const savePLan = await newPlan.save()
        res.status(201).json(savePLan)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deletePlanByName = async (req, res) => {
    try {
        const nombre = req.params
        const borrarPlan = await Planes.findOneAndDelete(nombre)
        if (!borrarPlan) {
            res.status(404).json("No se pudo borrar el plan")
        }
        return res.status(203).json("Borrado")
    } catch (error) {

    }
}

const editPlanById = async (req, res) => {
    try {
        const { id } = req.params
        const payload = req.body
        const queryOptions = { returnDocument: "after" }

        const editarPlan = await Planes.findByIdAndUpdate(id, payload, queryOptions)
        if (!editarPlan) {
            res.status(404).json("No se pudo encontrar el plan")
        }
        res.status(201).json(editarPlan)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
module.exports = {
    getAllPlanes,
    createPlan,
    deletePlanByName,
    editPlanById
}