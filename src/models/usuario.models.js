const { DataTypes } = require("sequelize");
module.exports = (sequelizeInstance) => {

const usuario = sequelizeInstance.define('usuario', {
  id_usuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  cedula: {
    type: DataTypes.STRING(20),
    allowNull: true
  },
  telefono: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  correo: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  contraseña: {
    type: DataTypes.STRING(255),
    allowNull: true
  }
}, {
  tableName: 'usuario',
  timestamps: false,
  schema: 'public',
  // Add the owner name here (replace 'wilmer.cantillo' with the actual owner name)
  owner: 'wilmer.cantillo'
});

  return usuario
};
