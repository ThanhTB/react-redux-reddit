const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

dotenv.config();

const PORT = process.env.PORT || 8080;

mongoose.connect(process.env.DB_URL, () => {
  console.log('CONNECTED TO MONGO DB');
});

const app = express();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(
  bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
    parameterLimit: 50000,
  })
);
app.use(cors());
app.use(cookieParser());
app.use(helmet());
app.use(morgan('common'));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
