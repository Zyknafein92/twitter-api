'use strict';

const User = require('./user.model');

class UserService {
    static getAll() {
        return User.find();
    }

    static create(user) {
        return User.create(user);
    }

    static getById(id) {
        return []; //todo
    }
}

module.exports = UserService;