const {getClient} = require('../config/database')


const traerUsuario = async (req,res) => {
    const pool = await getClient();
    const response = await pool.query('SELECT * FROM usuario ORDER BY id_usuario ASC');
    res.status(200).json(response.rows);
    await pool.end()
    
};


const traerUsuarioId = async (req, res)  => {
    const pool = await getClient();
    const id = parseInt(req.params.id_usuario);
    const response = await pool.query('SELECT * FROM usuario WHERE id_usuario = $1', [id]);
    await pool.end()
    return res.json(response.rows);
    
};

const registrarUsuario = async (req, res) => {
    const pool = await getClient();
    const { name, email } = req.body;
    const response = await pool.query('INSERT INTO usuario (nombre, correo) VALUES ($1, $2)', [name, email]);
    res.json({
        message: 'User Added successfully',
        body: {
            user: {name, email}
        }
    })
    await pool.end()
};

const actualizarUsuario = async (req, res) => {
    const pool = await getClient();
    try {
      const id = parseInt(req.params.id);
      const  email  = req.body;
      const result = await pool.query(
        "UPDATE usuario SET correo = $1  WHERE id_usuario = $2 RETURNING *",
        [email, id]
      );
  
      if (result.rows.length === 0)
        return res.status(404).json({ message: "Orden no encontrada" });
  
      return res.json(result.rows[0]);
    } catch (error) {
      next(error);
    }
    await pool.end()
  };

  const borrarUsuario = async (req, res) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM usuario where id = $1', [
        id
    ]);
    res.json(`User ${id} deleted Successfully`);
    await pool.end()
};
module.exports={
    registrarUsuario,
    traerUsuario,
    traerUsuarioId,
    actualizarUsuario,
    borrarUsuario

}