'use strict';

const Router = require('express').Router();
const UserService = require('./user.service');

Router.route('/')
    .get(async (req, res, next) => {
        let users = await UserService.getAll().catch(err => next(err));
        res.json(users)
    })
    .post(async (req, res, next) => {
       let user = await UserService.create(req.body).catch(err => {next(err)});
       res.json(user);
    });

Router.route('/:id')
    .get(async (req, res, next) => {
        let user = await UserService.getById(req.params.id).catch(err => next(err));
        res.json(user);
    });

module.exports = Router;

