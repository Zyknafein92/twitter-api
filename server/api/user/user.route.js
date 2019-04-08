'use strict';

const Router = require('express').Router();

const USERS = [
    {
        id: 1,
        nom: "Deneux",
        prenom: "Jerome",
    },
    {
        id: 5,
        nom: "Gendillard",
        prenom: "Axel",
    },
];

Router.route('/')
    .get((req, res) => {
        res.json(USERS)
    });

Router.route('/:id')
    .get((req, res) => {
        let user = USERS.find(e => e.id == req.params.id);
        res.json(user);
    });

module.exports = Router;

