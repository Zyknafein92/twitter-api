'use strict';

const Router = require('express').Router();
const UserService = require('./user.service');

Router.route('/')
    .get(async (req, res) => {
        let users = await UserService.getAll();
        res.json(users)
    })
    .post(async (req, res) => {
       let user = await UserService.create(req.body);
       res.json(user);
    });

Router.route('/:id')
    .get((req, res) => {
        let user = UserService.getById(req.params.id);
        res.json(user);
    });

module.exports = Router;

