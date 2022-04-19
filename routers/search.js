const router = require('express').Router();
const data = require('../data');

router.get('/search', async (req, res) => {
  const { keyword } = req.query;
  console.log(decodeURIComponent(keyword));
  if (!keyword || !keyword.trim()) {
    return res.json({
      errocde: 1,
      message: 'invalid keyword'
    })
  }
  const matchRes = data.filter(
    ({ keywords }) => {
      const key = String(keyword).trim().toLocaleLowerCase()
      return String(keywords).toLocaleLowerCase().includes(key)
    }
  )
  res.json({
    errcode: 0,
    data: matchRes
  })
})

module.exports = router;
