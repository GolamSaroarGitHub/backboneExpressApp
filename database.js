const mongoDb =require('mongojs');

var dbUrl = 'library';
var collection =['books'];
var db =mongoDb(dbUrl,collection);

module.exports = db;
