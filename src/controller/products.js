const {getClient} = require('../config/database')

const traerProductos = async (req,res) => {
    const pool = await getClient();
    const response = await pool.query('SELECT * FROM productos ORDER BY id_producto ASC');
    res.status(200).json(response.rows);
    
};


const registrarProducto = async (req, res) => {
    const { nombre, precio, categoria } = req.body;
    const response  = await pool.query('INSERT INTO productos (nombre, precio, categoria) VALUES ($1, $2, $3)', [nombre, precio, categoria]);
    res.json({
        message: 'User Added successfully',
        body: {
            user: {nombre, precio, categoria}
        }
    })
};

module.exports ={
    traerProductos,
    registrarProducto
};