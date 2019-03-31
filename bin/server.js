#!/usr/bin/env node

'use strict';

/* ---------- ENVIRONMENT VARIABLES ---------- */

require('dotenv').config();

/* ---------- MAIN ---------- */

const SERVER = '../server';
const App = require(SERVER + '/app');

App.start(process.env.PORT);

/*
* Auth
* User
* Tweet
* Comments
* */
