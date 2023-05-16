const {getClient} = require('../config/database')

const registrarUsuario = async (req, res) => {
    const pool = await getClient();
    const { name, email } = req.body;
    const response = await pool.query('INSERT INTO usuarios (name, email) VALUES ($1, $2)', [name, email]);
    res.json({
        message: 'User Added successfully',
        body: {
            user: {name, email}
        }
    })
};

module.exports={
    registrarUsuario

}