const express = require('express');
const cors = require('cors');
const letterRoutes = require('./routes/Routes');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', letterRoutes);



module.exports = app;