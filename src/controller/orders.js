const {getClient} = require('../config/database')

const traerOrdenes = async (req, res) => {
    const pool = await getClient();
    const response = await pool.query('SELECT * FROM ordenes ORDER BY id_orden ASC');
    res.status(200).json(response.rows);
};





module.exports= {
    traerOrdenes
    
    
};