const express = require('express');
const storageRouter = require('./api/storageRouter');
const Transformation = require('../models/Transformation');
const transformRoutes = require('./api/transform');


const router = express.Router();

router.use('/storage', storageRouter);
router.use('/transform', transformRoutes);

module.exports = router;
