'use strict';

const Router = require('express').Router();
const TweetService = require('./tweet.service');

Router.route('/')
    .get(async (req, res, next) => {
        let tweet = await TweetService.getAll();
        res.json(tweet);
    })
    .post(async (req, res, next) => {
        let tweet = await TweetService.create(req.body);
        res.json(tweet);
    });

Router.route('/:author')
    .get(async (req, res, next) => {
        let tweets = await TweetService.getByAuthor(req.params.author);
        res.json(tweets);
    });

Router.route('/me/subscriptions')
    .get(async (req, res, next) => {
        let tweets = await TweetService.getBySubscriptions();
        res.json(tweets);
    });

Router.route('/:id/like')
    .get(async (req, res, next) => {
        let tweet = null //TODO see $inc
        res.json(tweet);
    });

module.exports = Router;
