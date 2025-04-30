const express = require('express');
const storageRouter = require('./api/storageRouter');


const router = express.Router();

router.use('/storage', storageRouter);

module.exports = router;
