const {getClient} = require('../config/database')

const traerOrdenes = async (req, res) => {
    const pool = await getClient();
    const response = await pool.query('SELECT * FROM ordenes ORDER BY id_orden ASC');
    res.status(200).json(response.rows);
    await pool.end()
};



const registrarOrden = async (req, res) => {
    const pool = await getClient();
    const { nombre, cedula, telefono, correo, orden1 ,orden2 ,orden3, direccion } = req.body;
    const response  = await pool.query(
        'INSERT INTO ordenes (nombre, cedula, telefono, correo, orden1, orden2, orden3, direccion) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)'
        , [nombre, cedula, telefono, correo, orden1 ,orden2 ,orden3, direccion ]);
    res.json({
        message: 'Orden Registrada, en un momento la atenderemos',
        body: {
            user: {nombre, cedula, telefono, correo, orden1 ,orden2 ,orden3, direccion }
        }
    })
    await pool.end()
};

/*
const OrdenRecibida = async (req, res) => {
    const pool = await getClient();
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
    await pool.end()
  };
*/

module.exports= {
    traerOrdenes,
    registrarOrden
    //OrdenRecibida
};