const { DataTypes } = require("sequelize");
module.exports = (sequelizeInstance) => {

const productos = sequelizeInstance.define('productos', {
  id_producto: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  precio: {
    type: DataTypes.STRING(20),
    allowNull: true
  },
  categoria: {
    type: DataTypes.STRING(100),
    allowNull: true
  }
}, {
  tableName: 'productos',
  timestamps: false,
  schema: 'public',
  // Add the owner name here (replace 'wilmer.cantillo' with the actual owner name)
  owner: 'wilmer.cantillo'
});

  return productos
};
