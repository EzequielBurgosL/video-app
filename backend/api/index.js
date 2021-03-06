'use strict'

require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const router = require('./routes');

const { env: { PORT, DB_URL } } = process;
const DEFAULT_PORT = 3000;

mongoose.connect(DB_URL)
  .then(() => {
    const port = PORT || process.argv[2] || DEFAULT_PORT;
    const app = express();

    app.use(cors());
    app.use('/api', router);
    app.listen(port, () => console.log(`server running on port ${port}`));

    process.on('SIGINT', () => {
      console.log('\nstopping server');

      mongoose.connection.close(() => {
        console.log('db connection closed');

        process.exit();
      });
    });
  })
  .catch(console.error);