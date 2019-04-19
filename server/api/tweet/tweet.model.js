'use strict';

const Mongoose = require('mongoose');

const options = {
    timestamps: true,
};

const TweetSchema = new Mongoose.Schema({

    message: {type: String, required: true},
    author: {type: String, required: true, trim: true, lowercase: true},
    comments: [],
    likes: {type: Number, default: 0, min: 0},
    tags: [],

}, options);

module.exports = Mongoose.model('Tweet', TweetSchema);
