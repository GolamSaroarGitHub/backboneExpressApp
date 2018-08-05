define(["backbone", 
"jquery","text!templates/book.html"
], function(Backbone,$, BookTemplate) {
    var AddBookView = Backbone.View.extend({
      events: {
        "click .name": "singleBookLink"
      },
      template:_.template($(BookTemplate).find('#addBookTemplate').html()),
      render: function() {
        this.$el.html(this.template());
        return this;
      }
    });
  
    return AddBookView;
  });