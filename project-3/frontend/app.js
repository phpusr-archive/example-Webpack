'use strict';

let moduleName = location.pathname.slice(1); // /home
console.log('moduleName:', moduleName);

let route = require('./routes/' + moduleName);
route();