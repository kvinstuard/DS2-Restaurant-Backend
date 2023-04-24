const { Router } = require('express');
const router = Router();

//PARA USUARIOS 
const {registrarUsuario} = require('../controller/user');
 /*loginUsuario*/
// PARA ORDENES
const {traerOrdenes} = require('../controller/orders');
//PARA PRODUCTOS
const {registrarProducto, traerProductos} = require('../controller/products');

router.get('/', traerOrdenes );
router.get('/api/productos', traerProductos);
router.post('/api/register', registrarUsuario);
router.post('/api/register', registrarProducto);



module.exports = router;