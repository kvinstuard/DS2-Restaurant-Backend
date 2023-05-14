const express = require('express');
require('dotenv').config();
const cors = require('cors');
const config = require('./config/database')
const { Client } = require('pg')
const rutas = require("./routes/route")


const app = express();



(async () => {
    const client = new Client({
      host: process.env.PG_HOST,
      port: process.env.PG_PORT,
      user: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DATABASE,
      ssl: true,
    });
    await client.connect();
    const res = await client.query('SELECT $1::text as connected', ['Connection to postgres successful!']);
    console.log(res.rows[0].connected);
    await client.end();
  })();

const port = process.env.PORT || 3000;


//MIDDLEWARE
app.use('/api', rutas)

app.use(cors());
app.use(express.json());

app.get('/', (req,res) => {
    res.send('Backend Server');
});

app.listen(port, () => {console.log('server listening on port', port); }) 