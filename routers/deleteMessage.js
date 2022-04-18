const router = require('express').Router();
const { ObjectId } = require('mongodb');
const getDB = require('../sql');
router.get('/deleteMessage', async (req, res) => {
  try {
    const {id} = req.query;
    const db = await getDB();
    const messageColl = db.collection('messages');
    await messageColl.deleteOne({
      "_id": ObjectId(id)
    })
    res.json({
      errcode: 0
    })
  } catch (error) {
    res.json({
      errcode: 1,
      message: error?.message || 'delete error'
    })
  }
})

module.exports = router;
