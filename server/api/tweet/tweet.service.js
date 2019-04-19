'use strict';

const Tweet = require('./tweet.model');
const UserService = require('../user/user.service');

class TweetService {
    static getAll() {
        return Tweet.find();
    }
    static getById(id){
        return Tweet.findById(id);
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

    static like(id, qt) {
       return Tweet.findByIdAndUpdate(id, {$inc: {likes: qt}}, {new: true});
    }

}
module.exports = TweetService;
