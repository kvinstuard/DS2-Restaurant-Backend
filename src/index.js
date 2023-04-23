const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();

const router = require('./routes');

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req,res) => {
    res.send('Backend Server');
});

routerApi(app);

app.listen(port,()=>{
    console.log("Port ==> ", port);
});