const express = require('express'); // Express App
const router = express.Router(); // Router logic

// import controllers we will route
const tripsController = require('../controllers/trips');

// Define route for our trips endpoint
router.route('/trips').get(tripsController.tripsList);

// GET Method for tripsFindByCode => requires a parameter
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode);

module.exports = router;