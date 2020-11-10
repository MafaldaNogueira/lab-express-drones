const mongoose = require('mongoose');
const { Schema, model} = mongoose;

const droneSchema = new Schema(
      {
    name: String,
    propellers: Number,
    maxSpeed: Number,
    img: String
      },
      {
        timestamps: true
      }
)

module.exports = model('Drone', droneSchema);

// terminal nodemon bin/seeds.js