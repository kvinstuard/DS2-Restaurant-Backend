const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const config = require('./config/database')
const { Client } = require('pg')

dotenv.config();
const app = express();



const client = new Client(config)

client
.connect()
.then(() => { console.log('connected to MongoDB atlas')});

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req,res) => {
    res.send('Backend Server');
});

app.listen(port, () => {console.log('server listening on port', port); }) 