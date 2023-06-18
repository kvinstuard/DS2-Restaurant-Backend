const { Client } = require("pg");
require('dotenv').config();


module.exports.getClient = async () => {
const client = new Client({
      host: process.env.PG_HOST,
      port: process.env.PG_PORT,
      user: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DATABASE,
      PG_DIALECT: 'postgres',
      PG_POOL_CONNECTION_LIMIT: +process.env.PG_POOL_CONNECTION_LIMIT,
	    PG_POOL_IDLE_TIMEOUT: +process.env.PG_POOL_IDLE_TIMEOUT,
      ssl: require,
    });
    await client.connect();
    return client;
  };
