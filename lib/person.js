'use strict';

module.exports = exports = {};

exports.sayHi = (name) => {
    console.log('yooo');
   if( typeof name !== "string" ) { return undefined; }

   return `Hello, ${name}`;
};

