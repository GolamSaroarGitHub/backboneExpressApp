define(["backbone", "views/book","views/addNewBook"], function(Backbone, BookView, AddNewBookView) {
    var BookCollectionView = Backbone.View.extend({
      initialize: function() {
        this.listenTo(this.collection, "reset", this.render);
      },
      tagName: "ul",
      className: "books",
      render: function() {
        this.$el.html("");
        this.collection.each(function(book) {
          var bookView = new BookView({ model: book });
          this.$el.append(bookView.render().el);
        }, this);

        // var addBookView = new AddNewBookView();
        // this.$el.append(addBookView.render().el);
        return this;
      }
    });
  
    return BookCollectionView;
  });