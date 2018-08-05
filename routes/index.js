let db = require('../database.js');

exports.books = {};
exports.index = function(req, res){
    db.books.find(function(err, books){
        var data = JSON.stringify(books);
        res.render('index', {title:'Backbone App', appData:data});
    });
    
};

exports.books.all = function(req, res) {
  db.books.find(function(err, books){
    if (err) {
        return;
    } else {
        res.json(books);
        
    }
    
});
}; 


exports.books.one = function (req, res) {
    let bookId = db.ObjectId(req.params.id);
    db.books.findOne({_id:bookId}, function(err, book){
        if (err) {
            console.log('Error finding  the book with id');
            return;
        } else {
            res.json(book);
        }
       
    });
};

exports.books.create = function(req, res) {
    res.json(req.body);
    db.books.save(req.body);
};
