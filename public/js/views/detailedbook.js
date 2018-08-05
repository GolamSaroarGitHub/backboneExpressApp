define(["backbone", "handlebars",
"text!templates/book.html"
], function(Backbone, Handlebars,BookTemplate) {
    var DetailedBookView = Backbone.View.extend({
      template: _.template($(BookTemplate).find("#detailedBookTemplate").html()),
      render: function() {
        console.log('detailed');
        this.$el.html(this.template(this.model.attributes));
        return this;
      }
    });
  
    return DetailedBookView;
  });
  