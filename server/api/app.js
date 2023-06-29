require('dotenv').config();
const express = require('express');
const sequelize = require('../db');
const models = require('../models/models');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const router = require('../routes');
const errorHandler = require('../middleware/ErrorHandlingMiddleWare');
const path = require('path');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(fileUpload({}));
app.use('/api', router);

// error handler - last middleware
app.use(errorHandler);


const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log('server started'))
  } catch (error) {
    console.log(error);
  }
}

module.exports = start;
