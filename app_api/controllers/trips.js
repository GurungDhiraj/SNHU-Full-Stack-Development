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

const tripsAddTrip = async(req, res) => {
    const newTrip = await Trip({
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
    });

    const q = await newTrip.save();

        if(!q)
        { //Database returned no data
            return res
                .status(400)
                .json(err);

        }else { //Return new trip
            return res
                .status(201)
                .json(q);
        }
};

// PUT: /trips/:tripCode - Adds a new Trip
// Regardless of outcome, response must include HTML statuscode
// and JSON message to the requesting client
const tripsUpdateTrip = async(req, res) => {
    // Uncomment for debugging
    console.log(req.params);
    console.log(req.body);

    const q = await Model
        .findOneAndUpdate(
            { 'code' : req.params.tripCode },
            {
                code: req.body.code,
                name: req.body.name,
                length: req.body.length,
                start: req.body.start,
                resort: req.body.resort,
                perPerson: req.body.perPerson,
                image: req.body.image,
                description: req.body.description
            }
        )
        .exec();

        if(!q)
        { // Database returned no data
            return res
                .status(400)
                .json(err);
        } else { // Return resulting updated trip
            return res
                .status(201)
                .json(q);
        }
        
    // Uncomment the following line to show results ofoperation
    // on the console
    // console.log(q);
};

const tripsDeleteTrip = async(req, res) => {
    // Uncomment for debugging
    console.log(req.params);

    const q = await Model
        .findOneAndDelete(
            { 'code' : req.params.tripCode }
        )
        .exec();

        if(!q)
        { // Database returned no data
            return res
                .status(400)
                .json(err);
        } else { // Return resulting updated trip
            return res
                .status(201)
                .json(q);
        }
        
    // Uncomment the following line to show results ofoperation
    // on the console
    // console.log(q);
};

module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip,
    tripsDeleteTrip
};