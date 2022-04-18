const express = require('express');
const router = express.Router();

router.use(require('./getMessage'))
router.use(require('./search'))
router.use(require('./sendMessage'))
router.use(require('./deleteMessage'))


module.exports = router;
