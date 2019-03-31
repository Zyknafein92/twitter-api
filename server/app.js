'use strict';

const Express = require('express');
const BodyParser = require('body-parser');
const Morgan = require('morgan');

/* ---------- APPLICATION ---------- */

let app = Express();

/* ---------- CONFIGURATIONS ---------- */

app.use(Morgan('dev'));
app.use(BodyParser.urlencoded({ extended: true }));
app.use(BodyParser.json());

/* ---------- ROUTES ---------- */

app.route('/http').get((req, res) => {
    // res.status(418).json(42);
    res.sendStatus(418)
})

app.route('/:id')
    .all((req, res) => {
        let object = {
            msg: 'Hello World!',
            query: req.query,
            body: req.body,
            params: req.params,
        };
        res.json(object);
    });

app.start = port => app.listen(port, () => console.info(`[${process.env.NODE_ENV}] Server listening @ localhost:${port}`));

module.exports = app;
