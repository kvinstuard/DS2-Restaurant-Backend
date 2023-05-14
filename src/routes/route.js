const { Router } = require('express');
const router = Router();

//PARA USUARIOS 
const {registrarUsuario} = require('../controller/user');
 /*loginUsuario*/
// PARA ORDENES
const {traerOrdenes} = require('../controller/orders');
//PARA PRODUCTOS
const {registrarProducto, traerProductos} = require('../controller/products');

router.get('/ordenes', traerOrdenes );
router.get('/productos', traerProductos);
router.post('/usuario/register', registrarUsuario);
router.post('/productos/register', registrarProducto);



module.exports = router;