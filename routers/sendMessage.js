const router = require('express').Router();
const moment = require('moment');
const getDB = require('../sql');

router.post('/postMessgae', async (req, res) => {
  try {
    const { message } = req.body;
    console.log(req.body);
    console.log(message);
    const db = await getDB()
    const messages = db.collection('messages')
    const all = await messages.insertOne({
      message,
      time: moment().format('YYYY-MM-DD-hh:mm')
    })
    res.json({
      errcode: 0,
      message: 'success'
    })
  } catch (error) {
    res.json({
      errcode: 1,
      message: error?.message || 'post messages error'
    })
  }
}) 

module.exports = router;
