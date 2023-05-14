const { Pool } = require('pg');

const pool = new Pool({
     host: process.env.PG_HOST,
      port: process.env.PG_PORT,
      user: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DATABASE,
      ssl: true,
});

const traerProductos = async (req, res) => {
    const response = await pool.query('SELECT * FROM productos ORDER BY id_producto ASC');
    res.status(200).json(response.rows);
}

const registrarProducto = async (req, res) => {
    const { name, email } = req.body;
    const response = await pool.query('INSERT INTO usuarios (name, email) VALUES ($1, $2)', [name, email]);
    res.json({
        message: 'User Added successfully',
        body: {
            user: {name, email}
        }
    })
};
module.exports ={
    traerProductos,
    registrarProducto
};