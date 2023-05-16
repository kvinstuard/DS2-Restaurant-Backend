<<<<<<< HEAD
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
    
    
=======
const {getClient} = require('../config/database')

const traerOrdenes = async (req, res) => {
    const pool = await getClient();
    const response = await pool.query('SELECT * FROM ordenes ORDER BY id_orden ASC');
    res.status(200).json(response.rows);
};



const registrarOrden = async (req, res) => {
    const { nombre, cedula, telefono, correo, contraseña, orden1,orden2,orden3 } = req.body;
    const response  = await pool.query(
        'INSERT INTO productos (nombre, cedula, telefono, correo, contraseña, orden1,orden2,orden3, direccion) VALUES ($1, $2)'
        , [nombre, cedula, telefono, correo, contraseña, orden1,orden2,orden3 ]);
    res.json({
        message: 'Orden Registrada, en un momento la atenderemos',
        body: {
            user: {nombre, cedula, telefono, correo, contraseña, orden1,orden2,orden3 }
        }
    })
};

const OrdenRecibida = async (req, res) => {
    try {
      const { id } = req.params;
      const { estado} = req.body;
  
      const result = await pool.query(
        "UPDATE ordenes SET estado = $1, WHERE id = $3 RETURNING *",
        [estado, id]
      );
  
      if (result.rows.length === 0)
        return res.status(404).json({ message: "Orden no encontrada" });
  
      return res.json(result.rows[0]);
    } catch (error) {
      next(error);
    }
  };


module.exports= {
    traerOrdenes,
    registrarOrden,
    OrdenRecibida
    
    
>>>>>>> 2fbb7d72b52c78126e8e3095b710b55a8f376289
};