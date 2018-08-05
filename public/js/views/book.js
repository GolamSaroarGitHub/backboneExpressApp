define(["backbone", "handlebars", 
"jquery", "events","text!templates/book.html"
], function(Backbone, Handlebars, $, Events, BookTemplate) {
    var BookView = Backbone.View.extend({
      events: {
        "click .name": "singleBookLink"
      },
      tagName:'li',
      template:_.template($(BookTemplate).find('#bookTemplate').html()),
      render: function() {
        this.$el.html(this.template(this.model.attributes));
        return this;
      },
      singleBookLink: function(e) {
        e.preventDefault();
        var id = this.model.get("_id");
        var url = "book/" + id;
        Events.trigger("router:navigate", url);
      }
    });
  
    return BookView;
  });