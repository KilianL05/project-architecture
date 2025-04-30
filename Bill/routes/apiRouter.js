const express = require('express');
const storageRouter = require('./api/storageRouter');
const transformRoutes = require('./api/transformRouter');


const router = express.Router();

router.use('/storage', storageRouter);
router.use('/transform', transformRoutes);

module.exports = router;
