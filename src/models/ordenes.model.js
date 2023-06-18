const { DataTypes } = require("sequelize");
module.exports = (sequelizeInstance) => {

const ordenes = sequelizeInstance.define('ordenes', {
  id_orden: {
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
  orden1: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'productos',
      key: 'id_producto'
    }
  },
  orden2: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'productos',
      key: 'id_producto'
    }
  },
  orden3: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'productos',
      key: 'id_producto'
    }
  },
  direccion: {
    type: DataTypes.STRING,
    allowNull: true
  },
  estado: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  }
}, {
  tableName: 'ordenes',
  timestamps: false,
  schema: 'public',
  // Add the owner name here (replace 'wilmer.cantillo' with the actual owner name)
  owner: 'wilmer.cantillo'
});

  return ordenes
};