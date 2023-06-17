const { Client } = require("pg");
require('dotenv').config();


module.exports.getClient = async () => {
const client = new Client({
      PG_HOST: process.env.PG_HOST,
      PG_PORT: process.env.PG_PORT,
      PG_USER: process.env.PG_USER,
      PG_PASSWORD: process.env.PG_PASSWORD,
      PG_DATABASE: process.env.PG_DATABASE,
      PG_DIALECT: process.env.PG_DIALECT,
      PG_POOL_CONNECTION_LIMIT: +process.env.PG_POOL_CONNECTION_LIMIT,
	    PG_POOL_IDLE_TIMEOUT: +process.env.PG_POOL_IDLE_TIMEOUT,
      ssl: true,
    });
    await client.connect();
    return client;
  };
