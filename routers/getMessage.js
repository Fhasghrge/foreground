const router = require('express').Router();
const getDB = require('../sql');

router.get('/allMessage', async (req, res) => {
  try {
    const db = await getDB()
    const messages = db.collection('messages')
    const all = await messages.find({}).toArray();
    res.json({
      errcode: 0,
      data: all
    })
  } catch (error) {
    res.json({
      errcode: 1,
      message: error?.message || 'get messages error'
    })
  }
}) 

module.exports = router;
