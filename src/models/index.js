const Sequelize = require("sequelize");
const {
	PG_DATABASE,
	PG_USER,
	PG_PASSWORD,
	PG_HOST,
	PG_PORT,
	PG_POOL_CONNECTION_LIMIT,
	PG_POOL_IDLE_TIMEOUT,
} = require("../config/database");
const sequelizeInstance = new Sequelize(PG_DATABASE, PG_USER, PG_PASSWORD, {
	host: PG_HOST,
	port: PG_PORT,
	dialect: "postgres",
	pool: {
		max: PG_POOL_CONNECTION_LIMIT,
		idle: PG_POOL_IDLE_TIMEOUT,
	},
	define: {
		timestamps: false,
	},
	logging: false,
});

const db = {};
db.sequelizeInstance = sequelizeInstance;
db.tasks = require("./ordenes.model")(sequelizeInstance);
db.tasks = require("./productos.models")(sequelizeInstance);
db.tasks = require("./usuario.models")(sequelizeInstance);


module.exports = db;
