define(["backbone", "views/book","views/addNewBook","events"], 
function(Backbone, BookView, AddNewBookView, Events) {
    var BookCollectionView = Backbone.View.extend({
      initialize: function() {
        this.listenTo(this.collection, "reset", this.render);
      },
      events:{
        "click #addNewBook": "addNewBook"
      },
      tagName: "ul",
      className: "books",
      render: function() {
        this.$el.html('<button id="addNewBook">Add New Book</button>');
        this.collection.each(function(book) {
          var bookView = new BookView({ model: book });
          this.$el.append(bookView.render().el);
        }, this);
        return this;
      },
      addNewBook: function(e){
        e.preventDefault();
        var url = "addnewbook";
        Events.trigger("router:navigate", url);
      }
    });
  
    return BookCollectionView;
  });