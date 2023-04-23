const { Router } = require('express');
const express = require('express');
const router = express.Router();

//PARA USUARIOS 
const {registrarProducto, loginUsuario, traerIntegrantes,} = require('../controller/');
// PARA ORDENES
const {} = require('../controller/orders');
//PARA PRODUCTOS
const {} = require('../controller/products');


module.exports = router;

