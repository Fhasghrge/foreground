const router = require('express').Router();
const data = require('../data');

router.get('/search', async (req, res) => {
  const { keyword } = req.query;
  if(!keyword) {
    return res.json({
      errocde: 1,
      message: 'invalid keyword'
    })
  }
  const matchRes = data.filter(({ keywords }) => keywords.includes(keyword));

  res.json({
    errcode: 0,
    data: matchRes
  })

})

module.exports = router;
