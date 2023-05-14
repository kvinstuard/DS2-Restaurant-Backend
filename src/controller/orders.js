const { Pool } = require('pg');

const pool = new Pool({
     host: process.env.PG_HOST,
      port: process.env.PG_PORT,
      user: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DATABASE,
      ssl: true,
});

const traerOrdenes = async (req, res) => {
    const response = await pool.query('SELECT * FROM ordenes ORDER BY id_orden ASC');
    res.status(200).json(response.rows);
};





module.exports= {
    traerOrdenes
    
    
};