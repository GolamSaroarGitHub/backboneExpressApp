
// define(['text!appIndex.html'], function(indexTemplate){
    
var Book = Backbone.Model.extend({
    idAttribute: '_id'
});

var BookCollection = Backbone.Collection.extend({
    model: Book,
    url: '/books'
});



var BookView = Backbone.View.extend({
    events:{
        'click .name':'singlebookView'
    },
    tagName: 'li',
    // template: _.template("<h3><%=name%></h3>"),
    render: function() {

        +
        this.$el.html('');
        var template=$('#bookTemplate').html();
        var compiled = _.template(template);
        var html = compiled(this.model.attributes)
        this.$el.html(html);
        return this;
    },
    singlebookView: function(e){
        e.preventDefault();
        var id = this.model.get('_id');
        router.navigate('books/'+id,{trigger:true});
    }
});

var DetailedBookView = Backbone.View.extend({
    render:function(){
        var template=$('#detailedBookTemplate').html();
        var compiled = _.template(template);
        var html = compiled(this.model.attributes)
        this.$el.html(html);
        return this;
    }
});




var BookCollectionView = Backbone.View.extend({
    tagName: 'ul',
    initialize: function(){
        this.listenTo(this.collection, 'reset', this.render);
    },
    render: function() {
        this.$el.html("");
        this.collection.each(function(book){
            var bookView = new BookView({model:book});
            this.$el.append(bookView.render().el);
        }, this);
        return this;
    }
});

var AppRouter = Backbone.Router.extend({
    initialize:function(){
        this.setupCollection();
    },
    routes: {
        "": "index",
        "books/:id": "singlebook"
    },
    setupCollection: function(){
        var data = $('#initialContent').html();
        if (this.collection) return;
        this.collection = new BookCollection(JSON.parse(data))
    },
    renderView: function(view){
        // $('.app').html('');
        $('.app').append(view.render().el);
    },
    index: function(){
        var view = new BookCollectionView({collection: this.collection});
        this.renderView(view);
    },
    singlebook: function(id){
        var book = this.collection.get(id);
        var view = new DetailedBookView({model:book});
        this.renderView(view);

    }

});

// });
