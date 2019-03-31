'use strict';

const Express = require('express');
const BodyParser = require('body-parser');
const Morgan = require('morgan');

/* ---------- APPLICATION ---------- */

let app = Express();

/* ---------- ROUTES ---------- */

const API_ROOT = '/api';
const TweetRoute = require('./api/tweet/tweet.route');

/* ---------- CONFIGURATIONS ---------- */

app.route('/status').get((req, res) => res.send('Server Express listening'));

app.use(Morgan('dev'));
app.use(BodyParser.urlencoded({ extended: true }));
app.use(BodyParser.json());
app.use(Express.static('./client'));

app.use((req, res, next) => {
    console.log('Big Cat');
    next();
});

app.use(API_ROOT + '/tweets', TweetRoute);

/* ---------- ROUTES ---------- */

app.start = port => app.listen(port, () => console.info(`[${process.env.NODE_ENV}] Server listening @ localhost:${port}`));

module.exports = app;
