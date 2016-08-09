'use strict';

let moduleName = location.pathname.slice(1); // /home
console.log('moduleName:', moduleName);

let context = require.context('./routes', false, /\.js$/);

context.keys().forEach(function(path) {
    let module = context(path);
    module();
});

try {
    let route = context('./' + moduleName);
    route();
} catch(e) {
    alert(e);
}
