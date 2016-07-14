const express = require('express')
const tasks   = express.Router();
const db = require('../models/tasks');

const sendString = (req,res)=>res.send(`showed task ${req.params.id}`)
const sendJSONresp = (req,res) =>res.json(res.rows)


tasks.route('/:taskID')
     .get(db.getSingleTask, sendJSONresp)
     .put(db.updateTask, sendJSONresp)
     .delete(db.deleteTask, (req, res)=>res.send(req.params.taskID))


tasks.route('/')
     .get(db.getTasks, sendJSONresp)
     .post(db.addTask, sendJSONresp)


module.exports = tasks;
