const { Router } = require('express');
const router = Router();

//PARA USUARIOS 
const {registrarUsuario, traerUsuario, traerUsuarioId, actualizarUsuario, borrarUsuario} = require('../controller/user');

// PARA ORDENES
const {traerOrdenes, registrarOrden, OrdenRecibida} = require('../controller/orders');
//PARA PRODUCTOS
const {registrarProducto, traerProductos} = require('../controller/products');

//ORDENES
router.post('/ordenes/register', registrarOrden );
router.get('/ordenes', traerOrdenes );
router.post('/ordenes/:id_orden',OrdenRecibida)

//PRODUCTOS
router.post('/productos/register', registrarProducto);
router.get('/productos', traerProductos);

//USUARIOS
router.post('/usuario/register', registrarUsuario);
router.get('/usuario/', traerUsuario);
router.get('/usuario/:id_usuario', traerUsuarioId);
router.delete('/usuario/:id_usuario', borrarUsuario)
router.post('/usuario/:id_usuario',actualizarUsuario,)




module.exports = router;