const moment = require('moment');

// var date = new Date();
// var months = 
// console.log(date.getMonth());


// console.log(date.format('MMM Do, YYYY, kk:mm:ss'));

// 11:24 am


var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 1234;
var date = moment(createdAt);

console.log(date.format('h:mm a'));
