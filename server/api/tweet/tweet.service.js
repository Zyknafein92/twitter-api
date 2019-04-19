'use strict';

const Tweet = require('./tweet.model');
const UserService = require('../user/user.service');

class TweetService {
    static getAll() {
        return Tweet.find();
    }

    static create(tweet) {
        return Tweet.create(tweet);
    }

    static getByAuthor(author) {
        return Tweet.find({author});
    }

    static async getBySubscriptions() {
        let me = await UserService.getMe();
        return Tweet.find({author: {$in: me.subscriptions}});
    }
}
module.exports = TweetService;
