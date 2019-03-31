'use strict';

const Router = require('express').Router();

Router.route('/')
    .all((req, res) => {
        let object = {
            msg: 'Hello World!',
            query: req.query,
            body: req.body,
            params: req.params,
        };
        res.json(object);
    });

Router.route('/status')
    .get((req, res) => {
        res.sendStatus(418)
    });

module.exports = Router;
