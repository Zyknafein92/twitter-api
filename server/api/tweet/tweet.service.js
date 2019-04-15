'use strict';

const Tweet = require('./tweet.model');

class TweetService {
    static getAll() {
        return Tweet.find();
    }

    static create(tweet) {
        return Tweet.create(tweet);
    }
}

module.exports = TweetService;
