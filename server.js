'use strict'
const env         = process.env.NODE_ENV || 'development';
const DEV         = env==='development';
const dotenv      = (DEV) ? require('dotenv').config() : undefined;

const express        = require('express')
const logger         = require('morgan');
const path           = require('path');
const PORT           = process.env.PORT || 3000;
const tasksRoute     = require('./routes/tasks')
const bodyParser     = require('body-parser')
const app            = express()

app.listen(PORT, function(){
  console.log('Server Running On ', PORT)
})
app.use(express.static(path.join(__dirname, 'dist')))
app.use(logger(DEV ? 'dev' : 'common'))

app.use(bodyParser.json())




// app.get('/', function(req,res){
//   res.send('home')
// })

app.use('/tasks', tasksRoute)
