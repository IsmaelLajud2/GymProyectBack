const { Router } = require('express')
const { getAllPlanes, createPlan, deletePlanByName, editPlanById } = require('../controllers/Planes.controllers')
const route = Router()

route.get('/getAll', getAllPlanes)
route.post('/create', createPlan)
route.delete('/delete/:nombre', deletePlanByName)
route.put('/edit/:id', editPlanById)

module.exports = route
