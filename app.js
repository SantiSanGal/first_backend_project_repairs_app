const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const usersRouter = require('./routes/users.routes');
const repairsRouter = require('./routes/repairs.routes');

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use((req, res, next) =>{
    req.requesTime = new Date()
    next();
});

app.use('/api/v1/users', usersRouter);
app.use('/api/v1/repairs', repairsRouter);

module.exports = app;
