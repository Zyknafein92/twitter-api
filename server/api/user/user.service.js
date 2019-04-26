'use strict';

const User = require('./user.model');
const Bcrypt = require('bcryptjs');

const CURRENT_AUTH_USER = 'zyk';

class UserService {
    static getAll() {
        return User.find();
    }

    static create(user) {
        user.password = Bcrypt.hashSync(user.password);
        return User.create(user);
    }

    static getByPseudo(pseudo) {
        return User.findOne({pseudo});
    }

    static getMe() {
        return User.findOne({pseudo: CURRENT_AUTH_USER});
    }

    static async subscribe(pseudo) {
        let me = await User.findOneAndUpdate({pseudo: CURRENT_AUTH_USER}, {$addToSet: {subscriptions: pseudo}}, {new: true});
        await User.findOneAndUpdate({pseudo}, {$addToSet: {followers: me.pseudo}});
        return me;
    }

    static async unsubscribe(pseudo){
        let me = await User.findOneAndUpdate({pseudo: CURRENT_AUTH_USER}, {$pull: {subscriptions:pseudo}}, {new: true});
        await User.findOneAndUpdate({pseudo}, {$pull: {followers: me.pseudo}});
        return me;
    }

    static comparePassword(clear, hash) {
        return Bcrypt.compareSync(clear, hash);
    }
}

module.exports = UserService;
