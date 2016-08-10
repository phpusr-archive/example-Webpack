'use strict';

let moment = require('moment');

let today = moment(new Date()).locale('ja');

alert(today.format('DD MMM YYYY'));
