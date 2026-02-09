const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // Used to register model
const Model = mongoose.model('trips');

// GET: /trips ==> lists all the trips
// Response must include HTML status code and JSON Message regardless of outcome
const tripsList = async(req, res) => {
    const q = await Model
        .find({}) // Returns all records since there's no filters
        .exec();

        // Shows query results
        // console.log(q);
    
    
    // if database returned no data
    if(!q)
    {
        return res
                .status(404)
                .json(err);
    }
    // Else return resulting trip list
    else
    {
        return res
                .status(200)
                .json(q);
    }    
};

// New endpoint that will only take a single parameter
const tripsFindByCode = async(req, res) => {
    const q = await Model
        .find({'code' : req.params.tripCode}) // Returns a single record due to added selection parameter
        .exec();

        // Shows query results
        // console.log(q);
    
    
    // if database returned no data
    if(!q)
    {
        return res
                .status(404)
                .json(err);
    }
    // Else return resulting trip list
    else
    {
        return res
                .status(200)
                .json(q);
    }    
};

module.exports = {
    tripsList,
    tripsFindByCode
};