define(["backbone", "events", "collections/book", "views/bookcollection","views/addNewBook", "views/detailedbook"],
 function(Backbone, Events, BookCollection, BookCollectionView, AddNewBookView, DetailedBookView) {
    var Router = Backbone.Router.extend({
      initialize: function() {
        var self = this;
        this.setupCollection();
        Events.on("router:navigate", function(url) {
          self.navigate(url, { trigger: true });
        });
      },
      routes: {
        "": "index",
        "book/:id": "singleBook"
      },
      setupCollection: function() {
        if(this.collection) return;
        var data = $("#initialContent").html();
        this.collection = new BookCollection(JSON.parse(data));
      },
      renderView: function(view) {
        $(".app").html(view.render().el);
      },
      index: function() {
        var view = new BookCollectionView({ collection: this.collection});
        this.renderView(view);
      },
      singleBook: function(id) {
        var book = this.collection.get(id);
        var view = new DetailedBookView({ model: book });
        this. renderView(view);
      }
    });
    return Router;
  });