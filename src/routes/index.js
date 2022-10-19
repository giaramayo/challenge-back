const express = require('express');

const router = express.Router();

var clienteController = require('../controllers/cliente.controllers')

//Consulta
router.get( '', clienteController.getAll);
router.get('/search/:nombre/:apellido', clienteController.getApellidoNombre);
router.get('/search/:id', clienteController.getId);

//Agregar
router.post('/add', clienteController.create);

//Eliminar
router.delete('/delete/:nombre/:apellido', clienteController.deleteCliente);

router.delete('/delete/:id', clienteController.deleteId);

//Actualizar
router.put('/update/:id', clienteController.update);

module.exports = router;