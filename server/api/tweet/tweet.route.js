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

// todo: Faire la route pour avoir tous les tweets d'un utilisateur.

module.exports = Router;
