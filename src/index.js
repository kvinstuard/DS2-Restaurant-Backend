const express = require('express');
require('dotenv').config();
const cors = require('cors');
const {getClient} = require('./config/database')
const rutas = require("./routes/route")


const app = express();



(async () => {
    const client = await getClient();

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