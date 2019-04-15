'use strict';

const Express = require('express');
const BodyParser = require('body-parser');
const Morgan = require('morgan');

/* ---------- APPLICATION ---------- */

let app = Express();

/* ---------- ROUTES ---------- */

const TweetRoute = require('./api/tweet/tweet.route');
const UserRoute = require('./api/user/user.route');

/* ---------- CONFIGURATIONS ---------- */

app.route('/status').get((req, res) => res.send('Server Express listening'));

app.use(Morgan('dev'));
app.use(BodyParser.urlencoded({ extended: true }));
app.use(BodyParser.json());
app.use(Express.static('./client'));

app.use('/api/tweets', TweetRoute);
app.use('/api/users', UserRoute);

/* ---------- ROUTES ---------- */

app.start = port => app.listen(port, () => console.info(`[${process.env.NODE_ENV}] Server listening @ localhost:${port}`));

module.exports = app;
