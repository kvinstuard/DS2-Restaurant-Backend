const traerOrdenes = async (req, res) => {
    const response = await pool.query('SELECT * FROM ordenes ORDER BY id ASC');
    res.status(200).json(response.rows);
};





module.exports= {
    traerOrdenes
    
    
};